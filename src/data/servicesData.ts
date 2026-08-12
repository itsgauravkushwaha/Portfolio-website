export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "service-01",
    number: "01",
    name: "Full-Stack Web Development",
    description: "Building scalable, high-performance web applications using modern frameworks like React, Next.js, TypeScript, and Node.js with clean modular architecture."
  },
  {
    id: "service-02",
    number: "02",
    name: "AI & ML Integration",
    description: "Developing custom machine learning pipelines, LLM APIs, multi-platform AI model aggregators, and automated cron data synchronization engines."
  },
  {
    id: "service-03",
    number: "03",
    name: "UI/UX & Interactive Design",
    description: "Crafting intuitive, user-centered interfaces with dynamic animations, glassmorphism aesthetics, responsive layouts, and rich visual storytelling."
  },
  {
    id: "service-04",
    number: "04",
    name: "Cloud Infrastructure & APIs",
    description: "Designing robust backend microservices, serverless database workflows (Supabase, PostgreSQL), REST/GraphQL APIs, and automated deployment pipelines."
  },
  {
    id: "service-05",
    number: "05",
    name: "Data Analysis & Metrics",
    description: "Extracting actionable insights from complex datasets, training predictive models, and building real-time interactive analytics dashboards."
  }
];
