const Anthropic = require("@anthropic-ai/sdk");

const anthropic = process.env.ANTHROPIC_API_KEY
    ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
    : null;


const CLAUDE_MODEL = "claude-haiku-4-5-20251001";


function buildSystemPrompt(agentType, taskType, tone, audience, extraNotes)
{
    const commonFooter = `
Tone of voice: ${tone || "Professional & Engaging"}.
Target audience: ${audience || "general industry professionals and customers"}.
${extraNotes ? `Additional instructions from the user: ${extraNotes}` : ""}
Format the output in clean Markdown (headings, bullet points, tables where useful).`;

    if (agentType === "content_writing")
    {
        return `You are the Content Writing Agent, a specialist AI content strategist and SEO copywriter.
Your job is to produce long-form, publish-ready written content: blog posts, website copy, e-book
chapters, and SEO-optimized articles.

Workflow you must silently follow before writing:
1. Identify search intent and the audience's core pain point for the topic.
2. Plan a logical outline with a clear H1 and H2/H3 semantic hierarchy.
3. Draft long-form content that naturally integrates the topic as a keyword.
4. End with a short, concrete takeaway or action section.

Deliverable requested: "${taskType}".
${commonFooter}`;
    }

    if (agentType === "copywriting_ads")
    {
        return `You are the Copywriting & Ads Agent, an elite direct-response copywriter specializing in
paid ads, product descriptions, email copy, and CTAs.

Workflow you must silently follow before writing:
1. Extract the core customer pain point and the unique selling proposition (USP) from the topic.
2. Apply a direct-response framework (AIDA, PAS, or Before-After-Bridge) explicitly.
3. Write a punchy hook/headline within realistic character limits for the platform.
4. Always end with one or more clear, varied calls-to-action (CTA).

Deliverable requested: "${taskType}". If the deliverable is a specific ad platform (Facebook, Google,
LinkedIn) respect that platform's real format conventions (headline/body/CTA structure, character
limits). If it's "CTA Variations", return at least 5 distinct CTA lines.
${commonFooter}`;
    }

    // video_production
    return `You are the Video Production Agent, a professional video scriptwriter and creative director.
Your job is to produce production-ready video scripts, storyboards, shot lists, voice-over scripts,
and short-form social video content.

Workflow you must silently follow before writing:
1. Open with a 3-second hook designed to stop the scroll.
2. Write a dual-track script: a Visual/Camera-direction column and an Audio/VO/SFX column, tied to
   timestamps.
3. Specify shot types, camera movement, and pacing.
4. Close with production notes (lighting, pacing, sound design) and a clear on-screen CTA.

Deliverable requested: "${taskType}". Present the script as a Markdown table with columns:
Time | Visual / Camera Direction | Audio / Voice-over / SFX.
${commonFooter}`;
}


function generateFallbackResponse(agentType, taskType, topic, tone, targetAudience, extraNotes)
{
    const cleanTopic = topic.trim();
    const audience = targetAudience?.trim() || "Industry Professionals & Customers";
    const selectedTone = tone || "Professional & Engaging";

    if (agentType === "content_writing")
    {
        return `${cleanTopic}: Industry Guide (Offline Fallback)

Deliverable: ${taskType}
Target Audience: ${audience} | Tone: ${selectedTone}

⚠️ This is a locally generated fallback because the live Claude API call failed.
See the "source" field in the response for the exact error.

1. Why ${cleanTopic} Matters
A concise framing of why ${cleanTopic} matters to ${audience} right now.

2. Key Points
- Core benefit 1 relevant to ${cleanTopic}
- Core benefit 2 relevant to ${audience}
- A measurable outcome or proof point

3. Next Steps
Practical next steps for ${audience} to act on ${cleanTopic}.
${extraNotes ? `\n Note: ${extraNotes}` : ""}`;
    }

    if (agentType === "copywriting_ads")
    {
        return `${taskType} — ${cleanTopic} (Offline Fallback)

⚠️ Live Claude call failed — showing a locally generated placeholder.

Headline: Discover a Better Way to Handle ${cleanTopic}
Body: Built for ${audience}, designed to solve real problems fast.
CTA: Get Started Today

${extraNotes ? `\n Note: ${extraNotes}` : ""}`;
    }

    return `${taskType} — ${cleanTopic} (Offline Fallback)

⚠️ Live Claude call failed — showing a locally generated placeholder.

| Time | Visual | Audio/VO |
| :--- | :--- | :--- |
| 0:00-0:05 | Hook shot introducing ${cleanTopic} | "This changes everything." |
| 0:05-0:20 | Problem/solution contrast | Explains the pain point for ${audience} |
| 0:20-0:40 | Product/benefit showcase | Key benefits called out |
| 0:40-0:60 | CTA card | "Learn more — link in bio." |
${extraNotes ? `\n Note: ${extraNotes}` : ""}`;
}

exports.generateAgentContent = async (req, res) =>
{
    try
    {
        const { agentType, taskType, topic, tone, targetAudience, extraNotes } = req.body;

        if (!agentType || !taskType)
        {
            return res.status(400).json({ success: false, message: "agentType and taskType are required" });
        }

        if (!topic || !topic.trim())
        {
            return res.status(400).json({ success: false, message: "Topic is required" });
        }

        if (!anthropic)
        {
            const generatedContent = generateFallbackResponse(agentType, taskType, topic, tone, targetAudience, extraNotes);
            return res.status(200).json({
                success: true,
                agent: agentType,
                taskType,
                source: "FALLBACK_TEMPLATE (No ANTHROPIC_API_KEY set on the server)",
                output: generatedContent,
            });
        }

        const systemPrompt = buildSystemPrompt(agentType, taskType, tone, targetAudience, extraNotes);

        try
        {
            const response = await anthropic.messages.create({
                model: CLAUDE_MODEL,
                max_tokens: 2500,
                system: systemPrompt,
                messages: [
                    {
                        role: "user",
                        content: `Create the "${taskType}" deliverable about: ${topic.trim()}`,
                    },
                ],
            });

            const textBlock = response.content.find((block) => block.type === "text");

            return res.status(200).json({
                success: true,
                agent: agentType,
                taskType,
                source: `CLAUDE_LIVE (${CLAUDE_MODEL})`,
                output: textBlock?.text || "Claude returned no text content.",
            });
        } catch (apiError)
        {

            console.error("Anthropic API call failed:", apiError?.message || apiError);

            const generatedContent = generateFallbackResponse(agentType, taskType, topic, tone, targetAudience, extraNotes);

            return res.status(200).json({
                success: true,
                agent: agentType,
                taskType,
                source: `FALLBACK_TEMPLATE (Claude API error: ${apiError?.message || "unknown error"})`,
                output: generatedContent,
            });
        }
    } catch (error)
    {
        console.error("General Error:", error);
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message,
        });
    }
};
