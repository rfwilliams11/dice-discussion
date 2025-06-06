interface TopicsData {
  general: string[]
  aiFocused: string[]
  roseThorn: string[]
}

export const TOPICS_DATA: TopicsData = {
  general: [
    '"The Road Not Taken": Share a technology decision you initially rejected but later wished you had adopted, or vice versa. What lessons did you learn?',
    '"Web Performance Confessions": Discuss the most creative (or desperate) optimization techniques you\'ve implemented to meet performance requirements.',
    '"Tech Stack Time Machine": If you could go back 5 years and rebuild one of your current projects with today\'s knowledge, what would you do differently?',
    '"Documentation Heroes": Share examples of exceptional documentation you\'ve encountered and what made it stand out (could be for APIs, libraries, or internal systems).',
    '"Technical Debt Amnesty": Create a judgment-free zone where team members can share technical compromises they\'ve made and brainstorm potential solutions.',
    '"The Impossible Client Request": Share seemingly impossible client requirements you\'ve received and how you managed to solve them (or gracefully explain why they couldn\'t be done).',
    '"Tomorrow\'s Web Today": What emerging web technologies are you most excited about integrating into your workflow, and why?',
    '"Auth Nightmares": Authentication and authorization horror stories—and how you eventually untangled the mess. Bonus: share your go-to stack or providers.',
    '"The One That Got Away": Share a library, framework, or tool you were excited to use but had to abandon. What happened? Would you try it again?',
    '"Build Once, Break Everywhere": How do you handle cross-browser/device quirks in 2025? Share tools, strategies, and war stories from the land of compatibility chaos.'
  ],
  aiFocused: [
    '"AI Pair Programming Experiences": Share stories of working with AI coding assistants like GitHub Copilot or Claude Code—what\'s been surprisingly helpful and what\'s been frustrating?',
    '"Prompt Engineering Show & Tell": Have members bring their best prompts for generating code, tests, or documentation and discuss techniques for getting optimal results.',
    '"The Human Touch": Discuss which aspects of web development still require human expertise despite advances in AI, and which ones are being transformed.',
    '"AI-Generated Design Systems": Explore how generative AI is changing the way design systems are created and maintained—benefits, challenges, and best practices.',
    '"Client Education": How do you explain AI capabilities and limitations to those who\'ve seen the hype but don\'t understand the reality of what\'s possible?',
    '"Responsible AI Integration": Discuss "gotchas" and other considerations when implementing AI features in client projects—privacy, bias, transparency, and user trust.',
    '"AI Workflow Revolution": Share how generative AI has changed your development workflow and processes—what\'s better, what\'s worse, and what\'s just different?',
    '"Future-Proofing Web Careers": Discuss how web developers and designers can stay relevant and valuable in an increasingly AI-assisted industry.',
    '"AI in the Wild: Client Expectations vs. Reality": Share experiences where clients wanted to integrate AI into their products or workflows. What were their goals, and how realistic were they?',
    '"Productivity Wins: Real Gains from AI in the Dev Workflow": What concrete productivity improvements have you seen from using AI tools in your day-to-day development?'
  ],
  roseThorn: [
    '"The Infinite Feedback Loop": Describe a project where constant client feedback (or indecision) caused major scope creep, burnout, or circular design hell.',
    '"UI/UX Mess": Share the most nightmarish user interfaces you\'ve encountered or inherited. What made them difficult? How did you fix?',
    '"Deploy and Destroy": Tell the story of a deployment that went live and took something very important down with it—bonus points if it happened on a Friday.',
    '"Shadow Tech and Frankenstacks": Reveal the most horrifying tech stack or undocumented system you inherited from a previous team. How did you make sense of it',
    '"When Everything Worked Locally…": Share a time when your app worked perfectly in dev or staging, only to fall apart in prod. What was the hidden gotcha?',
    '"The MVP Glow-Up": Tell the story of a client MVP that launched with modest expectations but grew into something far more impactful than anyone expected.',
    '"Code That Lived": What\'s the most robust or reusable code you\'ve ever written for a client? Share the proudest moment where it just worked™ across projects or years.',
    '"The Unexpected Performance Boost": Describe a time when a small refactor or optimization resulted in a massive speed gain or cost savings.',
    '"Client Collaboration Magic": What\'s the best collaboration experience you\'ve had with a client? What made it unusually smooth, productive, or fun?',
    '"Automation All-Star": What\'s an automation (CI/CD pipeline, testing, deployment, codegen, etc.) you introduced that saved your team hours or reduced errors?'
  ]
}