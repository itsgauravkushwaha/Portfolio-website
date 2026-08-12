export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  name: string;
  techStack: string;
  liveUrl: string;
  descriptionBullets?: string[];
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "project-01",
    number: "01",
    category: "AI Platform",
    name: "ModelVault – AI Model Discovery Platform",
    techStack: "Next.js 16, React, TypeScript, Tailwind CSS, Supabase, Zustand, Zod, Vercel",
    liveUrl: "https://www.modelvault.space/",
    descriptionBullets: [
      "Multi-platform AI model aggregator fetching OpenRouter, Replicate, CivitAI, and Hugging Face Hub models.",
      "Automated daily synchronization via Vercel Cron with intelligent deduplication and dynamic pricing tracker.",
      "Custom SVG badge generator API (/api/badge) and live LLM model comparison system."
    ],
    col1Image1: "/assets/modelvault/modelvault_hero.jpg",
    col1Image2: "/assets/modelvault/modelvault_calc.jpg",
    col2Image: "/assets/modelvault/modelvault_wizard.jpg"
  },
  {
    id: "project-02",
    number: "02",
    category: "Industrial Web",
    name: "Gagan Engineering Works",
    techStack: "React.js, JavaScript, Python, Django, PostgreSQL, Resend API",
    liveUrl: "https://gagan-engineering-website.vercel.app/",
    descriptionBullets: [
      "Full-stack industrial web application designed for engineering machinery and client RFQ inquiries.",
      "Integrated Django backend API connected with PostgreSQL database and Resend API transactional emails.",
      "High-performance client UI built with React.js featuring interactive product catalogs."
    ],
    col1Image1: "/assets/gagan/gagan_hero.jpg",
    col1Image2: "/assets/gagan/gagan_products.jpg",
    col2Image: "/assets/gagan/gagan_about.jpg"
  },
  {
    id: "project-03",
    number: "03",
    category: "Data Analytics",
    name: "Insight IQ – Analytics & Dashboard",
    techStack: "React.js, Python, Django, PostgreSQL",
    liveUrl: "https://insight-iq-one.vercel.app/",
    descriptionBullets: [
      "Built a full-stack analytics application for processing datasets and visualizing business insights.",
      "Developed backend modules using Django and Python for efficient data processing.",
      "Designed responsive dashboards with React.js for interactive data visualization with dynamic filtering.",
      "Built scalable frontend and backend architecture for maintainability."
    ],
    col1Image1: "/assets/insightiq/insightiq_hero.jpg",
    col1Image2: "/assets/insightiq/insightiq_features.jpg",
    col2Image: "/assets/insightiq/insightiq_dash.jpg"
  },
  {
    id: "project-04",
    number: "04",
    category: "Edge Utility",
    name: "FilePress – PDF Conversion Platform",
    techStack: "JavaScript, HTML5, CSS3, Cloudflare Workers",
    liveUrl: "https://filepress-pdf.filepress-pdf.workers.dev/",
    descriptionBullets: [
      "Developed an online document conversion platform supporting multiple PDF conversion tools.",
      "Implemented features including PDF to Word, PDF to JPG, HTML to PDF, and document conversion utilities.",
      "Designed responsive interfaces with optimized performance for file uploads and downloads on Cloudflare Workers edge."
    ],
    col1Image1: "/assets/filepress/filepress_hero.jpg",
    col1Image2: "/assets/filepress/filepress_tool.jpg",
    col2Image: "/assets/filepress/filepress_catalog.jpg"
  }
];
