import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Arunkumar NS home">
        ARUNKUMAR NS<span>®</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#about">About</Link>
        <Link href="/#work">Projects</Link>
        <Link href="/#skills">Skills</Link>
        <Link href="/#experience">Experience</Link>
      </nav>
      <Link className="nav-cta" href="/#contact">Let&apos;s talk <span>↗</span></Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow">AVAILABLE FOR SELECT OPPORTUNITIES</p>
        <h2>Let&apos;s make complex feel simple.</h2>
      </div>
      <div className="footer-links">
        <a href="mailto:arunkumar.nadimuthu@photon.com">Email ↗</a>
        <a href="https://www.linkedin.com/in/arun-kumar-ns" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://www.behance.net/arunkumarnasa" target="_blank" rel="noreferrer">Behance ↗</a>
      </div>
      <p className="footer-meta">© 2026 Arunkumar NS · Chennai, India</p>
    </footer>
  );
}
