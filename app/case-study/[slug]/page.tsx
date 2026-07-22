import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../components";

const cases = {
  "goto-foods": {
    title: "GoTo Foods",
    sector: "Food commerce · Multi-brand digital ecosystem",
    image: "/images/gotofoods-homepage.jpg",
    role: "Senior UI/UX Designer · Creative QA",
    duration: "Professional project",
    tools: "Figma · Jira · Responsive QA",
    liveUrl: "https://www.gotofoods.com/",
    challenge: "Seven distinctive food brands needed digital experiences that felt true to each brand while sharing reliable patterns, accessible behavior and consistent quality across web and mobile.",
    outcome: "A more coherent multi-brand experience supported by reusable design decisions, close developer collaboration and detailed visual validation across responsive screens.",
  },
  "easy-cart": {
    title: "Easy Cart",
    sector: "E-commerce mobile application",
    image: "/images/easy-cart.jpg",
    role: "Lead UI/UX Designer",
    duration: "Concept case study",
    tools: "Figma · Photoshop · Illustrator",
    liveUrl: null,
    challenge: "Online shopping often becomes overwhelming: too many choices, inconsistent product information and avoidable friction between discovery and payment.",
    outcome: "A focused mobile commerce concept with clearer navigation, concise product comparison, a streamlined checkout and a reusable visual system.",
  },
  viome: {
    title: "Viome",
    sector: "Health technology · Precision nutrition",
    image: "/images/viome-homepage.jpg",
    role: "Senior UI/UX Designer",
    duration: "Professional project",
    tools: "Figma · Prototyping · Design systems",
    liveUrl: "https://www.viome.com/",
    challenge: "Advanced microbiome science, health scores and personalized recommendations needed to feel understandable, credible and actionable across a consumer-facing experience.",
    outcome: "A clearer health journey that balances scientific depth with approachable content, strong hierarchy and responsive components across key touchpoints.",
  },
  gap: {
    title: "Gap",
    sector: "Retail commerce · Responsive storefront",
    image: "/images/gap-homepage.jpg",
    role: "Senior UI/UX Designer",
    duration: "Professional project",
    tools: "Figma · Jira · Developer collaboration",
    liveUrl: "https://www.gap.com/",
    challenge: "A large fashion catalog, frequent campaigns and multiple audiences create a demanding commerce experience where discovery, navigation and responsive consistency must work at scale.",
    outcome: "A polished retail experience supported by clear visual hierarchy, consistent interaction patterns and careful design-to-build collaboration across screen sizes.",
  },
  fieldy: {
    title: "Fieldy",
    sector: "SaaS · Field service management",
    image: "/images/fieldy-homepage.jpg",
    role: "Senior UI/UX Designer",
    duration: "Professional project",
    tools: "Figma · Prototyping · Responsive design",
    liveUrl: "https://getfieldy.com/",
    challenge: "Field teams, managers and service businesses need real-time visibility across scheduling, jobs, renewals, payments and customer communication without switching between disconnected tools.",
    outcome: "A connected field-service experience that makes operational status easier to scan, supports mobile work and turns complex workflows into clear actions for distributed teams.",
  },
  "state-street": {
    title: "State Street",
    sector: "Financial services · Institutional platform",
    image: "/images/state-street-homepage.jpg",
    role: "Senior UI/UX Designer",
    duration: "Professional project",
    tools: "Figma · Jira · Accessibility QA",
    liveUrl: "https://www.statestreet.com/us/en",
    challenge: "Institutional audiences must navigate dense market research, investment capabilities and global services while maintaining clarity, trust and accessibility across a content-rich platform.",
    outcome: "A more structured enterprise experience with stronger content hierarchy, consistent responsive patterns and clearer pathways into insights, solutions and company information.",
  },
  loreal: {
    title: "L’Oréal",
    sector: "Beauty · Global brand ecosystem",
    image: "/images/loreal-homepage.jpg",
    role: "Senior UI/UX Designer",
    duration: "Professional project",
    tools: "Figma · Design systems · Creative QA",
    liveUrl: "https://www.loreal.com/en/",
    challenge: "A global beauty group needs to connect dozens of brands, divisions, research stories and sustainability commitments within an expressive experience that remains usable across languages and devices.",
    outcome: "A visually engaging corporate journey supported by scalable navigation, strong editorial hierarchy and consistent interaction patterns across a broad global content ecosystem.",
  },
  "puthiya-thalaimurai": {
    title: "Puthiya Thalaimurai",
    sector: "Digital media · Tamil news platform",
    image: "/images/puthiya-thalaimurai-homepage.jpg",
    role: "Senior UI/UX Designer",
    duration: "Professional project",
    tools: "Figma · Responsive design · Creative QA",
    liveUrl: "https://www.puthiyathalaimurai.com/",
    challenge: "A high-velocity Tamil news platform must help readers move quickly between breaking updates, regional reporting, politics, entertainment, sports and live coverage without losing clarity on content-dense screens.",
    outcome: "A scannable multilingual news experience with stronger editorial hierarchy, responsive story patterns and clearer routes into timely and topic-based coverage.",
  },
  cenlar: {
    title: "Cenlar",
    sector: "Fintech · Mortgage servicing portal",
    image: "/images/cenlar-login.jpg",
    role: "Senior UI/UX Designer",
    duration: "Professional project",
    tools: "Figma · Accessibility · Developer collaboration",
    liveUrl: "https://www2.loanadministration.com/cenlarfsb/#/login",
    challenge: "Mortgage customers need a secure, reassuring path to account access and recurring servicing tasks, with registration, recovery and support options remaining clear across devices.",
    outcome: "A focused borrower entry experience that emphasizes trust, clear authentication choices and accessible pathways to registration, credential recovery and assistance.",
  },
} as const;

