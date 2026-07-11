type LinkItem = {
  label: string
  href: string
  value: string
  external?: boolean
}

type MetricItem = {
  label: string
  value: string
}

type StrengthItem = {
  index: string
  title: string
  description: string
}

type DeliveryMode = {
  title: string
  description: string
}

type ProjectItem = {
  title: string
  domain: string
  description: string
  tags: string[]
}

export const portfolioData: {
  summary: string
  metrics: MetricItem[]
  links: LinkItem[]
  strengths: StrengthItem[]
  projects: ProjectItem[]
  deliveryModes: DeliveryMode[]
  focusAreas: string[]
} = {
  summary:
    'Samuel Alli is a full-stack senior software engineer and engineering manager with 5+ years designing and scaling enterprise applications using React, Angular, Node.js, NestJS, and Azure. Currently leading a team of 4 engineers at Seamfix after four years as a senior engineer at Wema Bank, where he shipped enterprise platforms used by thousands of internal staff, lifted team productivity by 80%, and cut file-processing turnaround time by 100%.',
  metrics: [
    { label: 'Years of engineering experience', value: '5+' },
    { label: 'Team productivity increase', value: '80%' },
    { label: 'File turnaround improvement', value: '100%' },
  ],
  links: [
    {
      label: 'Email',
      href: 'mailto:samueltemiloluwaalli@gmail.com',
      value: 'samueltemiloluwaalli@gmail.com',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alli-samuel-9355a0188',
      value: 'linkedin.com/in/alli-samuel-9355a0188',
      external: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/devallisamuel',
      value: 'github.com/devallisamuel',
      external: true,
    },
    {
      label: 'Resume',
      href: '/samuel-alli-resume.pdf',
      value: 'Download PDF',
      external: true,
    },
  ],
  strengths: [
    {
      index: '01',
      title: 'Full-stack systems delivery',
      description:
        'React, Angular, Node.js, NestJS, and Azure used together to ship enterprise-scale applications end to end, from data layer to polished UI.',
    },
    {
      index: '02',
      title: 'Engineering leadership',
      description:
        'Directs a 4-engineer team at Seamfix, running structured 1:1s and development plans that lifted team productivity by 80%.',
    },
    {
      index: '03',
      title: 'Test-driven & observable',
      description:
        'Raised Jest coverage from 50% to 80% across NestJS microservices in an Nx monorepo CI pipeline, with Grafana and Prometheus for runtime visibility.',
    },
    {
      index: '04',
      title: 'Product-minded execution',
      description:
        'Delivery choices are framed around user outcomes, engineering tradeoffs, and what actually moves a roadmap forward.',
    },
  ],
  projects: [
    {
      title: 'Tracka',
      domain: 'Consent-based bank statement API',
      description:
        'A NestJS API for consent-based bank statement retrieval with idempotent request creation, asynchronous processing, normalized statement results, prepaid wallet billing, signed webhooks, PostgreSQL persistence, and optional Redis caching.',
      tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    },
    {
      title: 'Tracka Consent',
      domain: 'Hosted customer consent UI',
      description:
        'A Stencil web-components app that supports the Tracka workflow, handling customer approval and rejection flows in a standalone hosted frontend surface.',
      tags: ['Stencil', 'Web Components', 'TypeScript', 'Jest'],
    },
    {
      title: 'NIP In-Branch',
      domain: 'Wema Bank interbank transfer portal',
      description:
        'A React and Material UI portal used by Wema Bank branch staff to process NIBSS Instant Payment (NIP) transfers, with Chart.js reporting and Framer Motion interaction polish.',
      tags: ['React', 'MUI', 'Chart.js', 'Framer Motion', 'TypeScript'],
    },
    {
      title: 'E-Cashier',
      domain: 'Wema Bank branch cash operations',
      description:
        'An internal React and Material UI application supporting teller cash handling and double-transaction workflows for Wema Bank branch operations, built with Formik-driven forms and an Axios service layer.',
      tags: ['React', 'MUI', 'Formik', 'Axios', 'TypeScript'],
    },
    {
      title: 'Fund A Cause',
      domain: 'Crowdfunding platform + admin console',
      description:
        'A public Angular fundraising platform paired with an Angular Material admin console for campaign management, covering donation flows, reporting charts, and PWA delivery.',
      tags: ['Angular', 'Angular Material', 'Chart.js', 'PWA'],
    },
    {
      title: 'Estate Digitization',
      domain: 'Property registration mobile app',
      description:
        'A cross-platform React Native (Expo) app for digitizing estate and property registration, with camera-based document capture, biometric authentication, and Redux-driven workflows.',
      tags: ['React Native', 'Expo', 'Redux', 'Biometric Auth'],
    },
  ],
  deliveryModes: [
    {
      title: 'Build from ambiguity',
      description:
        'Take rough requirements, shape them into technical plans, and translate them into production-grade interfaces and services.',
    },
    {
      title: 'Raise code quality',
      description:
        'Refactor toward cleaner boundaries, stronger typing, and simpler component responsibilities without stalling delivery.',
    },
    {
      title: 'Lead and mentor',
      description:
        'Run 1:1s and development plans for junior engineers, resolve architectural bottlenecks, and keep delivery aligned with product goals.',
    },
  ],
  focusAreas: [
    'Engineering Management & Team Leadership',
    'Senior Full-stack Engineering (React, Angular, Node.js)',
    'Cloud & Microservices Architecture (Azure, NestJS, RabbitMQ)',
    'AI-enhanced product experiences',
  ],
}

