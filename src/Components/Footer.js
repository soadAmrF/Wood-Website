export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: "bi-facebook", color: "#1877F2", url: "#" },
    { name: "LinkedIn", icon: "bi-linkedin", color: "#0A66C2", url: "#" },
    { name: "Instagram", icon: "bi-instagram", color: "#E4405F", url: "#" },
    { name: "Whatsapp", icon: "bi-whatsapp", color: "#25D366", url: "#" },
    { name: "TikTok", icon: "bi-tiktok", color: "#000000", url: "#" },
  ];

  return (
    <>
      <style>{`
        .footer-link {
          transition: all 0.3s ease;
          display: inline-block;
          color: #6c757d !important;
        }
        .footer-link:hover {
          color: #a0512d !important; 
          transform: translateX(${document.dir === "rtl" ? "-8px" : "8px"});
        }

        .social-icon-wrapper {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          align-items: center;
          text-decoration: none !important;
          color: #6c757d !important;
        }
        .social-icon-wrapper:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
        .social-icon-wrapper i {
          font-size: 1.2rem;
          transition: transform 0.4s ease;
        }
        // .social-icon-wrapper:hover i {
        //   transform: rotate(360deg);
        // }

        .footer-heading {
          position: relative;
          padding-bottom: 12px;
          color: #212529;
        }
        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background-color: #a0512d;
          transition: width 0.3s ease;
        }
        .footer-heading:hover::after {
          width: 50px;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .footer-animate {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      <footer className="bg-white text-dark pt-5 pb-3 border-top footer-animate">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <h6 className="fw-bold mb-3 text-uppercase footer-heading">
                Explore
              </h6>
              <ul className="list-unstyled">
                {["About us", "News", "Service", "Return & Policy"].map(
                  (item) => (
                    <li key={item} className="mb-2">
                      <a
                        href={`/${item.toLowerCase().replace(/ & /g, "").replace(/ /g, "")}`}
                        className="footer-link text-decoration-none small"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <h6 className="fw-bold mb-3 text-uppercase footer-heading">
                Services
              </h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    href="/products"
                    className="footer-link text-decoration-none small"
                  >
                    Products
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <h6 className="fw-bold mb-3 text-uppercase footer-heading">
                Follow us
              </h6>
              <ul className="list-unstyled">
                {socialLinks.map((social) => (
                  <li key={social.name} className="mb-2">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon-wrapper small"
                    >
                      <i
                        className={`bi ${social.icon} me-2`}
                        style={{ color: social.color }}
                      ></i>
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h6 className="fw-bold mb-3 text-uppercase footer-heading">
                Contact us
              </h6>
              <div className="mb-3 footer-link d-flex align-items-center small">
                <i className="bi bi-envelope me-2 text-dark"></i>
                <a
                  className="text-decoration-none text-secondary"
                  href="mailto:info@wood.com"
                >
                  info@wood.com
                </a>
              </div>
              <div className="mb-3 footer-link d-flex align-items-center small">
                <i className="bi bi-telephone me-2 text-dark"></i>
                <a
                  className="text-decoration-none text-secondary"
                  href="tel:+201012345678"
                >
                  +20 1012345678
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h6 className="fw-bold mb-3 text-uppercase footer-heading">
                Our Locations
              </h6>
              <div className="d-flex mb-3 footer-link align-items-start small">
                <i className="bi bi-geo-alt me-2 text-dark mt-1"></i>
                <span className="text-secondary">Axis, Cairo, Egypt</span>
              </div>
              <div className="d-flex footer-link align-items-start small">
                <i className="bi bi-geo-alt me-2 text-dark mt-1"></i>
                <span className="text-secondary"> New Cairo</span>
              </div>
            </div>
          </div>

          <div className="row mt-5 pt-3 border-top align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-muted small">
                wood © {currentYear} All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
              <p className="mb-0 text-muted small">
                Crafted with passion by{" "}
                <span
                  className="fw-bold text-dark"
                  style={{ borderBottom: "1px solid #a0512d" }}
                >
                  Soad Amr
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