type Slug = keyof typeof cases;

export function generateStaticParams() {
  return Object.keys(cases).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = cases[slug as Slug];
  return project ? { title: `${project.title} Case Study`, description: project.outcome } : {};
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = cases[slug as Slug];
  if (!project) notFound();

  return (
    <main className="case-page">
      <Header />
      <section className="case-hero">
        <Link href="/#work" className="back-link">← Back to selected work</Link>
        <p className="eyebrow">CASE STUDY · {project.sector}</p>
        <h1>{project.title}</h1>
        <div className="case-summary">
          <p>{project.outcome}</p>
          <dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Duration</dt><dd>{project.duration}</dd></div><div><dt>Tools</dt><dd>{project.tools}</dd></div>{project.liveUrl && <div><dt>Live site</dt><dd><a href={project.liveUrl} target="_blank" rel="noreferrer">Visit website ↗</a></dd></div>}</dl>
        </div>
      </section>
      <div className="case-cover"><Image src={project.image} alt={`${project.title} screens and design overview`} fill priority unoptimized sizes="100vw" /></div>

      <section className="case-block intro-block">
        <span>01 · Challenge</span>
        <div><p className="big-copy">{project.challenge}</p><p>The project began by aligning business requirements, user expectations and delivery constraints. The aim was not to add more interface, but to make the right information visible at the right time.</p></div>
      </section>

      <section className="process-block">
        <p className="eyebrow">THE PROCESS</p><h2>Explore wide.<br />Refine with evidence.</h2>
        <div className="process-grid">
          <article><b>Discover</b><p>Stakeholder conversations, market review, user context and a clear understanding of the business requirement.</p></article>
          <article><b>Define</b><p>Personas, task priorities, information architecture and a shared problem statement.</p></article>
          <article><b>Design</b><p>User flows, sketches, wireframes, prototypes, visual language and responsive components.</p></article>
          <article><b>Validate</b><p>Usability review, stakeholder feedback, developer collaboration and detailed Creative QA.</p></article>
        </div>
      </section>

      <section className="case-block">
        <span>02 · User flow</span>
        <div><h2>A direct path from intent to action.</h2><p>Core journeys were mapped before visual design. Entry points, decisions, edge cases and completion states were simplified to keep users oriented and reduce unnecessary steps.</p><div className="flow-diagram" role="img" aria-label="Simplified user flow from discovery to task completion"><i>Discover</i><b>→</b><i>Compare</i><b>→</b><i>Decide</i><b>→</b><i>Complete</i></div></div>
      </section>

      <section className="case-block result-block">
        <span>03 · Result</span>
        <div><h2>Clearer decisions. A system ready to scale.</h2><p>{project.outcome}</p><ul><li>Consistent responsive patterns across key screens</li><li>Stronger visual hierarchy and more scannable content</li><li>Reusable components supporting faster collaboration</li><li>Accessibility and design fidelity considered throughout</li></ul></div>
      </section>

      <section className="next-project"><p>Next project</p><Link href="/case-study/easy-cart">Easy Cart <span>↗</span></Link></section>
      <Footer />
    </main>
  );
}
