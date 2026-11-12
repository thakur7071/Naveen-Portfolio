export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#home" className="logo">
          NAVEEN<span>.DEV</span>
        </a>

        <p>Designed & Built by Naveen Singh</p>

        <p>Building one project at a time.</p>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Naveen Singh. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}