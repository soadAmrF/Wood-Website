import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/img/About/our-vision.png.webp";
import img2 from "../assets/img/About/OUR-MISSION.webp";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const buttonStyle = {
    padding: "12px 30px",
    borderRadius: "30px",
    fontWeight: 600,
    textDecoration: "none",
    transition: "0.3s all ease",
    display: "inline-block",
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: "14px",
    letterSpacing: "1px",
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <section
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 1,
          }}
        ></div>

        <iframe
          src="https://www.youtube.com/embed/ENSjcy3eh8U?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playsinline=1&playlist=ENSjcy3eh8U"
          title="Background video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          style={{
            width: "100vw",
            height: "56.25vw",
            minHeight: "100vh",
            minWidth: "177.77vh",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
            color: "#fff",
            padding: "0 20px",
          }}
        >
          <h1
            data-aos="fade-down"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              textShadow: "0 4px 15px rgba(0,0,0,0.5)",
              marginBottom: "15px",
            }}
          >
            Leading The Future
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              fontWeight: 400,
              marginBottom: "40px",
              maxWidth: "700px",
            }}
          >
            Revolutionizing the wood industry through innovation, strategic
            global partnerships, and sustainable excellence.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a
              data-aos="zoom-in"
              data-aos-delay="400"
              href="/Products"
              style={{
                ...buttonStyle,
                backgroundColor: "#5C3A21",
                color: "#FFA500",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Our Portfolio
            </a>

            <a
              data-aos="zoom-in"
              data-aos-delay="500"
              href="/Contact"
              style={{
                ...buttonStyle,
                border: "2px solid #FFA500",
                color: "#FFA500",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#FFA500";
                e.target.style.color = "#5C3A21";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#FFA500";
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#fff", padding: "100px 0" }}>
        <div
          className="container"
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <div
            data-aos="fade-right"
            style={{ flex: "1 1 500px", padding: "20px" }}
          >
            <img
              src={img1}
              alt="Vision"
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            />
          </div>
          <div
            data-aos="fade-left"
            style={{ flex: "1 1 400px", padding: "20px" }}
          >
            <span
              style={{
                color: "#5C3A21",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Our Vision
            </span>
            <h2 style={{ fontSize: "2.5rem", margin: "15px 0", color: "#222" }}>
              Redefining Spaces Globally
            </h2>
            <p
              style={{ color: "#666", lineHeight: "1.8", marginBottom: "30px" }}
            >
              To be the premier choice for high-end wood products, recognized
              for our innovation, sustainability, and ability to inspire
              architects and designers worldwide.
            </p>
            <button
              style={{
                ...buttonStyle,
                backgroundColor: "#5C3A21",
                color: "#FFA500",
                border: "none",
              }}
            >
              Read Success Stories
            </button>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#0a1221",
          padding: "100px 0",
          color: "#fff",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap-reverse",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <div
            data-aos="fade-right"
            style={{ flex: "1 1 400px", padding: "20px" }}
          >
            <span
              style={{
                color: "#FFA500",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Our Mission
            </span>
            <h2 style={{ fontSize: "2.5rem", margin: "15px 0" }}>
              Inspiring Creativity & Durability
            </h2>
            <p
              style={{ color: "#ccc", lineHeight: "1.8", marginBottom: "30px" }}
            >
              We provide innovative, high-quality wood solutions that combine
              aesthetic beauty with functional longevity, ensuring every project
              stands the test of time.
            </p>
            <button
              style={{
                ...buttonStyle,
                backgroundColor: "#FFA500",
                color: "#0a1221",
                border: "none",
              }}
            >
              Our Values
            </button>
          </div>
          <div
            data-aos="fade-left"
            style={{ flex: "1 1 500px", padding: "20px" }}
          >
            <img
              src={img2}
              alt="Mission"
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0", backgroundColor: "#f9f9f9" }}>
        <div
          className="container"
          style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              data-aos="fade-up"
              style={{ fontSize: "2.8rem", color: "#5C3A21" }}
            >
              Our Journey
            </h2>
            <p data-aos="fade-up" style={{ color: "#777" }}>
              A legacy of growth and excellence since 2001
            </p>
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "9px",
                top: 0,
                bottom: 0,
                width: "2px",
                backgroundColor: "#5C3A21",
                opacity: 0.2,
              }}
            ></div>

            {[
              {
                year: "2001",
                title: "Establishment",
                desc: "Egypt Wood Company was founded to pioneer natural wood imports.",
              },
              {
                year: "2019",
                title: "Strategic Expansion",
                desc: "Joined the wood network and launched exclusive edge banding lines.",
              },
              {
                year: "2020",
                title: "Technology Integration",
                desc: "Collaborated with wood for advanced manufacturing technology.",
              },
              {
                year: "2021",
                title: "ASD Laminate",
                desc: "Secured exclusive distribution for high-pressure laminates (HPL).",
              },
              {
                year: "2022",
                title: "Global Strengthening",
                desc: "Partnered with A & V to diversify board collections.",
              },
              {
                year: "2023",
                title: "Premium Accessories",
                desc: "Launched partnership with wood for luxury hardware & fittings.",
              },
              {
                year: "2024",
                title: "Excellence",
                desc: "Became the exclusive agent for wood in Egypt.",
              },
              {
                year: "2025",
                title: "Exclusive",
                desc: "Solidified market leadership as the exclusive German wood partner.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                style={{
                  display: "flex",
                  gap: "30px",
                  marginBottom: "50px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#5C3A21",
                    flexShrink: 0,
                    zIndex: 2,
                    border: "4px solid #fff",
                    boxShadow: "0 0 0 3px rgba(92,58,33,0.2)",
                  }}
                ></div>

                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "25px",
                    borderRadius: "15px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                    flex: 1,
                    borderLeft: "4px solid #FFA500",
                    transition: "0.3s transform",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateX(10px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateX(0)")
                  }
                >
                  <span
                    style={{
                      fontWeight: 800,
                      color: "#FFA500",
                      fontSize: "1.2rem",
                      display: "block",
                      marginBottom: "5px",
                    }}
                  >
                    {item.year}
                  </span>
                  <h4
                    style={{
                      margin: "0 0 10px 0",
                      color: "#333",
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ margin: 0, color: "#666", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
