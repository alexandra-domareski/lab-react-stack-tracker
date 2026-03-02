import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        StackTracker
      </Link>
    </nav>
  );
}

export default Navbar;
