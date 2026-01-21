import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Badge, Spinner } from "react-bootstrap";
import { BsArrowLeft, BsWhatsapp, BsTagFill, BsShieldCheck, BsTruck, BsStarFill, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import AOS from "aos";

import 'swiper/css';
import 'swiper/css/navigation';
import "aos/dist/aos.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  const colors = { 
    primary: "#D2691E",
    dark: "#1A1A1A", 
    whatsapp: "#25D366",
    white: "#FFFFFF",
    bgLight: "#FBFBFB"
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
    setLoading(true);
    
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);

        fetch(`https://fakestoreapi.com/products/category/${data.category}`)
          .then(res => res.json())
          .then(list => {
            setRelated(list.filter(item => item.id !== data.id));
            setLoading(false);
          });
      });
  }, [id]);

  if (loading) return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-white">
      <Spinner animation="grow" style={{ color: colors.primary }} />
    </div>
  );

  return (
    <div style={{ backgroundColor: colors.white, minHeight: "100vh", paddingTop: "120px" }}>
      <Container>
        
        <div className="mb-5" data-aos="fade-right">
          <button className="back-btn-luxury" onClick={() => navigate(-1)}>
            <BsArrowLeft className="me-2" /> BACK TO CATALOG
          </button>
        </div>

        <Row className="g-5 mb-5">
          <Col lg={6} data-aos="zoom-in">
            <div className="product-stage shadow-sm">
              <img src={product.image} alt={product.title} className="img-fluid main-img" />
              <div className="watermark">EXCLUSIVE</div>
            </div>
          </Col>

          <Col lg={6} data-aos="fade-left">
            <div className="product-content-wrapper">
              <div className="d-flex align-items-center mb-3">
                <Badge bg="none" className="px-3 py-2 rounded-0" style={{ border: `1px solid ${colors.primary}`, color: colors.primary, letterSpacing: '2px' }}>
                  LIMITED EDITION
                </Badge>
                <div className="ms-3 text-warning">
                  <BsStarFill className="me-1" /> 4.9
                </div>
              </div>

              <h1 className="display-5 fw-bold mb-3" style={{ color: colors.dark, fontFamily: 'serif' }}>{product.title}</h1>
              
              <div className="price-tag-luxury mb-4">
                <span className="price">{(product.price * 50).toLocaleString()}</span>
                <span className="currency">EGP</span>
              </div>

              <p className="description-text mb-5">
                {product.description}
              </p>

              <div className="trust-badges mb-5">
                <div className="trust-item"><BsShieldCheck color={colors.primary} /> Premium Quality</div>
                <div className="trust-item"><BsTruck color={colors.primary} /> Fast Secure Shipping</div>
              </div>

              <div className="order-actions">
                <button 
                  className="btn-order-whatsapp"
                  onClick={() => window.open(`https://wa.me/201234567890?text=Hello, I am interested in: ${product.title} (REF: ${product.id + 100})`, '_blank')}
                >
                  <div className="shine"></div>
                  <BsWhatsapp className="me-3 fs-5" />
                  ORDER ON WHATSAPP
                </button>
                
                <button className="btn-inquiry-modern mt-3">
                  <BsTagFill className="me-2" /> REQUEST MORE DETAILS
                </button>
              </div>
            </div>
          </Col>
        </Row>

        <div className="related-section mt-5 pt-5 border-top" data-aos="fade-up">
          <h4 className="fw-bold mb-4" style={{ letterSpacing: '1px' }}>YOU MAY ALSO LIKE</h4>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {related.map(item => (
              <SwiperSlide key={item.id}>
                <div className="related-item-card" onClick={() => navigate(`/product/${item.id}`)}>
                  <div className="img-box">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h6 className="mt-3 text-truncate fw-bold">{item.title}</h6>
                  <p style={{ color: colors.primary, fontWeight: '700' }}>{(item.price * 50).toLocaleString()} EGP</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </Container>

      <style>{`
        .back-btn-luxury {
          background: transparent; border: none; color: #888;
          font-weight: 700; font-size: 0.75rem; letter-spacing: 2px;
          transition: 0.3s;
        }
        .back-btn-luxury:hover { color: ${colors.primary}; transform: translateX(-5px); }

        .product-stage {
          background: #f9f9f9; border-radius: 4px; height: 550px;
          display: flex; align-items: center; justify-content: center;
          padding: 60px; position: relative; border: 1px solid #f0f0f0;
        }
        .main-img { max-height: 100%; transition: 0.6s ease; }
        .product-stage:hover .main-img { transform: scale(1.05); }
        .watermark {
          position: absolute; top: 20px; right: -20px; transform: rotate(90deg);
          font-size: 0.7rem; letter-spacing: 5px; color: #EEE; font-weight: 900;
        }

        .price-tag-luxury .price { font-size: 3rem; font-weight: 900; color: ${colors.primary}; }
        .price-tag-luxury .currency { font-size: 1.2rem; margin-left: 10px; color: #999; font-weight: 600; }

        .description-text { color: #666; font-size: 1.1rem; line-height: 1.8; max-width: 550px; }
        .trust-item { display: inline-flex; align-items: center; gap: 10px; margin-right: 30px; font-weight: 700; font-size: 0.8rem; color: #333; }

        .btn-order-whatsapp {
          width: 100%; padding: 22px; background: ${colors.dark}; color: white;
          border: none; font-weight: 800; letter-spacing: 2px; border-radius: 4px;
          position: relative; overflow: hidden; transition: 0.4s;
        }
        .btn-order-whatsapp:hover { background: ${colors.primary}; transform: translateY(-3px); }
        
        .btn-inquiry-modern {
          width: 100%; padding: 18px; background: transparent; border: 1px solid #EEE;
          color: #555; font-weight: 700; border-radius: 4px; transition: 0.3s;
        }
        .btn-inquiry-modern:hover { border-color: ${colors.dark}; color: ${colors.dark}; }

        .shine {
          position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: 0.5s;
        }
        .btn-order-whatsapp:hover .shine { left: 100%; transition: 0.6s; }

        .related-item-card { cursor: pointer; text-align: center; transition: 0.3s; padding: 15px; }
        .related-item-card .img-box {
          height: 200px; background: #F9F9F9; border-radius: 4px;
          display: flex; align-items: center; justify-content: center; padding: 20px;
        }
        .related-item-card img { max-height: 100%; max-width: 100%; transition: 0.4s; }
        .related-item-card:hover img { transform: scale(1.1); }
        .related-item-card:hover h6 { color: ${colors.primary}; }

        @media (max-width: 991px) {
          .product-stage { height: 400px; padding: 30px; }
          .price-tag-luxury .price { font-size: 2.2rem; }
        }
      `}</style>
    </div>
  );
}

export default ProductDetails;