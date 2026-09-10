import React, { useState } from "react";
import "./AiAgents.css";
import { SAMPLE_OUTPUTS } from "./aiAgentSamples";

const AGENTS = [
    {
        id: "content_writing",
        name: "Content Writing Agent",
        icon: "✍️",
        badge: "Long-Form & SEO",
        description: "Generates high-ranking blogs, landing page copy, e-book chapters, and SEO articles.",
        tasks: [
            { id: "Generate Blogs", label: "Generate Blogs" },
            { id: "Website Content", label: "Website Content" },
            { id: "E-Book Content", label: "E-Book Content" },
            { id: "SEO-friendly articles", label: "SEO-friendly articles" },
        ],
        workflow: [
            "1. Search Intent & Audience Analysis",
            "2. Outline & Semantic Hierarchy (H1-H3)",
            "3. Long-Form Drafting with Keyword Integration",
            "4. Readability & Actionable Takeaways Review",
        ],
    },
    {
        id: "copywriting_ads",
        name: "Copywriting & Ads Agent",
        icon: "📢",
        badge: "Direct Response",
        description: "Creates high-converting paid ads, product descriptions, email sequences, and CTAs.",
        tasks: [
            { id: "Facebook Ads", label: "Facebook Ads" },
            { id: "Google Ads", label: "Google Ads" },
            { id: "LinkedIn Ads", label: "LinkedIn Ads" },
            { id: "Product Descriptions", label: "Product Descriptions" },
            { id: "Email Copy", label: "Email Copy" },
            { id: "CTA Variations", label: "CTA Variations" },
        ],
        workflow: [
            "1. Customer Pain Point & USP Extraction",
            "2. Direct-Response Formula (AIDA, PAS, BAB)",
            "3. Hook & Headline Generation with Character Limits",
            "4. Strong Call-To-Action (CTA) Placement",
        ],
    },
    {
        id: "video_production",
        name: "Video Production Agent",
        icon: "🎬",
        badge: "Scripts & Production",
        description: "Produces full A/V scripts, scene storyboards, camera shot lists, and viral social scripts.",
        tasks: [
            { id: "Video Scripts", label: "Video Scripts" },
            { id: "Storyboards", label: "Storyboards" },
            { id: "Shot Lists", label: "Shot Lists" },
            { id: "Voice-over Scripts", label: "Voice-over Scripts" },
            { id: "Social Media Video Content", label: "Social Media Video Content" },
        ],
        workflow: [
            "1. 3-Second Retention Hook Formulation",
            "2. Dual-Track Audio & Visual Synchronization",
            "3. Storyboard & Camera Angle Specification",
            "4. Production Notes & Sound Design Direction",
        ],
    },
];

