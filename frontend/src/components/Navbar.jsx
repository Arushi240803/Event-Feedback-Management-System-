import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Event<span>Feedback</span></div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/reviews">Reviews</Link>
      </div>

      <button className="primary-btn">Submit Feedback</button>
    </nav>
  );
}

export default Navbar;