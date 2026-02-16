import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../data/siteContent';

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link to="/" className="brand">DropX Agent</Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
