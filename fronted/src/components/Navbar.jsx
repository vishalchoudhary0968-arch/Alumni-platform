import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  // Simple login check (JWT token)
  const isLoggedIn = localStorage.getItem("token");
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ALUMNI PLATFORM</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        {!isLoggedIn && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
              <Link to="/register">Register</Link>
            </li> */}
          </>
        )}

        {isLoggedIn && (
          <>
            <li>
              <Link to="/alumni">AlumniDirectory</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/donation">Donation</Link>
            </li>
            <li>
              <Link to="/success">SuccessStories</Link>
            </li>
            <li>
              {/* <Link to="/profile">Profile</Link> */}
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>

            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
