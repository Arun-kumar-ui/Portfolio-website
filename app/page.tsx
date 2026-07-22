import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "./components";

const projects = [
  {
    index: "01",
    title: "GoTo Foods",
    category: "Food commerce · Multi-brand platform",
    summary: "Design and Creative QA across digital experiences for seven iconic food brands.",
    image: "/images/gotofoods-homepage.jpg",
    href: "/case-study/goto-foods",
    color: "coral",
  },
  {
    index: "02",
    title: "Viome",
    category: "Health technology · Personalization",
    summary: "Making complex microbiome insights and personalized recommendations easier to understand.",
    image: "/images/viome-homepage.jpg",
    href: "/case-study/viome",
    color: "yellow",
  },
  {
    index: "03",
    title: "Gap",
    category: "Retail commerce · Responsive experience",
    summary: "Supporting a high-volume fashion storefront with clear navigation and consistent responsive UI.",
    image: "/images/gap-homepage.jpg",
    href: "/case-study/gap",
    color: "sand",
  },
  {
    index: "04",
    title: "Fieldy",
    category: "SaaS · Field service management",
    summary: "A unified web and mobile experience for scheduling, tracking and automating field operations.",
    image: "/images/fieldy-homepage.jpg",
    href: "/case-study/fieldy",
    color: "blue",
  },
  {
    index: "05",
    title: "State Street",
    category: "Financial services · Enterprise platform",
    summary: "Organizing complex market insights and institutional capabilities into a clear global experience.",
    image: "/images/state-street-homepage.jpg",
    href: "/case-study/state-street",
    color: "yellow",
  },
  {
    index: "06",
    title: "L’Oréal",
    category: "Beauty · Global brand ecosystem",
    summary: "A rich corporate experience connecting brand storytelling, innovation and global commitments.",
    image: "/images/loreal-homepage.jpg",
    href: "/case-study/loreal",
    color: "coral",
  },
  {
    index: "07",
    title: "Puthiya Thalaimurai",
    category: "Digital media · Tamil news platform",
    summary: "A content-rich Tamil news experience balancing breaking stories, live coverage and fast discovery.",
    image: "/images/puthiya-thalaimurai-homepage.jpg",
    href: "/case-study/puthiya-thalaimurai",
    color: "coral",
  },
  {
    index: "08",
    title: "Cenlar",
    category: "Fintech · Mortgage servicing portal",
    summary: "A secure borrower experience for accessing and managing essential mortgage-servicing tasks.",
    image: "/images/cenlar-login.jpg",
    href: "/case-study/cenlar",
    color: "blue",
  },
  {
    index: "09",
    title: "Easy Cart",
    category: "E-commerce · End-to-end case study",
    summary: "A mobile shopping experience designed to reduce friction from discovery to checkout.",
    image: "/images/easy-cart.jpg",
    href: "/case-study/easy-cart",
    color: "sand",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" id="home">
        <div className="hero-word" aria-hidden="true">ARUNKUMAR NS</div>
        <div className="hero-kicker">Senior UI/UX Designer · Chennai</div>
        <div className="hero-copy">
          <p>10 years shaping enterprise web and mobile experiences with clarity, craft and care.</p>
        </div>
        <div className="hero-portrait">
          <Image src="/images/arunkumar-cutout.png" alt="Arunkumar NS" fill priority unoptimized sizes="(max-width: 700px) 86vw, 48vw" />
        </div>
        <div className="hero-title">
          <p>UI/UX,</p><p>Made Human.</p>
        </div>
        <div className="metric metric-one"><strong>10</strong><span>Years of<br />experience</span></div>
        <div className="metric metric-two"><strong>5</strong><span>Product<br />domains</span></div>
        <div className="trait-card"><span>● Strategic</span><span>✦ Accessible</span><span>◆ Collaborative</span><span>✳ Detail-led</span></div>
        <div className="hero-actions">
          <a className="button primary" href="#work">View selected work</a>
          <a className="button light" href="/documents/arunkumar-resume.pdf" download>Download résumé</a>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span>SCROLL TO EXPLORE</span><b>↓</b></div>
      </section>

      <section className="marquee" aria-label="Areas of expertise">
        <div>PRODUCT DESIGN ✦ DESIGN SYSTEMS ✦ CREATIVE QA ✦ ACCESSIBILITY ✦ PROTOTYPING ✦ </div>
      </section>

      <section className="section about" id="about">
        <div className="section-label"><span>01</span> About</div>
        <div className="about-main">
          <p className="eyebrow">DESIGNING FOR PEOPLE, ALIGNING TEAMS</p>
          <h2>I turn complex workflows into <em>clear, confident</em> experiences.</h2>
          <div className="about-grid">
            <p>For a decade, I&apos;ve designed and improved enterprise products across healthcare, fintech, legal technology and food commerce. I work from early discovery through handoff and visual QA.</p>
            <p>My approach connects user needs, business goals and engineering realities. The result is thoughtful design that is practical to build, accessible to use and consistent at scale.</p>
          </div>
          <div className="principles">
            <article><b>01</b><h3>Understand first</h3><p>Research the context, user and real constraint before opening the design tool.</p></article>
            <article><b>02</b><h3>Make it clear</h3><p>Use hierarchy, language and interaction to remove cognitive effort.</p></article>
            <article><b>03</b><h3>Validate the detail</h3><p>Collaborate through build and protect quality with systematic Creative QA.</p></article>
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="work-head">
          <div className="section-label light-label"><span>02</span> Selected work</div>
          <div><p className="eyebrow">PROJECTS ACROSS COMPLEX DOMAINS</p><h2>Designed with purpose.<br />Delivered with precision.</h2></div>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.color}`} key={project.title}>
              <div className="project-meta"><span>{project.index}</span><span>{project.category}</span></div>
              <div className="project-image"><Image src={project.image} alt={`${project.title} project preview`} fill unoptimized sizes="(max-width: 800px) 100vw, 60vw" /></div>
              <div className="project-copy"><h3>{project.title}</h3><p>{project.summary}</p><Link href={project.href} aria-label={`View ${project.title} project details`}>View project details <span>↗</span></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="section-label"><span>03</span> Capabilities</div>
        <div className="skills-main">
          <p className="eyebrow">FROM DISCOVERY TO DESIGN QA</p>
          <h2>A full-spectrum design partner.</h2>
          <div className="skill-grid">
            <article><span>01</span><h3>Product design</h3><p>User research, competitive analysis, information architecture, user flows, wireframes and polished UI.</p><small>Figma · Sketch · Adobe XD</small></article>
            <article><span>02</span><h3>Design systems</h3><p>Reusable components, tokens, variables, responsive patterns and documentation that help teams scale.</p><small>Components · Variables · Governance</small></article>
            <article><span>03</span><h3>Creative QA</h3><p>Systematic validation of typography, spacing, responsiveness, accessibility and design-to-build fidelity.</p><small>Jira · WCAG · Cross-device QA</small></article>
            <article><span>04</span><h3>Collaboration</h3><p>Close partnership with stakeholders, onsite teams and engineers from concept through release.</p><small>Workshops · Handoff · Mentoring</small></article>
          </div>
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-label"><span>04</span> Experience</div>
        <div className="experience-main">
          <p className="eyebrow">A DECADE OF CONTINUOUS CRAFT</p>
          <h2>Experience that connects design and delivery.</h2>
          <div className="timeline">
            <article><time>2023 — Present</time><div><h3>Photon Infotech Pvt Ltd</h3><p>Senior UI/UX Designer · Enterprise web and mobile products</p></div><span>Current</span></article>
            <article><time>2023</time><div><h3>Zaigo Infotech Pvt Ltd</h3><p>Senior UI/UX Designer · Enterprise experiences</p></div></article>
            <article><time>2022</time><div><h3>Tata Consultancy Services</h3><p>IT Analyst · Enterprise web and mobile UX</p></div></article>
            <article><time>2018 — 2022</time><div><h3>ChainSys</h3><p>UI/UX Designer & Developer · Enterprise applications</p></div></article>
            <article><time>2015 — 2018</time><div><h3>Nua Transmedia</h3><p>UI Designer · Web and mobile interface design</p></div></article>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-intro"><p className="eyebrow">HAVE A PRODUCT CHALLENGE?</p><h2>Let&apos;s design what&apos;s next.</h2><p>Tell me a little about your product, team or opportunity. I&apos;ll get back to you soon.</p></div>
        <form action="mailto:arunkumar.nadimuthu@photon.com" method="post" encType="text/plain">
          <label>Name<input name="name" type="text" autoComplete="name" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          <label className="full">How can I help?<textarea name="message" rows={4} required /></label>
          <button type="submit">Start a conversation <span>↗</span></button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