export default function AiAgents()
{
    const [activeAgentId, setActiveAgentId] = useState("content_writing");
    const activeAgent = AGENTS.find((a) => a.id === activeAgentId);

    // Form State
    const [taskType, setTaskType] = useState(activeAgent.tasks[0].id);
    const [topic, setTopic] = useState("");
    const [tone, setTone] = useState("Professional & Engaging");
    const [targetAudience, setTargetAudience] = useState("");
    const [extraNotes, setExtraNotes] = useState("");

    // Execution & Output State
    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState("");
    const [outputMeta, setOutputMeta] = useState(null);
    const [copied, setCopied] = useState(false);

    // Switch agent tab and reset task
    const handleAgentChange = (id) =>
    {
        setActiveAgentId(id);
        const newAgent = AGENTS.find((a) => a.id === id);
        setTaskType(newAgent.tasks[0].id);
        setOutput("");
        setOutputMeta(null);
    };

    // Generate via Backend (Claude API)
    const handleGenerate = async (e) =>
    {
        e.preventDefault();
        if (!topic.trim())
        {
            alert("Please provide a topic or prompt for the agent.");
            return;
        }

        setLoading(true);
        setOutput("");
        setOutputMeta(null);

        try
        {
            const response = await fetch(`${process.env.REACT_APP_APIURL}/api/ai-agent/generate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    agentType: activeAgentId,
                    taskType,
                    topic,
                    tone,
                    targetAudience,
                    extraNotes,
                }),
            });

            const data = await response.json();
            if (data.success)
            {
                setOutput(data.output);
                setOutputMeta({
                    source: data.source,
                    agent: data.agent,
                    taskType: data.taskType,
                });
            } else
            {
                setOutput(`⚠️ Error: ${data.message} ${data.error ? `\n\nDetails: ${data.error}` : ""}`);
            }

        } catch (err)
        {
            setOutput(
                `⚠️ Connection error: Could not reach backend server at ${process.env.REACT_APP_APIURL}.\nEnsure your Express backend is running!\n\nAlternatively, you can click on the "Load Sample Output" buttons below to review the required outputs.`
            );
        } finally
        {
            setLoading(false);
        }
    };

    // Load one of the 3 pre-configured sample outputs per agent
    const handleLoadSample = (sample) =>
    {
        setOutput(sample.content);
        setTopic(sample.topic);
        setTaskType(sample.taskType);
        setOutputMeta({
            source: "PRECOMPUTED_CLAUDE_SAMPLE (Assignment Deliverable)",
            agent: activeAgent.name,
            taskType: sample.taskType,
        });
    };

    const handleCopy = () =>
    {
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="ai-agent-container">
            {/* Header */}
            <header className="ai-agent-header">
                <div className="badge-pill">Powered by Claude LLM</div>
                <h1>Multi-Agent AI Studio</h1>
                <p>
                    Specialized, workflow-driven AI agents for Content Writing, Direct-Response Copywriting,
                    and Video Production.
                </p>
            </header>

            {/* Agent Selection Tabs */}
            <div className="agent-tabs">
                {AGENTS.map((agent) => (
                    <button
                        key={agent.id}
                        className={`agent-tab-btn ${agent.id === activeAgentId ? "active" : ""}`}
                        onClick={() => handleAgentChange(agent.id)}
                    >
                        <span className="tab-icon">{agent.icon}</span>
                        <div className="tab-text">
                            <span className="tab-title">{agent.name}</span>
                            <span className="tab-badge">{agent.badge}</span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Main Grid */}
            <div className="agent-workspace-grid">
                {/* Left Column: Form & Agent Workflow Info */}
                <div className="agent-panel form-panel">
                    <div className="panel-header">
                        <h3>Configure {activeAgent.name}</h3>
                        <p>{activeAgent.description}</p>
                    </div>

                    {/* Workflow Stepper Box */}
                    <div className="workflow-card">
                        <h4>⚙️ Agent Workflow Architecture</h4>
                        <ul>
                            {activeAgent.workflow.map((step, idx) => (
                                <li key={idx}>{step}</li>
                            ))}
                        </ul>
                    </div>

                    <form onSubmit={handleGenerate} className="agent-form">
                        <div className="form-group">
                            <label>Select Deliverable Type:</label>
                            <select value={taskType} onChange={(e) => setTaskType(e.target.value)}>
                                {activeAgent.tasks.map((task) => (
                                    <option key={task.id} value={task.id}>
                                        {task.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Topic / Product / Subject *:</label>
                            <textarea
                                rows="3"
                                placeholder="e.g. Next-Gen Autonomous AI Agents for Enterprise Workflow Optimization..."
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Tone of Voice:</label>
                                <select value={tone} onChange={(e) => setTone(e.target.value)}>
                                    <option value="Professional & Authoritative">Professional & Authoritative</option>
                                    <option value="Conversational & Engaging">Conversational & Engaging</option>
                                    <option value="Bold & High-Energy">Bold & High-Energy (Direct Response)</option>
                                    <option value="Technical & In-Depth">Technical & In-Depth</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Target Audience:</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Software Engineers, B2B Buyers"
                                    value={targetAudience}
                                    onChange={(e) => setTargetAudience(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Additional Instructions (Optional):</label>
                            <input
                                type="text"
                                placeholder="e.g. Include 3-second hook, comparison table, or strong CTA"
                                value={extraNotes}
                                onChange={(e) => setExtraNotes(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="generate-btn" disabled={loading}>
                            {loading ? (
                                <span className="spinner-text">🤖 Claude is executing workflow...</span>
                            ) : (
                                `⚡ Execute ${activeAgent.name}`
                            )}
                        </button>
                    </form>

                    {/* Quick-Load Assignment Samples */}
                    <div className="samples-box">
                        <h4>📁 Assignment Deliverables (3 Samples per Agent):</h4>
                        <div className="sample-buttons">
                            {SAMPLE_OUTPUTS[activeAgentId]?.map((sample, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    className="sample-btn"
                                    onClick={() => handleLoadSample(sample)}
                                >
                                    📄 {sample.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Output Viewer */}
                <div className="agent-panel output-panel">
                    <div className="output-header">
                        <div>
                            <h3>Agent Output</h3>
                            {outputMeta && (
                                <span className="output-source-tag">
                                    {outputMeta.agent} • {outputMeta.taskType}
                                </span>
                            )}
                        </div>
                        {output && (
                            <button className="copy-btn" onClick={handleCopy}>
                                {copied ? "✅ Copied!" : "📋 Copy Output"}
                            </button>
                        )}
                    </div>

                    <div className="output-content-area">
                        {loading ? (
                            <div className="loading-state">
                                <div className="loader-pulse"></div>
                                <h4>Synthesizing Output with Claude...</h4>
                                <p>Applying agent persona, structuring outline, and refining copy.</p>
                            </div>
                        ) : output ? (
                            <pre className="output-text">{output}</pre>
                        ) : (
                            <div className="empty-state">
                                <div className="empty-icon">{activeAgent.icon}</div>
                                <h4>Ready to Generate</h4>
                                <p>
                                    Fill in your topic on the left and click <strong>Execute</strong>, or click any
                                    of the <strong>Assignment Deliverables</strong> buttons to inspect the 3 sample
                                    outputs.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}