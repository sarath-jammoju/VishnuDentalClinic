import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa"; // Burger and Close icons
import "./Navbar.css";
import logo from "../../assets/Images/VishnuDentalhd_logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-left">
          <img src={logo} alt="Vishnu Dental Care" className="logo" />
        </div>

        {/* Desktop Nav */}
        <div className="nav-right">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
            </li>
          </ul>
          <button className="appointment-btn" onClick={() => navigate("/contactus")}>
            <FaCalendarAlt className="calendar-icon" /> Book an Appointment
          </button>
        </div>

        {/* Burger Icon */}
        <div className="burger-menu" onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className={`nav-sidebar ${menuOpen ? "active" : ""}`}>
        <span className="close-btn" onClick={closeMenu}><FaTimes /></span>
        <ul>
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/aboutus" onClick={closeMenu}>About Us</NavLink></li>
          <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
          <li>
            <button className="appointment-btn" onClick={() => { closeMenu(); navigate("/contactus"); }}>
              <FaCalendarAlt className="calendar-icon" /> Book Appointment
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
