export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-wrap">
        <p>© {new Date().getFullYear()} DropX Agent. Built for faster, smarter logistics operations in Nigeria.</p>
        <p className="muted">Startup-friendly. Operations-ready.</p>
      </div>
    </footer>
  );
}