export const portfolioAssistantContext = `
You are a concise portfolio assistant for Samuel Alli.
Only make claims grounded in this context.

Verified contact details:
- Name: Samuel Alli
- Email: samueltemiloluwaalli@gmail.com
- LinkedIn: https://www.linkedin.com/in/alli-samuel-9355a0188
- GitHub: https://github.com/devallisamuel

Employment history (from resume):
- Seamfix, Engineering Manager (Jan 2026-Present): leads a 4-engineer team, owns delivery of mission-critical services, mentors junior developers, lifted team productivity 80%.
- Seamfix, Senior Software Engineer (Jul 2025-Dec 2025): raised Jest coverage from 50% to 80% across NestJS microservices in an Nx monorepo; extended a NIN validation service (NestJS, MongoDB, PostgreSQL, Angular/NgRx frontend); built a Corporate Private Mobile Lines Registration workflow using microservices, RabbitMQ, and Redis.
- Wema Bank, Senior Software Engineer (Jun 2021-Jul 2025): led enterprise apps including an employee engagement platform (Mood, Requests, Polls, Surveys modules) and a Digital File Archival System, using React, Angular, TypeScript, Redux, NgRx, React Query, SWR, Active Directory auth. Improved employee productivity 80% and file-processing turnaround time 100%.
- Softbrain LLC, Frontend Software Engineer (Jan 2020-Jun 2021): built responsive React/Angular interfaces from Figma designs, integrated with REST APIs.

Education & certification:
- BEng, Agricultural and Biosystems Engineering, University of Ilorin (2019)
- Azure Fundamentals (AZ-900), Microsoft, 2025

Selected projects (verified from local repositories):
- Tracka: consent-based bank statement retrieval API built with NestJS, PostgreSQL, Redis, Docker, signed webhooks, wallet billing, and async processing. The flagship personal showcase project.
- Tracka Consent: hosted customer consent UI built with Stencil web components, companion to Tracka.
- NIP In-Branch: Wema Bank React + Material UI portal for processing NIBSS Instant Payment transfers, with Chart.js and Framer Motion.
- E-Cashier: Wema Bank React + Material UI app for branch teller cash operations, built with Formik and Axios.
- Fund A Cause: Angular crowdfunding platform plus an Angular Material admin console for campaign management.
- Estate Digitization: React Native (Expo) mobile app for digitizing estate/property registration, with camera capture and biometric auth.

Core technical skills:
- Frontend: React, Angular, TypeScript, React Native, Redux, NgRx, Material UI, GraphQL
- Backend: Node.js, NestJS, Express.js, RabbitMQ, C#, ASP.NET
- Data: PostgreSQL, MongoDB, Redis, MySQL
- Cloud & DevOps: Azure, Docker
- Observability: Grafana, Prometheus

Positioning:
- Engineering manager and senior full-stack software engineer, 5+ years experience
- Strengths: hands-on full-stack delivery, engineering leadership and mentorship, test-driven development, maintainable architecture
- Role interest: senior engineering, engineering management, or platform-leaning roles

Communication style:
- Be direct, concise, and recruiter-friendly.
- If asked for specifics not covered above, say they are not available in the current portfolio context.
- Invite the visitor to review the resume PDF or email Samuel for deeper detail when necessary.
`.trim()
