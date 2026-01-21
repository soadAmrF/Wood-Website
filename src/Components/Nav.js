import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/Home/logo.png";

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setExpanded(false); 
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const brandColor = "#FF7F50";

  return (
    <>
      <Navbar
        expand="lg"
        expanded={expanded}
        className="main-navbar py-2"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="brand-logo">
            <img src={logo} alt="Egyptwood Logo" />
          </Navbar.Brand>

          <button
            className={`custom-toggler ${expanded ? "active" : ""}`}
            onClick={() => setExpanded(!expanded)}
          >
            <span className="bar top-bar"></span>
            <span className="bar middle-bar"></span>
            <span className="bar bottom-bar"></span>
          </button>

          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ms-auto align-items-center nav-items-gap">
              {[
                { path: "/", label: "Home" },
                { path: "/about-us", label: "About Us" },
                { path: "/products", label: "Products" },
                { path: "/downloads", label: "Downloads" },
                { path: "/jobs", label: "Jobs" },
                { path: "/service", label: "Services" },
              ].map((link, index) => (
                <Nav.Link
                  key={link.path}
                  as={NavLink}
                  to={link.path}
                  className="nav-custom-link fw-semibold px-3"
                  style={{ "--i": index }}
                >
                  {link.label}
                </Nav.Link>
              ))}

              <Nav.Link
                as={NavLink}
                to="/contact"
                className="btn-contact-nav ms-lg-4 mt-4 mt-lg-0"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <button
        onClick={scrollToTop}
        className={`scroll-to-top-btn rounded-circle shadow-sm ${showScrollBtn ? "visible" : ""}`}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </button>

      <style>{`
        /* Navbar Styles */
        .main-navbar {
          background-color: #ffffff !important;
          box-shadow: 0 2px 15px rgba(0,0,0,0.06);
          border-bottom: 1px solid #f0f0f0;
          z-index: 1050;
        }

        .brand-logo img { width: 75px; }

        .nav-custom-link { color: #555 !important; position: relative; transition: 0.3s; }
        .nav-custom-link::after {
          content: ''; position: absolute; width: 0; height: 2px;
          bottom: 5px; left: 50%; background: ${brandColor};
          transition: 0.3s; transform: translateX(-50%);
        }
        .nav-custom-link:hover::after, .nav-custom-link.active::after { width: 50%; }
        .nav-custom-link:hover, .nav-custom-link.active { color: ${brandColor} !important; }

        .btn-contact-nav {
          background-color: ${brandColor}; color: white !important;
          padding: 8px 25px !important; border-radius: 50px;
          font-weight: 600; border: 1px solid ${brandColor};
        }

        /* Toggler Styles */
        .custom-toggler { border: none; background: transparent; display: none; flex-direction: column; gap: 6px; }
        .bar { width: 25px; height: 2px; background-color: #333; transition: 0.4s; }

        @media (max-width: 991px) {
          .custom-toggler { display: flex; }
          .active .top-bar { transform: rotate(45deg) translate(5px, 6px); }
          .active .middle-bar { opacity: 0; }
          .active .bottom-bar { transform: rotate(-45deg) translate(5px, -6px); }
          .navbar-collapse { background: white; margin-top: 15px; padding: 25px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
        }

        /* Scroll To Top Button Styles */
        .scroll-to-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 45px;
          height: 45px;
          background-color: white !important;
          border: 2px solid ${brandColor} !important;
          color: ${brandColor} !important;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px) scale(0);
        }

        .scroll-to-top-btn.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .scroll-to-top-btn:hover {
          background-color: ${brandColor} !important;
          color: white !important;
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 10px 20px rgba(255, 127, 80, 0.3);
        }
      `}</style>
    </>
  );
}

export default CustomNavbar;
