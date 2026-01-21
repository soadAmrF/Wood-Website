import React, { useState, useEffect } from "react";
import { Container, Row, Col, Badge, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { 
  BsArrowRight, BsSearch, BsFilterLeft, 
  BsPlusLg, BsArrowUpRight 
} from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import AOS from "aos";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "aos/dist/aos.css";

function Products() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const colors = {
    primary: "#D2691E",
    dark: "#1A1A1A",
    cream: "#F9F6F2",
    white: "#FFFFFF",
    muted: "#888888"
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(apiProducts => {
        const organized = apiProducts.reduce((acc, product) => {
          const cat = product.category.charAt(0).toUpperCase() + product.category.slice(1);
          if (!acc[cat]) acc[cat] = { products: [] };
          acc[cat].products.push(product);
          return acc;
        }, {});
        setData(organized);
        setSelectedCategory(Object.keys(organized)[0]);
        setLoading(false);
      });
  }, []);

  const filtered = !data[selectedCategory] ? [] : data[selectedCategory].products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-white">
      <Spinner animation="grow" style={{ color: colors.primary }} />
    </div>
  );

  return (
    <div style={{ backgroundColor: colors.white, minHeight: "100vh", paddingTop: "120px" }}>
      
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <Badge bg="none" className="mb-2 px-3 py-2 rounded-pill" style={{ border: `1px solid ${colors.primary}`, color: colors.primary }}>
            EXCLUSIVE COLLECTION
          </Badge>
          <h1 className="fw-bold display-5" style={{ color: colors.dark }}>Luxury Catalog</h1>
          <p className="text-muted">Discover our handpicked premium selection</p>
        </div>

        <div className="mb-5" data-aos="zoom-in">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            className="rounded-4 pb-5"
          >
            {Object.values(data).flat()[0]?.products.slice(0, 5).map(p => (
              <SwiperSlide key={p.id}>
                <div className="featured-card shadow-sm" onClick={() => navigate(`/product/${p.id}`)}>
                  <img src={p.image} alt={p.title} />
                  <div className="price-tag">{p.price * 50} EGP</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Row className="mt-5">
          <Col lg={3} className="mb-4">
            <div className="sticky-sidebar p-4 border rounded-4 bg-white shadow-sm" data-aos="fade-right">
              <h5 className="fw-bold mb-4 d-flex align-items-center">
                <BsFilterLeft className="me-2" color={colors.primary} size={24} /> Filters
              </h5>
              
              <div className="category-stack">
                {Object.keys(data).map(cat => (
                  <div 
                    key={cat}
                    className={`custom-cat-link ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => { setSelectedCategory(cat); window.scrollTo({top: 400, behavior: 'smooth'}); }}
                  >
                    {cat}
                    <BsArrowUpRight className="icon" />
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-top">
                <div className="search-bar">
                  <BsSearch color={colors.primary} />
                  <input type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
              </div>
            </div>
          </Col>

          <Col lg={9}>
            <Row className="g-3 g-md-4">
              {filtered.map((p, index) => (
                <Col key={p.id} xs={12} sm={6} md={4} data-aos="fade-up" data-aos-delay={index * 50}>
                  <div className="product-item-v2 shadow-sm" onClick={() => navigate(`/product/${p.id}`)}>
                    <div className="image-wrapper">
                      <img src={p.image} alt={p.title} />
                      <div className="add-btn" style={{backgroundColor: colors.primary}}>
                        <BsPlusLg color="white" />
                      </div>
                    </div>
                    <div className="details p-3 text-center">
                      <h6 className="text-truncate fw-bold mb-2">{p.title}</h6>
                      <div className="price" style={{color: colors.primary}}>{(p.price * 50).toLocaleString()} EGP</div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .display-5 { font-size: 2rem; }
          .sticky-sidebar { position: static !important; margin-bottom: 30px; }
        }

        .featured-card {
          background: white; border-radius: 20px; height: 300px;
          display: flex; align-items: center; justify-content: center;
          padding: 30px; position: relative; cursor: pointer;
          border: 1px solid #f0f0f0; transition: 0.3s;
        }
        .featured-card img { max-height: 100%; max-width: 100%; object-fit: contain; }
        .price-tag {
          position: absolute; top: 15px; right: 15px;
          background: ${colors.primary}; color: white;
          padding: 5px 12px; border-radius: 10px; font-weight: bold; font-size: 0.8rem;
        }

        .custom-cat-link {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 18px; border-radius: 12px; cursor: pointer;
          margin-bottom: 8px; transition: 0.3s; font-weight: 500; color: #555;
        }
        .custom-cat-link:hover { background: ${colors.cream}; color: ${colors.primary}; }
        .custom-cat-link.active { background: ${colors.primary}; color: white; }
        .custom-cat-link .icon { opacity: 0; transition: 0.3s; }
        .custom-cat-link:hover .icon { opacity: 1; }

        .search-bar {
          display: flex; align-items: center; background: #f8f8f8;
          padding: 10px 15px; border-radius: 12px;
        }
        .search-bar input {
          border: none; background: transparent; margin-left: 10px;
          width: 100%; outline: none; font-size: 0.9rem;
        }

        .product-item-v2 {
          background: white; border-radius: 20px; overflow: hidden;
          transition: 0.4s; cursor: pointer; border: 1px solid #f9f9f9;
        }
        .product-item-v2:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(210, 105, 30, 0.1) !important;
          border-color: ${colors.primary}44;
        }
        .image-wrapper {
          height: 220px; background: #fcfcfc; display: flex;
          align-items: center; justify-content: center; padding: 25px;
          position: relative;
        }
        .image-wrapper img { max-height: 100%; max-width: 100%; object-fit: contain; transition: 0.5s; }
        .product-item-v2:hover img { transform: scale(1.1); }
        
        .add-btn {
          position: absolute; bottom: 15px; right: 15px;
          width: 35px; height: 35px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transform: translateY(10px); transition: 0.3s;
        }
        .product-item-v2:hover .add-btn { opacity: 1; transform: translateY(0); }
        
        .details h6 { font-size: 0.9rem; color: ${colors.dark}; }
        .details .price { font-weight: 800; font-size: 1.1rem; }
      `}</style>
    </div>
  );
}

export default Products;