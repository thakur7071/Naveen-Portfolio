"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-navbar">
      <Link href="/?view=main" className="site-nav-brand">
        NAVEEN<span>.DEV</span>
      </Link>
      <nav
        id="site-nav-links"
        className={`site-nav-links${menuOpen ? " is-open" : ""}`}
        aria-label="Main navigation"
      >
        <Link href="/about" onClick={() => setMenuOpen(false)}>about</Link>
        <Link href="/skills" onClick={() => setMenuOpen(false)}>skills</Link>
        <Link href="/projects" onClick={() => setMenuOpen(false)}>projects</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>contact</Link>
      </nav>
      <div className="site-nav-status">
        <i />
        available to connect
      </div>
      <button
        className="site-nav-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-controls="site-nav-links"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
