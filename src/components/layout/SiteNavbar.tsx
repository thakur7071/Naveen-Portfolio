"use client";

import Link from "next/link";

export default function SiteNavbar() {
  return (
    <header className="site-navbar">
      <Link href="/?view=main" className="site-nav-brand">
        NAVEEN<span>.DEV</span>
      </Link>
      <nav className="site-nav-links" aria-label="Main navigation">
        <Link href="/about">about</Link>
        <Link href="/skills">skills</Link>
        <Link href="/projects">projects</Link>
        <Link href="/contact">contact</Link>
      </nav>
      <div className="site-nav-status">
        <i />
        available to connect
      </div>
    </header>
  );
}
