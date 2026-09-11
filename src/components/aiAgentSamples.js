export const SAMPLE_OUTPUTS = {
  content_writing: [
    {
      title: "Sample 1: SEO Blog Post (Tech & AI)",
      taskType: "Generate Blogs",
      topic: "The Future of Autonomous AI Agents in Enterprise Software",
      content: `The Future of Autonomous AI Agents in Enterprise Software

Meta Title: Autonomous AI Agents in 2026: The New Enterprise Standard
Meta Description: Explore how autonomous AI agents powered by Claude and LLMs are revolutionizing enterprise workflows, code generation, and business automation.

1. Introduction: From Chatbots to Autonomous Co-Workers
The enterprise landscape has shifted from passive conversational bots to proactive, autonomous AI agents capable of planning, executing multi-step workflows, and integrating into existing cloud infrastructures.

2. Core Drivers of Agentic Adoption
- Context-Aware Memory: Agents maintain deep knowledge bases across project repositories.
- Tool Use & API Execution: Agents don't just write suggestions—they query databases, run integration tests, and deploy code.
- Human-in-the-Loop Safeguards: Enterprises maintain guardrails and permission checkpoints.

3. Measurable ROI Across Business Units
| Department | Prior Workflow Bottleneck | Agent-Powered Acceleration |
| :--- | :--- | :--- |
| Engineering | Boilerplate & Unit Testing | 45% reduction in cycle time |
| Marketing | Multi-channel Campaign Scaling | 3x content output with unified voice |
| Support | Tier-1 Ticket Resolution | 60% deflection rate with zero escalation |

4. Conclusion & Next Steps
Organizations adopting autonomous agent frameworks today will set the benchmark for operational efficiency over the next decade.`,
    },
    {
      title: "Sample 2: Website Landing Page Copy (SaaS)",
      taskType: "Website Content",
      topic: "PulseMetrics - Real-Time Customer Analytics Platform",
      content: `PulseMetrics Landing Page Copy

 Hero Section
- Badge: ⚡ Built for High-Growth Product Teams
- H1 Headline: Stop Guessing. Understand Every Click, Scroll, and Churn Trigger in Real Time.
- Sub-headline: PulseMetrics transforms fragmented user sessions into instant, actionable retention strategies. Zero query lag. Zero complex SQL.
- Primary CTA: [Start Free 14-Day Trial]
- Secondary CTA: [Watch 2-Min Interactive Demo]

---

 Section 2: The Three Pillars of Intelligent Analytics
1. Behavioral Heatmaps without Speed Penalties
   Track mouse velocity, rage clicks, and dead clicks without degrading your web vitals score.
2. AI-Driven Churn Forecasting
   Our predictive engine flags at-risk accounts 14 days before subscription renewal dates.
3. 1-Click Cohort Segmentation
   Filter users by behavioral triggers and automatically sync lists with your email sequences.

---

 Social Proof Bar
"PulseMetrics helped us identify a critical onboarding drop-off within 48 hours of installation, recovering $180,000 in ARR."
 — Sarah Jenkins, VP of Growth at CloudScale`,
    },
    {
      title: "Sample 3: Comprehensive E-Book Chapter",
      taskType: "E-Book Content",
      topic: "Chapter 3: Architecting Scalable Cloud Systems",
      content: `Chapter 3: Architecting Resilient Microservices in Distributed Environments

 Learning Objectives
- Understanding asynchronous event-driven architectures with Kafka and RabbitMQ.
- Implementing circuit breaker patterns to prevent cascading failures.
- Designing zero-downtime database migrations with blue-green deployments.

 3.1 The Fallacy of Network Reliability
In distributed computing, assuming network stability is the primary cause of downtime. When Service A depends synchronously on Service B, latency cascades exponentially.

\`\`\`
[ Client ] ──> [ API Gateway ] ──> [ Auth Service ] (Latency: 20ms)
                                └──> [ Order Service ] (Timeout: 5000ms ❌)
\`\`\`

 3.2 The Circuit Breaker Pattern
To mitigate failure, wrap fragile RPC calls in a stateful circuit breaker:
1. Closed: Normal traffic flows seamlessly.
2. Open: Once error rates breach 50% over a 10s window, immediately fail-fast without hitting the downstream server.
3. Half-Open: Periodically send canary requests to check downstream recovery.

 Key Chapter Takeaways
- Always prefer asynchronous messaging for non-blocking operations.
- Graceful degradation preserves customer trust during cloud outages.`,
    },
  ],

  copywriting_ads: [
    {
      title: "Sample 1: High-Converting Facebook Ad Campaign",
      taskType: "Facebook Ads",
      topic: "ErgoFlow - Premium Ergonomic Office Chair",
      content: `Facebook Ad Campaign: ErgoFlow Active Chair

Objective: Direct Purchase / E-commerce Conversions
Framework: PAS (Problem - Agitate - Solution)

 Ad Variation 1 (Pain-Point Angle)
- Primary Text:
  8 hours at your desk shouldn't feel like a punishment for your spine. 🛑
  
  Most office chairs look plush for the first week. But by 2:00 PM, your lower back is throbbing, your posture collapses, and your energy flatlines.
  
  Meet ErgoFlow.
  Designed with adaptive lumbar tracking that moves WITH you—giving your lower back dynamic support whether you're typing, leaning back, or on a call.
  
  ✅ 30-Day Risk-Free In-Home Trial
  ✅ 10-Year Manufacturer Warranty
  ✅ Free White-Glove Shipping
  
  Fix your posture before today's workday ends. Click below to save $100 during our Spring Refresh Sale!
- Headline: Say Goodbye to 3 PM Back Pain.
- Link Description: 30-Day Risk-Free Trial | Free Shipping
- CTA Button: [Shop Now]`,
    },
    {
      title: "Sample 2: Multi-Headline Google Search Ads",
      taskType: "Google Ads",
      topic: "B2B Cybersecurity Penetration Testing Services",
      content: `Google Responsive Search Ad (RSA) Copy

Target Keyword Theme: "enterprise penetration testing services", "hire ethical hackers"

 Headlines (Max 30 Characters Each)
1. Enterprise Penetration Testing  (29 chars)
2. Identify Flaws Before Hackers (30 chars)
3. SOC-2 & ISO 27001 Certified   (26 chars)
4. Fast 72-Hour Security Audits  (28 chars)
5. Comprehensive Vulnerability Scan (30 chars)

 Descriptions (Max 90 Characters Each)
1. Protect your cloud infrastructure and customer data with CREST-accredited pen testers. (89 chars)
2. Uncover zero-day vulnerabilities before attackers exploit them. Request an audit quote. (88 chars)
3. Full scope pentest reports delivered with executive summaries and remediation scripts. (88 chars)

 Ad Extensions / Sitelinks
- Sitelink 1: View Sample Security Report -> See our methodology in action.
- Sitelink 2: Compliance Testing (HIPAA, PCI) -> Pass your compliance audits first try.`,
    },
    {
      title: "Sample 3: B2B LinkedIn Thought-Leadership Ad & Email Copy",
      taskType: "LinkedIn Ads & Email Copy",
      topic: "DevOps Automated CI/CD Pipeline Optimizer",
      content: `LinkedIn Thought-Leadership Sponsored Post & Follow-up Email

 Part A: LinkedIn Sponsored Content
Audience: VPs of Engineering, CTOs, Lead DevOps Engineers

Your senior developers aren't burning out because of difficult code.
They're burning out because of 45-minute broken CI/CD builds.

When deployment pipelines stall:
• Pull requests back up like rush-hour traffic.
• Context-switching destroys deep focus.
• Production hotfixes become high-stakes gambles.

We benchmarked 120 engineering teams and discovered that teams utilizing intelligent test-parallelization cut build times by 68%.

Read our open-source benchmark guide to see how your team stacks up. 👇

Headline: The Real Cost of Slow CI/CD Pipelines
CTA: [Download the Benchmark Report]

---

 Part B: Follow-up Nurture Email
Subject: Quick question about your current build times, {{firstName}}
Preview: Cut 40 minutes off your daily deployment pipeline...

Hi {{firstName}},

Saw you checked out our Engineering Velocity report yesterday.

Quick question: what is the single biggest bottleneck in your current release pipeline right now? 
1. Flaky end-to-end Cypress tests
2. Slow Docker image caching
3. Manual staging environment approvals

Hit reply with 1, 2, or 3—I'll send over a custom 5-minute setup video specifically tackling that fix.

Best,  
Alex Rivera  
Lead Solutions Architect`,
    },
  ],

  video_production: [
    {
      title: "Sample 1: 60-Second Commercial Video Script",
      taskType: "Video Scripts",
      topic: "FinWise - Smart Personal Finance & Budgeting App",
      content: `60-Second Commercial Script: "The Payday Mystery"

Target Audience: Millennials & Gen-Z young professionals
Tone: Fast-paced, relatable, punchy

| Timestamp | Visual (Camera / Action) | Audio (Voice-over & SFX) |
| :--- | :--- | :--- |
| 0:00 - 0:05 | HOOK: Close-up of a smartphone screen. Notification: "Salary Credited: $4,200". Protagonist smiles. Fast whip-pan to an empty fridge. | VO: "Payday feels amazing... for about 48 hours." (SFX: Loud whoosh sound) |
| 0:05 - 0:15 | Quick montage: Tap card for coffee, automated rent debit, forgotten subscription renewal popups. | VO: "Then rent hits, subscriptions renew, and you're left asking: where did it all actually go?" |
| 0:15 - 0:30 | Protagonist pulls out phone, opens FinWise. Clean neon UI automatically categorizes expenses with instant visual graphs. | VO: "Meet FinWise. The smart money app that auto-tracks your spending habits before they drain your account." |
| 0:30 - 0:45 | Split screen: FinWise sends proactive alert: "You're 15% under budget this month. $350 transferred to High-Yield Savings." Protagonist breathes relief. | VO: "It doesn't just show where your money went. It grows what's left over." |
| 0:45 - 1:00 | Hero app shot with App Store & Google Play badges. End slate with offer. | VO: "Take control of your paycheck. Download FinWise today and get your first 3 months free." (SFX: Satisfying cash chime) |`,
    },
    {
      title: "Sample 2: Production Storyboard & Camera Shot List",
      taskType: "Storyboards & Shot Lists",
      topic: "AuraSound - Noise-Cancelling Wireless Headphones",
      content: `Production Storyboard & Technical Shot List

Production Title: "Enter The Silence"
Director: Video Production Agent
Camera Package: Sony FX6 / 35mm & 50mm Anamorphic Lenses

 Scene Breakdown & Storyboard
- Scene 1: The Chaos of the City (Exterior Day)
  - Visual: Slow tracking shot behind subject walking through a noisy subway station. Trains screeching, people shouting.
  - Camera: Steadicam, 35mm, f/2.0, low angle.
  - Audio: Overwhelming urban soundscape (horns, echoes, announcements).
  - Lighting: Moody tungsten and fluorescent subway lights.

- Scene 2: The Action Trigger (Macro Close-up)
  - Visual: Extreme close-up of subject's index finger tapping the matte-black ear cup of the AuraSound headphones.
  - Camera: 90mm Macro, 120fps high-speed capture.
  - Audio: Instant, abrupt silence. All ambient audio cuts out into crisp binaural breathing.

- Scene 3: The Sanctuary (Abstract Minimalist)
  - Visual: Background subway station visually dissolves into deep studio blue/violet gradient. Subject closes eyes and walks in smooth slow motion.
  - Audio: Crystal clear acoustic guitar melody swells in warm stereo.
  - On-Screen Text: "Active Noise Cancellation. Zero Distractions."`,
    },
    {
      title: "Sample 3: Viral 30s TikTok / Reels Social Media Video Script",
      taskType: "Social Media Video Content",
      topic: "5 Hidden VS Code Extensions Every Developer Needs in 2026",
      content: `Viral TikTok / Instagram Reels Script

Format: 9:16 Vertical Video  
Target Duration: 32 Seconds  
Audio Track: Trending high-bpm lo-fi electronic beat

 Retention Hook (0:00 - 0:03)
- Visual: Host violently points finger at screen with huge bold text: "STOP CODING WITHOUT THESE." Screen shows a messy 2,000-line code file.
- VO (Fast, energetic): "If your VS Code still looks like this in 2026, you're literally wasting hours every single day."

 Body (0:03 - 0:24)
- Extension 1 (0:03 - 0:10):
  - On-Screen: Screen capture showing auto-documentation generation in 1 click.
  - VO: "Number 1: 'DocuCraft'. Highlight any messy function, press Cmd+Shift+D, and it writes perfect JSDoc comments instantly."
- Extension 2 (0:10 - 0:17):
  - On-Screen: Rainbow color-coded indentation and bracket lines highlighting a missing bracket bug.
  - VO: "Number 2: 'IndentSense 2'. Never get lost in bracket hell again—it highlights nested scopes automatically."
- Extension 3 (0:17 - 0:24):
  - On-Screen: Terminal inside VS Code highlighting git commit history with inline blame avatars.
  - VO: "Number 3: 'GitLens Pro'. See exactly who broke line 42 without leaving your editor."

 Call to Action (0:24 - 0:32)
- Visual: Host smiles, points down to the comment section.
- VO: "Comment the word 'TOOLS' below and I'll DM you the full list of all 5 with direct install links. Follow for more dev tips!"
- On-Screen Text: [COMMENT 'TOOLS' FOR DIRECT LINKS 👇]`,
    },
  ],
};