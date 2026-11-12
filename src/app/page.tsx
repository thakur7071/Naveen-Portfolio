import Terminal from "@/components/terminal/Terminal";

export default function Home() {
  return (
    <main className="terminal-home">
      <div className="terminal-home-top">
        <a href="/" className="terminal-brand">NAVEEN<span>.DEV</span></a>
        <span className="terminal-home-status"><i /> AVAILABLE TO CONNECT</span>
      </div>
      <section className="terminal-home-content">
        <div className="terminal-kicker" style={{ marginBottom: 10 }}>
          INTERACTIVE DEVELOPER PORTFOLIO
        </div>
        <Terminal />
        <p className="terminal-hint">TIP: TYPE <code>help</code> TO SEE WHAT YOU CAN DO</p>
      </section>
      <footer className="terminal-home-footer">
        <span>© {new Date().getFullYear()} NAVEEN.DEV</span>
        <span>BUILT WITH CURIOSITY & CODE</span>
      </footer>
    </main>
  );
}
