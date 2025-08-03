"use client"
import { useState } from "react"
import logo from "../assets/logo.png"
import { Link, useLocation } from "react-router-dom"
import "../styles/navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path ? "active" : ""
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <span><img className="logo" src={logo} alt="logo" height="100px"/></span>
          </Link>

          {/* Moved nav-toggle ABOVE nav-menu */}
          <div className={`nav-toggle ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
            <Link to="/" className={`nav-link ${isActive("/")}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive("/about")}`} onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/magazines" className={`nav-link ${isActive("/magazines")}`} onClick={() => setIsMenuOpen(false)}>
              Magazines
            </Link>
            <Link to="/blog" className={`nav-link ${isActive("/blog")}`} onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
            <Link to="/contact" className={`nav-link ${isActive("/contact")}`} onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
