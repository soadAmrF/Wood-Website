import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../assets/img/job_image_8.jpg'

import { 
  IoLocationOutline, IoBriefcaseOutline, IoLayersOutline, 
  IoSearchOutline, IoCheckmarkCircleOutline, IoMailOutline, 
  IoCallOutline, IoChatbubbleOutline, IoLogoFacebook, 
  IoLogoLinkedin, IoLogoYoutube, IoLogoInstagram, 
  IoLogoTiktok 
} from "react-icons/io5";

export default function EgyptWoodJobs() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const jobList = [
    {
      id: 1,
      title: "Sales",
      positions: 4,
      department: "Sales Department",
      location: "New Cairo, Egypt",
      type: "Full-Time",
      link: "/jobs/sales-2",
      requirements: [
        "Accountability & Responsibility",
        "Teamwork & Collaboration",
        "Integrity & Professionalism",
        "Passion for Sales & Furniture industry"
      ]
    },
    {
      id: 2,
      title: "Warehouse Manager",
      positions: 1,
      department: "Warehouse Management",
      location: "New Cairo, Egypt",
      type: "Full-Time",
      link: "/jobs/warehouse-manager-30",
      requirements: [
        "Bachelor’s degree (Commerce, Logistics, or Engineering)",
        "Minimum 5–7 years experience in wood warehouses",
        "Proficiency in Excel and ERP systems",
        "Knowledge of wood types and storage methods"
      ]
    },
    {
      id: 3,
      title: "Graphic Designer",
      positions: 1,
      department: "Marketing Department",
      location: "New Cairo, Egypt",
      type: "Full-Time",
      link: "/jobs/graphic-designer-46",
      requirements: [
        "Proven experience with a strong portfolio",
        "Proficiency in Adobe Creative Suite (Ps, Ai, Id)",
        "Strong understanding of typography and layout"
      ]
    }
  ];

  const filteredJobs = jobList.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-wrapper" style={{ backgroundColor: "#f8f9fa" }}>

      <header className="shadow-sm bg-white sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light py-2">
          <div className="container">
            <a href="/" className="navbar-brand">
              <img src="/web/image/website/1/logo/Egyptwood" width="95" height="40" alt="Egyptwood" />
            </a>
            <div className="ms-auto d-flex gap-3 align-items-center">
               <a href="/contactus" className="btn btn-sm text-white px-4 rounded-pill" style={{backgroundColor: '#FF7F50'}}>Apply Now</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="py-5">
        <div className="container">
          <div className="row g-5">
            
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="d-flex justify-content-between align-items-center mb-4" data-aos="fade-right">
                <h2 className="fw-bold mb-0">Open Positions</h2>
                <div className="search-box">
                   <div className="input-group bg-white rounded-pill shadow-sm px-3 border">
                      <IoSearchOutline className="mt-2" color="#FF7F50" />
                      <input 
                        type="text" 
                        className="form-control border-0 bg-transparent shadow-none" 
                        placeholder="Search jobs..." 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                      />
                   </div>
                </div>
              </div>

              <div className="row g-4">
                {filteredJobs.map((job, index) => (
                  <div className="col-12" key={job.id} data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="card border-0 shadow-sm job-card-horizontal">
                      <div className="card-body p-4">
                        <div className="row align-items-center">
                          <div className="col-md-8">
                            <div className="d-flex align-items-center gap-3 mb-2">
                              <h4 className="fw-bold mb-0">{job.title}</h4>
                              <span className="badge-positions small">{job.positions} Openings</span>
                            </div>
                            <div className="d-flex flex-wrap gap-3 mb-3 text-muted small">
                              <span><IoLayersOutline color="#FF7F50" className="me-1"/>{job.department}</span>
                              <span><IoLocationOutline color="#FF7F50" className="me-1"/>{job.location}</span>
                              <span><IoBriefcaseOutline color="#FF7F50" className="me-1"/>{job.type}</span>
                            </div>
                            <ul className="list-unstyled mb-0 row">
                              {job.requirements.slice(0, 2).map((req, i) => (
                                <li key={i} className="small col-md-6 text-muted mb-1">
                                  <IoCheckmarkCircleOutline className="text-success me-1" /> {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-md-4 text-md-end mt-3 mt-md-0">
                            <a href={job.link} className="btn px-4 fw-bold text-white w-100" style={{backgroundColor: '#FF7F50', borderRadius: '10px'}}>
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4 order-1 order-lg-2">
              <div className="sticky-sidebar" style={{ position: 'sticky', top: '100px' }}>
                <div className="info-card p-4 bg-white shadow-sm rounded-4 mb-4" data-aos="fade-left">
                  <img src= {img} className="img-fluid rounded-3 mb-3" alt="Egypt Wood Team" />
                  <h4 className="fw-bold">About Us</h4>
                  <p className="text-muted small">
                    We are a team of passionate people whose goal is to improve everyone's life through disruptive products. 
                    We build great products to solve your business problems.
                  </p>
                  <hr />
                  <h6 className="fw-bold mb-3">Connect With Us</h6>
                  <ul className="list-unstyled mb-4 small">

                    <li className="mb-3 d-flex align-items-center">
                      <div className="icon-box me-3"><IoChatbubbleOutline /></div>
                      <a href="/contactus" className="text-decoration-none text-dark fw-medium">Contact Support</a>
                    </li>

                    <li className="mb-3 d-flex align-items-center">
                      <div className="icon-box me-3"><IoMailOutline /></div>
                      <a href="mailto:info@wood.com" className="text-decoration-none text-dark fw-medium">info@ewood.com</a>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <div className="icon-box me-3"><IoCallOutline /></div>
                      <a href="tel:+201012345" className="text-decoration-none text-dark fw-medium">+20 1012345678</a>
                    </li>
                  </ul>

                  <div className="social-grid d-flex flex-wrap gap-2">
                    <a href="#" className="social-btn-small" target="blank"><IoLogoFacebook /></a>
                    <a href="#" className="social-btn-small" target="blank"><IoLogoLinkedin /></a>
                    <a href="#" className="social-btn-small" target="blank"><IoLogoInstagram /></a>
                    <a href="#" className="social-btn-small" target="blank"><IoLogoYoutube /></a>
                    <a href="#" className="social-btn-small" target="blank"><IoLogoTiktok /></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <style>{`
        .job-card-horizontal { 
          border-radius: 15px; 
          transition: 0.3s; 
          border: 1px solid transparent !important;
        }
        .job-card-horizontal:hover { 
          transform: translateX(5px); 
          box-shadow: 0 10px 25px rgba(0,0,0,0.05) !important; 
          border-color: #FF7F50 !important;
        }
        .badge-positions { 
          background: #fff0eb; 
          color: #FF7F50; 
          font-weight: 700; 
          padding: 4px 12px; 
          border-radius: 20px; 
        }
        .icon-box {
          width: 32px; height: 32px;
          background: #fff0eb;
          color: #FF7F50;
          display: flex; align-items: center; justify-content: center;
          border-radius: 8px;
        }
        .social-btn-small {
          width: 35px; height: 35px;
          display: flex; align-items: center; justify-content: center;
          background: #f8f9fa; color: #333;
          border-radius: 50%; transition: 0.3s;
          text-decoration: none; border: 1px solid #eee;
        }
        .social-btn-small:hover { 
          background: #FF7F50; color: white; border-color: #FF7F50;
        }
        .sticky-sidebar { z-index: 10; }
      `}</style>
    </div>
  );
}