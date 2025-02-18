import React, { useState, useEffect } from "react";
import "../CssFiles/Navbarr.css";

export default function Navbarr({ onScrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("welcome");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollToSection = (sectionName) => {
    const offset = 70; // Adjust for navbar height
    const sectionRef = onScrollToSection[sectionName];

    if (sectionRef?.current) {
      const elementPosition = sectionRef.current.offsetTop;
      const scrollPosition = elementPosition - offset;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionName); // Highlight the active menu item
      setMenuOpen(false); // Close menu for mobile view
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // Observes within the viewport
      rootMargin: "-70px 0px 0px 0px", // Account for the navbar height
      threshold: 0.6, // 60% of the section should be visible to trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute("data-section");
          setActiveSection(sectionName);
        }
      });
    }, observerOptions);

    // Observe each section
    Object.values(onScrollToSection).forEach((sectionRef) => {
      if (sectionRef?.current) {
        observer.observe(sectionRef.current);
      }
    });

    // Cleanup observer on unmount
    return () => {
      Object.values(onScrollToSection).forEach((sectionRef) => {
        if (sectionRef?.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, [onScrollToSection]);

  const navLinks = [
    { name: "Welcome", section: "welcome" },
    { name: "Our Story", section: "story" },
    { name: "Price", section: "price" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <div className="container">
      <div className="nav">
      <div
          className="nav1"
          onClick={() => handleScrollToSection("contact")} // Scroll to Contact section
          style={{ cursor: "pointer" }}
        >
           Walking shop in Stratford!!
        </div>

        <div className={`nav2 ${menuOpen ? "active" : ""}`}>
          <ul className="list">
            {navLinks.map((link) => (
              <li
                key={link.section}
                className={activeSection === link.section ? "active" : ""}
                onClick={() => handleScrollToSection(link.section)}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`nav3 ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {activeSection === "welcome" && (
        <div className="nav-text">
          <p className="professinalbarbershop">PROFESSIONAL BARBERSHOP</p>
          <h2 className="professinalbarbershop">MAN_FADEZ</h2>
          <span>Since 2025</span>
        </div>
      )}
    </div>
  );
}
