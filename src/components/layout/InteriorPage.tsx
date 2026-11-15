import Link from "next/link";
import type { ReactNode } from "react";

export default function InteriorPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="interior-page">
      <header className="interior-header">
        <Link href="/" className="terminal-brand">NAVEEN<span>.DEV</span></Link>
      </header>
      <div className="interior-content">
        <p className="interior-eyebrow">{eyebrow}</p>
        <h1 className="interior-title">{title}<span>.</span></h1>
        {children}
      </div>
      <footer className="interior-footer">© {new Date().getFullYear()} NAVEEN.DEV · BUILT WITH CURIOSITY & CODE</footer>
    </main>
  );
}
