export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const coreFeatures = [
  {
    title: 'Autonomous Dispatch Control',
    text: 'DropX Agent auto-assigns pickups and drop-offs based on traffic, rider availability, and urgency across Nigerian city routes.',
  },
  {
    title: 'Payment + Delivery Coordination',
    text: 'Reduce payment friction with synchronized delivery status, customer reminders, and reconciliation prompts for pay-on-delivery workflows.',
  },
  {
    title: 'Operator Dashboard + Alerts',
    text: 'Operations teams get real-time visibility, ETA confidence, and escalation alerts when dispatch delays or route failures happen.',
  },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Capture requests',
    text: 'Orders from WhatsApp, web forms, and internal teams are normalized into one operations queue.',
    icon: '/images/step-connect.svg',
  },
  {
    step: '02',
    title: 'Plan + assign routes',
    text: 'The agent prioritizes jobs, recommends routes, and assigns riders with traffic-aware ETA logic.',
    icon: '/images/step-plan.svg',
  },
  {
    step: '03',
    title: 'Deliver + reconcile',
    text: 'Customers receive updates while operators track completion, exceptions, and payment outcomes in one place.',
    icon: '/images/step-deliver.svg',
  },
];

export const trustSignals = [
  {
    title: 'Coverage Cities',
    text: 'Designed for Lagos first, with rollout-ready workflows for Abuja, Port Harcourt, and Ibadan.',
  },
  {
    title: 'Operational SLA',
    text: 'Target: dispatch action in under 5 minutes for eligible queued requests during operating hours.',
  },
  {
    title: 'Support Channels',
    text: 'WhatsApp, email, and direct operator escalation line for high-priority delivery incidents.',
  },
  {
    title: 'Data & Privacy Note',
    text: 'Role-based access and audit-friendly activity logs. Customer data is handled under least-privilege workflows.',
  },
];

export const products = [
  {
    name: 'DropX Commerce Agent',
    problem: 'Order processing is scattered across chats, causing dispatch delays and customer confusion.',
    audience: 'Instagram/WhatsApp sellers and e-commerce teams.',
    outcome: 'Cuts order-to-dispatch lag and improves first-attempt delivery communication.',
    cta: 'Launch Commerce Pilot',
  },
  {
    name: 'DropX Field Ops Agent',
    problem: 'Rider assignment and route changes are handled manually during peak periods.',
    audience: 'Logistics businesses and service fleet operators.',
    outcome: 'Improves rider utilization and reduces failed route handoffs.',
    cta: 'Optimize Fleet Flow',
  },
  {
    name: 'DropX Collections Agent',
    problem: 'Payment follow-up is inconsistent, especially in pay-on-delivery workflows.',
    audience: 'SMEs dealing with delayed settlement and reconciliation stress.',
    outcome: 'Reduces payment friction with structured reminders and faster reconciliation cycles.',
    cta: 'Activate Collections Flow',
  },
  {
    name: 'DropX Support Agent',
    problem: 'Support teams spend too much time answering repetitive “where is my order” questions.',
    audience: 'Customer support teams for delivery-first businesses.',
    outcome: 'Faster response time with clearer exception handling and human handoff controls.',
    cta: 'Scale Support Ops',
  },
  {
    name: 'DropX Compliance Harness',
    problem: 'As operations scale, process consistency and auditability become harder to maintain.',
    audience: 'Growing businesses with policy or compliance-sensitive workflows.',
    outcome: 'Adds policy guardrails, approval checkpoints, and audit-ready logs.',
    cta: 'Add Compliance Guardrails',
  },
];

export const pricingTeaser = [
  'Starter: for founders and lean teams launching delivery operations',
  'Growth: for scaling businesses managing high-volume dispatch',
  'Enterprise: for complex workflows, API integration, and custom controls',
];

export const contactChannels = {
  whatsappUrl: 'https://wa.me/2348000000000?text=Hi%20DropX%20Agent%2C%20I%20want%20to%20book%20a%20pilot.',
  whatsappLabel: '+234 800 000 0000',
  email: 'hello@dropxagent.com',
};

export const imageAttributions = [
  {
    title: 'Concept inspiration: Lagos traffic context',
    source: 'Unsplash',
    by: 'Nupo Deyon Daniel',
    url: 'https://unsplash.com/photos/a-bunch-of-cars-driving-down-a-street-next-to-tall-buildings-23q8J9zM5vA',
  },
  {
    title: 'Concept inspiration: Business logistics planning',
    source: 'Pexels',
    by: 'fauxels',
    url: 'https://www.pexels.com/photo/people-discussing-in-front-of-laptop-3183197/',
  },
  {
    title: 'Concept inspiration: Delivery street context',
    source: 'Pexels',
    by: 'Dami Akinbode',
    url: 'https://www.pexels.com/photo/vehicles-on-road-in-city-18020531/',
  },
];
