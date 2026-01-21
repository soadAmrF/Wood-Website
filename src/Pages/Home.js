import React, { useEffect, useRef, useState } from "react";
import Slide from "../Components/Slide";
import img1 from "../assets/img/Home/WORKTOPS.webp";
import img2 from "../assets/img/Home/sa.webp";
import img3 from "../assets/img/Home/wallpanel1.webp";
import img4 from "../assets/img/Home/HPL.webp";
import bannerImg from "../assets/img/Home/5cd9ca24ba140b156428f01da4cacde0.webp";
import accordionImg from "../assets/img/Home/download.webp";
import iMG5 from "../assets/img/Home/24-12-17_rotator_ELITE-1.webp";
import iMG6 from "../assets/img/Home/Vigo-3.webp";
import iMG7 from "../assets/img/Home/wwood1.webp";
import iMG8 from "../assets/img/Home/4f916af3b12cbf0f39c2b2ad3d942767.webp";

const Home = () => {
  const sectionRefs = useRef([]);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const products = [
    { id: "01", title: "Premium Worktops", description: "Seamless elegance for modern kitchens.", img: img1, link: "/worktops" },
    { id: "02", title: "Decorative Panels", description: "Artistic textures for every wall.", img: img2, link: "/panels" },
    { id: "03", title: "Wall Solutions", description: "Durability meets high-end design.", img: img3, link: "/wallpanel-wallpanel" },
    { id: "04", title: "HPL Collection", description: "High-pressure laminates built to last.", img: img4, link: "/hpl-hpl-va" },
  ];

  const faqItems = [
    { id: 1, question: "What services does your company offer?", answer: "We provide total wood solutions, consulting, and bespoke designs tailored to your architectural needs." },
    { id: 2, question: "How can I contact customer support?", answer: "Our team is available 24/7 at info@wood.com for all your inquiries." },
    { id: 3, question: "Do you offer international shipping?", answer: "Yes, we ship our premium products globally with secure packaging to ensure safety." }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="home-wrapper overflow-hidden bg-white">
      <Slide />

      <section className="py-5 reveal-skew" ref={addToRefs}>
        <div className="container text-center py-5">
          <h2 className="display-4 fw-bold color-brand-dark mb-3">
            Crafting Elegance In Every Detail
          </h2>
          <p className="lead mx-auto text-muted mb-4" style={{ maxWidth: '750px' }}>
            Explore our curated collection of high-end wood materials and innovative surfaces.
          </p>
          <div className="brand-divider mx-auto"></div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="col-6 col-lg-3 reveal-zoom" 
                ref={addToRefs}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="product-card-premium">
                  <div className="image-wrapper">
                    <div className="card-badge">{product.id}</div>
                    <a href={product.link} className="d-block overflow-hidden rounded-4">
                       <img src={product.img} alt={product.title} className="img-fluid main-img" />
                       <div className="hover-mask">
                          <span className="mask-btn">DISCOVER</span>
                       </div>
                    </a>
                  </div>
                  <div className="card-content mt-3 text-center">
                    <h5 className="fw-bold color-brand-dark">{product.title}</h5>
                    <div className="content-line mx-auto"></div>
                    <p className="small text-muted mt-2">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 reveal-left" ref={addToRefs}>
        <div className="container">
          <div className="premium-banner rounded-5 shadow-2xl position-relative overflow-hidden">
            <div className="liquid-bg"></div>
            <div className="row align-items-center position-relative p-5" style={{ zIndex: 5 }}>
              <div className="col-lg-6 text-white">
                <h6 className="text-uppercase fw-bold ls-2 mb-3">New Innovation</h6>
                <h2 className="display-3 fw-bold mb-4">Rocko Tiles: <br/> The Future of Walls</h2>
                <a className="btn-modern" href="/rocko-rocko">Explore Collection</a>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                 <div className="floating-img-container">
                    <img src={bannerImg} alt="Rocko" className="img-fluid rounded-4 shadow-lg banner-img-float" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white overflow-hidden">
        <div className="container py-lg-5">
          <div className="row g-5 align-items-center">
            
            <div className="col-lg-6 reveal-left" ref={addToRefs}>
              <div className="mb-5">
                <h2 className="display-5 fw-bold color-brand-dark mb-3">Common Questions</h2>
                <p className="text-muted lead">Find everything you need to know about our premium wood solutions.</p>
              </div>

              <div className="faq-modern-wrapper">
                {faqItems.map((item) => (
                  <div 
                    className={`faq-item-premium ${activeAccordion === item.id ? 'is-active' : ''}`} 
                    key={item.id}
                  >
                    <button 
                      className="faq-trigger"
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <div className="faq-title-group">
                        <span className="faq-number">0{item.id}</span>
                        <span className="faq-question">{item.question}</span>
                      </div>
                      <div className={`faq-plus-icon ${activeAccordion === item.id ? 'is-rotate' : ''}`}>
                        <span></span>
                        <span></span>
                      </div>
                    </button>
                    <div className="faq-content-pane">
                      <div className="faq-inner-text">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 reveal-right" ref={addToRefs}>
              <div className="position-relative ps-lg-5">
                <div className="image-decoration-box"></div>
                <img 
                  src={accordionImg} 
                  alt="Wood Showcase" 
                  className="img-fluid rounded-5 shadow-2xl position-relative z-1 object-fit-cover w-100"
                  style={{ minHeight: '500px' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-5 bg-brand-soft reveal-fade" ref={addToRefs}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
               <div className="grid-card-3d h-100 rounded-5 overflow-hidden shadow-sm">
                  <img src={iMG5} alt="GTV" className="img-fluid h-100 object-fit-cover w-100" />
                  <div className="grid-info">
                    <h3>GTV Hardware</h3>
                    <p>German precision in every hinge.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-5">
               <div className="row g-4 h-100">
                  <div className="col-12 h-50">
                    <div className="grid-card-3d rounded-5 overflow-hidden h-100">
                       <img src={iMG7} alt="HPL" className="img-fluid h-100 object-fit-cover w-100" />
                       <div className="grid-info"><h4>HPL VENEER</h4></div>
                    </div>
                  </div>
                  <div className="col-6 h-50">
                    <div className="grid-card-3d rounded-5 overflow-hidden h-100">
                       <img src={iMG8} alt="Panels" className="img-fluid h-100 object-fit-cover w-100" />
                       <div className="grid-info"><h5>PANELS</h5></div>
                    </div>
                  </div>
                  <div className="col-6 h-50">
                    <div className="grid-card-3d rounded-5 overflow-hidden h-100">
                       <img src={iMG6} alt="Worktops" className="img-fluid h-100 object-fit-cover w-100" />
                       <div className="grid-info"><h5>WORKTOPS</h5></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        :root {
          --brand-main: #C46A2B;
          --brand-dark: #5A2E10;
          --brand-soft: #FAF3EF;
          --bezier: cubic-bezier(0.65, 0, 0.35, 1);
        }

        .color-brand-dark { color: var(--brand-dark); }

        .reveal-skew, .reveal-zoom, .reveal-left, .reveal-right, .reveal-fade {
          opacity: 0;
          transition: transform 1.2s var(--bezier), opacity 1s ease;
        }
        .reveal-skew { transform: translateY(100px) skewY(4deg) scale(0.9); }
        .reveal-zoom { transform: scale(0.7) translateY(50px); }
        .reveal-left { transform: translateX(-150px); }
        .reveal-right { transform: translateX(150px); }
        .reveal-fade { transform: translateY(80px); }

        .is-visible {
          opacity: 1 !important;
          transform: translate(0) scale(1) skewY(0deg) !important;
        }

        .faq-modern-wrapper { display: flex; flex-direction: column; gap: 15px; }
        .faq-item-premium {
          background: #ffffff; border: 1px solid #f0f0f0; border-radius: 20px;
          overflow: hidden; transition: all 0.4s var(--bezier);
        }
        .faq-item-premium.is-active {
          border-color: var(--brand-main);
          box-shadow: 0 10px 30px rgba(196, 106, 43, 0.1);
          transform: translateY(-5px);
        }
        .faq-trigger {
          width: 100%; background: none; border: none; padding: 25px 20px;
          display: flex; justify-content: space-between; align-items: center; cursor: pointer;
        }
        .faq-title-group { display: flex; align-items: center; gap: 15px; }
        .faq-number {
          font-size: 0.75rem; font-weight: 800; color: var(--brand-main);
          background: var(--brand-soft); width: 32px; height: 32px;
          display: flex; align-items: center; justify-content: center; border-radius: 8px;
        }
        .faq-question { font-size: 1.05rem; font-weight: 700; color: var(--brand-dark); text-align: left; }
        .faq-plus-icon { position: relative; width: 16px; height: 16px; }
        .faq-plus-icon span { position: absolute; background: var(--brand-main); transition: 0.4s var(--bezier); }
        .faq-plus-icon span:first-child { width: 2px; height: 100%; left: 50%; transform: translateX(-50%); }
        .faq-plus-icon span:last-child { width: 100%; height: 2px; top: 50%; transform: translateY(-50%); }
        .faq-plus-icon.is-rotate span:first-child { transform: translateX(-50%) rotate(90deg); }
        .faq-content-pane { max-height: 0; overflow: hidden; transition: max-height 0.5s var(--bezier); }
        .faq-item-premium.is-active .faq-content-pane { max-height: 250px; }
        .faq-inner-text { padding: 0 20px 25px 67px; color: #666; line-height: 1.7; font-size: 0.95rem; }

        .image-decoration-box {
          position: absolute; bottom: -20px; right: -20px; width: 100%; height: 100%;
          border: 2px solid var(--brand-soft); border-radius: 3rem; z-index: 0;
        }

        .product-card-premium { perspective: 1000px; transition: 0.5s; }
        .image-wrapper { position: relative; }
        .card-badge {
          position: absolute; top: 15px; left: 15px; background: white;
          color: var(--brand-dark); width: 35px; height: 35px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: bold; font-size: 12px; z-index: 10; box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .main-img { transition: 1.2s var(--bezier); }
        .hover-mask {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(90, 46, 16, 0.6); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.5s;
        }
        .product-card-premium:hover .main-img { transform: scale(1.15) rotate(2deg); }
        .product-card-premium:hover .hover-mask { opacity: 1; }
        .content-line { width: 0; height: 2px; background: var(--brand-main); transition: 0.5s; }
        .product-card-premium:hover .content-line { width: 40px; }
        .mask-btn { color: white; border: 1px solid white; padding: 10px 25px; border-radius: 50px; font-weight: 600; }

        .premium-banner { background: var(--brand-dark); min-height: 450px; }
        .liquid-bg {
          position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
          background: radial-gradient(circle, #C46A2B 0%, transparent 60%);
          opacity: 0.4; animation: liquid-move 10s linear infinite;
        }
        @keyframes liquid-move { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .btn-modern {
          display: inline-block; padding: 15px 40px; background: white;
          color: var(--brand-dark); border-radius: 50px; font-weight: bold; text-decoration: none;
        }
        .banner-img-float { animation: float-slow 6s ease-in-out infinite; }
        @keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }

        .grid-card-3d { position: relative; cursor: pointer; transition: 0.6s var(--bezier); }
        .grid-info {
          position: absolute; bottom: 0; left: 0; width: 100%; padding: 30px;
          background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white;
          transform: translateY(20px); opacity: 0; transition: 0.5s;
        }
        .grid-card-3d:hover { transform: translateY(-10px); }
        .grid-card-3d:hover .grid-info { transform: translateY(0); opacity: 1; }
        .grid-card-3d img { transition: 1s ease; }
        .grid-card-3d:hover img { transform: scale(1.1); }

        .brand-divider { width: 60px; height: 5px; background: var(--brand-main); transform: scaleX(0); transition: 1s var(--bezier); }
        .is-visible .brand-divider { transform: scaleX(1); }
      `}</style>
    </div>
  );
};

export default Home;