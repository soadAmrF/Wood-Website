import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import img1 from "../assets/img/Home/wwood2.webp";
import img2 from "../assets/img/Home/Wodoodporna-plyta-scienna-Rocko-Concrete-R109-PT-280x123-3.webp";
import img3 from "../assets/img/Home/slimline.webp";
import img4 from "../assets/img/Home/virgo.webp";
import img5 from "../assets/img/Home/Untitled-6.png";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Discover the new generation 3.0 of Zenit",
      subtitle:
        "ALVIC presents the new generation 3.0 of Zenit by Alvicour supermatt lacquered surface with antifingerprint and silk touch arrives with technological innovations.",
      img: img1,
    },
    {
      id: 2,
      title: "ROCKO",
      subtitle:
        "Rocko Tiles patterns are digitally printed and reflect each material in the smallest detail.",
      img: img2,
    },
    {
      id: 3,
      title: "Slim Line",
      subtitle:
        "Slim Line boards, 12 mm thick, are resistant to wear and moisture.",
      img: img3,
    },
    {
      id: 4,
      title: "Virgo HPL sheets",
      subtitle:
        "Combine high quality with modern design for interior and exterior applications.",
      img: img4,
    },
    {
      id: 5,
      title: "Innovation and design",
      subtitle: "Creativity and originality are at the core of who we are.",
      img: img5,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".bg-image").forEach((el) => {
        el.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="bg-image"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="bg-overlay"></div>
            </div>

            <div className="content-wrapper">
              <div className="text-box">
                <h2>{slide.subtitle}</h2>
                <h1>{slide.title}</h1>
                <a href="/Products" className="shop-now-btn">
                  SHOP NOW
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div ref={prevRef} className="nav-button prev-arrow">
          ❮
        </div>
        <div ref={nextRef} className="nav-button next-arrow">
          ❯
        </div>

        <div className="pagination-lines">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`line ${activeIndex === index ? "active" : ""}`}
              onClick={() =>
                document.querySelector(".swiper")?.swiper.slideToLoop(index)
              }
            />
          ))}
        </div>
      </Swiper>

      <style>{`
        .hero-section {
          height: 100vh;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .swiper-slide {
          height: 100vh;
          position: relative;
        }

        .bg-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          z-index: 1;
          transition: transform 0.2s ease-out;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
        }

        .content-wrapper {
          position: relative;
          z-index: 3;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
        }

        .text-box {
          max-width: 900px;
          text-align: center;
          color: #fff;
          animation: fadeUp 1s ease;
        }

        .text-box h2 {
          font-size: 1rem;
          letter-spacing: 3px;
          color: #8B4513;
          margin-bottom: 15px;
        }

        .text-box h1 {
          font-size: 4.5rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 25px;
        }

        .shop-now-btn {
          display: inline-block;
          padding: 14px 40px;
          background: #8B4513;
          color: #fff;
          text-decoration: none;
          font-weight: 700;
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: 0.3s;
        }

        .nav-button:hover {
          background: #8B4513;
        }

        .prev-arrow { left: 40px; }
        .next-arrow { right: 40px; }

        /* Pagination Lines */
        .pagination-lines {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .line {
          width: 40px;
          height: 3px;
          background: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: 0.4s;
        }

        .line.active {
          width: 65px;
          background: #8B4513;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 992px) {
          .text-box h1 {
            font-size: 2.5rem;
          }
          .nav-button {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
