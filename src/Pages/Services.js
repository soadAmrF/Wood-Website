import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  IoTimeOutline, IoBuildOutline, IoHammerOutline,
  IoLayersOutline, IoColorPaletteOutline, IoCubeOutline,
  IoMailOutline, IoCallOutline, IoChevronForwardOutline
} from "react-icons/io5";
import contactImage from "../assets/img/services/Untitled-2-Pica.webp";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const customStyles = `
    body, html {
      background-color: #ffffff;
    }

    .hover-card {
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      border: 1px solid #f5f5f5;
      background: #ffffff;
    }
    .hover-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0,0,0,0.05);
      border-color: #e67e22; 
    }
    .icon-circle {
      width: 60px; height: 60px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 50%; background: #fff3e0; color: #d35400; transition: 0.3s;
    }
    .hover-card:hover .icon-circle {
      background: #e67e22; color: #fff;
    }

    .hero-glass {
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border-radius: 24px;
    }

f    .custom-accordion-item {
      margin-bottom: 12px;
      border-radius: 12px !important;
      overflow: hidden;
      border: 1px solid #eee;
      background: #ffffff;
      transition: 0.3s;
    }
    
    .accordion-header-btn {
      width: 100%;
      padding: 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      color: #5d4037;
      border: none;
      font-weight: 600;
      transition: 0.3s all ease;
    }

    .accordion-header-btn:hover {
      background: #fffcf9;
    }

    .accordion-header-btn.active {
      background: #e67e22;
      color: #ffffff;
    }

    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease;
      background: #ffffff; 
    }

    .accordion-content.show {
      max-height: 500px;
    }

    .accordion-body-text {
      padding: 20px 25px;
      color: #6e3f26;
      line-height: 1.7;
      border-top: 1px solid #f9f9f9;
    }

    .chevron-icon {
      transition: transform 0.3s ease;
      color: #e67e22;
    }

    .accordion-header-btn.active .chevron-icon {
      transform: rotate(90deg);
      color: #ffffff;
    }
  `;

  const faqData = [
    { q: "What is the average production time?", a: "Typically, orders are processed and ready for delivery within 7 business days, depending on the complexity of the cutting and edging." },
    { q: "Can I order a single custom piece?", a: "Yes! We cater to both large-scale projects and individual custom needs. You can order any quantity, from one piece to full sets." },
    { q: "Do you offer delivery services?", a: "Absolutely. We have a dedicated logi team to ensure your custom-cut panels reach your site safely and on time." },
    { q: "Can I customize the colors and textures?", a: "Yes, we offer a wide range of colors, finishes, and textures to match your design requirements perfectly." },
    { q: "What types of wood panels do you work with?", a: "We work with MDF, plywood, particleboard, and solid wood panels, providing precision cutting, edge banding, and finishing services." },
  ];

  return (
    <div style={{ backgroundColor: "#ffffff", overflowX: "hidden", fontFamily: "'Segoe UI', Roboto, sans-serif" }}>
      <style>{customStyles}</style>

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${contactImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="hero-glass p-4 p-md-5 text-center text-white" data-aos="zoom-in" style={{ maxWidth: "850px", width: "90%" }}>
          <h2 className="display-4 fw-bold mb-4">Let’s get in touch</h2>
          <div className="mb-4">
            <a href="mailto:info@egyptwood.com" className="text-white text-decoration-none fs-4 border-bottom pb-1">
              <IoMailOutline className="me-2" /> info@wood.com
            </a>
            <p className="mt-2 text-white-50"><IoCallOutline className="me-2" />+20 1012345678</p>
          </div>

          <div className="row mt-5 g-4 border-top pt-4">
            <div className="col-sm-6 border-end border-white-50">
              <h6 className="text-warning text-uppercase ls-2">Work Days</h6>
              <p className="mb-1">Mon – Thu / Sat – Sun</p>
              <h4 className="fw-bold">9:00am – 7:00pm</h4>
            </div>
            <div className="col-sm-6">
              <h6 className="text-warning text-uppercase ls-2">Weekend</h6>
              <p className="mb-1 text-white-50">Friday</p>
              <h4 className="fw-bold">Closed</h4>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5 bg-white text-center">
        <div className="container" data-aos="fade-up">
          <span className="fw-bold text-uppercase" style={{ color: '#e67e22' }}>What we do</span>
          <h1 className="display-5 fw-bold mt-2" style={{ color: "#4e342e" }}>Our Services</h1>
          <div style={{ width: "60px", height: "4px", backgroundColor: "#e67e22", margin: "20px auto" }}></div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-right">
              <div className="hover-card p-5 rounded-4 h-100">
                <div className="icon-circle mb-4"><IoHammerOutline size={30} /></div>
                <h2 className="fw-bold" style={{ color: "#4e342e" }}>Panel Cutting</h2>
                <p className="text-muted fs-5">Precise and professional cutting services for all types of wood panels using state-of-the-art machinery.</p>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="hover-card p-5 rounded-4 h-100">
                <div className="icon-circle mb-4"><IoBuildOutline size={30} /></div>
                <h2 className="fw-bold" style={{ color: "#4e342e" }}>Edge Banding</h2>
                <p className="text-muted fs-5">Achieve a flawless finish with our high-quality edge banding technology for durability and aesthetics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            {[
              { title: "Fast Delivery", text: "We deliver within 7 working days.", icon: <IoTimeOutline />, delay: "100" },
              { title: "Customization", text: "Tailored sizes to your exact needs.", icon: <IoColorPaletteOutline />, delay: "200" },
              { title: "Ready to Install", text: "Pieces arrive machined and ready.", icon: <IoLayersOutline />, delay: "300" },
              { title: "Versatility", text: "Perfect for kitchens & bathrooms.", icon: <IoLayersOutline />, delay: "400" },
              { title: "Wide Designs", text: "Massive library of colors & textures.", icon: <IoColorPaletteOutline />, delay: "500" },
              { title: "Any Quantity", text: "Order exactly what you need.", icon: <IoCubeOutline />, delay: "600" },
            ].map((item, idx) => (
              <div className="col-lg-4 col-md-6" key={idx} data-aos="zoom-in" data-aos-delay={item.delay}>
                <div className="hover-card p-4 h-100 rounded-4 text-center">
                  <div className="icon-circle mx-auto mb-3">{item.icon}</div>
                  <h5 className="fw-bold" style={{ color: "#4e342e" }}>{item.title}</h5>
                  <p className="text-muted small mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
              <h2 className="display-6 fw-bold mb-4" style={{ color: "#4e342e" }}>Help Center</h2>
              <p className="text-muted lead mb-4">Find answers to common questions about our wood solutions and services.</p>
              <div className="p-4 rounded-4" style={{ backgroundColor: '#fffcf9', border: '1px solid #eee' }}>
                <h6 className="fw-bold mb-3">Visit our Showroom</h6>
                <div className="rounded-3 overflow-hidden shadow-sm" style={{ height: "200px" }}>
                  <iframe 
                    title="location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13803.638710767471!2d31.30782545341205!3d30.125397948123048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815a5666c8835%3A0x6fcd9ec417e99d32!2sAl%20Matariyyah%2C%20Helmeyat%20AZ%20Zaytoun%2C%20Ain%20Shams%2C%20Cairo%20Governorate%204540046!5e0!3m2!1sen!2seg!4v1769024871058!5m2!1sen!2seg"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-lg-6 offset-lg-1" data-aos="fade-left">
              <div>
                {faqData.map((item, idx) => (
                  <div className="custom-accordion-item" key={idx}>
                    <button 
                      className={`accordion-header-btn ${activeIndex === idx ? 'active' : ''}`}
                      onClick={() => toggleAccordion(idx)}
                    >
                      {item.q}
                      <IoChevronForwardOutline className="chevron-icon" />
                    </button>
                    <div className={`accordion-content ${activeIndex === idx ? 'show' : ''}`}>
                      <div className="accordion-body-text">
                        {item.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white text-center">
        <div className="container" data-aos="zoom-up">
          <h2 className="fw-bold">Ready to start your project?</h2>
          <p className="text-white-50">Contact us today for a free consultation.</p>
          <button className="btn btn-lg px-5 mt-3 rounded-pill fw-bold" style={{ backgroundColor: '#e67e22', color: '#fff', border: 'none' }}>
            Contact Now <IoChevronForwardOutline className="ms-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;  