import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  IoCloudDownloadOutline,
  IoDocumentTextOutline,
  IoFileTrayFullOutline,
} from "react-icons/io5";
import background from "../assets/img/Downloads/39252c43e745f3743a239e7be07ffc9a.jpg";

export default function Downloads() {
  const allItems = [
    {
      name: "Alvic Luxe",
      description:
        "High gloss finish lacquered surface, mirror effect, with excellent physical-mechanical properties.",
      link: "/web/content/141358?unique=de4e154864d74c228d5ea3ca209cfd057ee29ff4&download=true",
      category: "Lacquered Surface",
    },
    {
      name: "Alvic Zenit",
      description:
        "Supermatt lacquered surface with silk touch and high resistance, suitable for vertical and horizontal application.",
      link: "/web/content/141359?unique=5bb810d83f1569f99800ab9f91a23e7dbb958e63&download=true",
      category: "Supermatt",
    },
    {
      name: "Alvic Syncron",
      description:
        "A textured surface, in which the design and the finish complement each other to obtain surfaces with great naturalness.",
      link: "/web/content/141360?unique=adc8da8b40610078b73a5ddaeb8f68dedcf0011d&download=true",
      category: "Textured",
    },
    {
      name: "Kronospan",
      description:
        "Discover a variety of decors, available in almost every material and with various textures to push the limits of creativity.",
      link: "/web/content/141347?unique=7fc9403ea73e8bfb2f1667754e8f7ba407002182&download=true",
      featured: true,
    },
    {
      name: "Rocko",
      description:
        "Bathroom Walls Redefined. Rocko wall panels offer a waterproof and stylish alternative to traditional tiles.",
      link: "/web/content/141348?unique=cbdc99f7242f73e13d5571305035894d4d612461&download=true",
      category: "Waterproof",
    },
    {
      name: "Slimline",
      description:
        "Slim Line worktops are ideal for upmarket furniture and interior design. Improved resistance to abrasion and moisture.",
      link: "/web/content/141349?unique=aafda20ecc18f5ea0294159eec4696c682d73f3d&download=true",
      category: "Worktops",
    },
    {
      name: "Arkopa",
      description:
        "Arkopa Decorative Panels offer the opportunity to create tomorrow’s trends with wide color alternatives.",
      link: "/web/content/141361?unique=3c5ebb214f2ae036690eaf38b2d6791b0dca419a&download=true",
      featured: true,
    },
    {
      name: "Arkopa Dualuxe",
      description:
        "Modern and stylish look with a painted surface appearance combined with a smooth finish.",
      link: "/web/content/141362?unique=90d69dca70d93a10085773d1a652d8a53852e5d1&download=true",
      category: "Smooth Finish",
    },
    {
      name: "Arkopa Leather",
      description:
        "Our high quality leather surfaces add an elegant feel to your spaces with its silky touch.",
      link: "/web/content/141363?unique=67c329ee01ba1c80dd59c371e1e40f161a3a52e3&download=true",
      category: "Leather Texture",
    },
    {
      name: "Arkopa Nova",
      description:
        "Design freedom with the modern and unique texture of our Nova surface, complying with E1 quality standards.",
      link: "/web/content/141377?unique=6879f3d9434101afedd6bc355a76c1bbc932e366&download=true",
      category: "Nova Texture",
    },
    {
      name: "Arkopa Ressista Matt",
      description:
        "Increases the silky touch feeling and creates a fingerprint-proof, durable, and flawless aesthetic appearance.",
      link: "/web/content/141364?unique=44deec8f08c4366f676b1d75a001e8b75571ee18&download=true",
      category: "Anti-fingerprint",
    },
    {
      name: "Arkopa Acrylic",
      description:
        "Acrylic panels stand out with scratch-resistant surface technology and deep reflection of colors.",
      link: "/web/content/141365?unique=3926e47b7bade07157a6954a48efe97f20cec324&download=true",
      category: "Acrylic",
    },
    {
      name: "Virgo",
      description:
        "Innovative solutions that make your project stand out while maintaining a balance between originality and functionality.",
      link: "/web/content/141378?unique=af3deb1be41229061650bd6a7fe2e9ab145acea4&download=true",
      featured: true,
    },
    {
      name: "ASD",
      description:
        "Sustainable building materials and contemporary architectural solutions forged by experience and visionary management.",
      link: "/web/content/141415?unique=1184e2d88d2cdc8b644056f983c4cd5ea0d0959d&download=true",
      featured: true,
    },
    {
      name: "Wall panel Arkopa",
      description:
        "Create big differences with simple touches. Easy use with mounting kits and specially designed lock system.",
      link: "/web/content/141381?unique=63c5d80cbd47f0cf5b3c90757d1bca79c9add33e&download=true",
      category: "Wall Panel",
    },
    {
      name: "Accoustic",
      description:
        "Sound-absorbing dense felt structure to add visual richness to applications where you care about acoustic insulation.",
      link: "/web/content/141382?unique=369d13e74c055f925d9a8289249ce573559ce37c&download=true",
      category: "Acoustic",
    },
    {
      name: "Wall panel AGT",
      description:
        "Modern architectural and decorative elements used to enhance the aesthetic appeal of interior walls.",
      link: "/web/content/141384?unique=e81393cf88126485b9ef15f1053395fefd8a562b&download=true",
      category: "Decorative",
    },
    {
      name: "GTV",
      description:
        "GTV – Your Full-Spectrum Furniture & Lighting Partner. High-quality hardware and innovative solutions.",
      link: "/web/content/141417?unique=d0fd1fd4408db25713b0cae67c06483c5cd88066&download=true",
      featured: true,
    },
    {
      name: "AGT Dreamlam",
      description:
        "High-quality wood panels designed with advanced technology to combine durability with modern aesthetics.",
      link: "/web/content/141387?unique=3b8164a1da34fcddf1873df66bd3076230aa7aec&download=true",
      category: "Dreamlam",
    },
    {
      name: "AGT SupraMatt",
      description:
        "The secret to modern luxury! Silky smooth, matte surface that resists scratches and fingerprints.",
      link: "/web/content/141388?unique=31577ebc8f46f971f617c7edc0fa092ef8194275&download=true",
      category: "Supramatt",
    },
    {
      name: "Machines",
      description:
        "Wide range of edge banding and cutting machines that provide panels with an elegant look and high-quality finish.",
      link: "/web/content/159546?unique=e02e41e069344bdd73eef0d209ff69b14df432a5&download=true",
      category: "Equipment",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const downloadItemStyle = `
    .download-item {
      transition: all 0.3s ease;
      border-radius: 12px;
      padding: 1.5rem;
      border-bottom: 1px solid #eee;
    }
    .download-item:hover {
      background: #f8f9fa;
      transform: translateX(10px);
      border-left: 4px solid #FF7F50;
    }
    .download-btn {
      transition: all 0.3s ease;
      border-radius: 30px !important;
      padding: 8px 25px !important;
      font-weight: 600;
    }
    .download-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(255,127,80,0.3);
    }
    .featured-badge {
      font-size: 0.7rem;
      background: #FF7F50;
      color: white;
      padding: 2px 8px;
      border-radius: 10px;
      margin-left: 10px;
      text-transform: uppercase;
    }
  `;

  return (
    <section
      className="downloads-page"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <style>{downloadItemStyle}</style>

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${background})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></div>

      <div
        className="container py-5"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="bg-white shadow-lg overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <div className="p-5 text-center bg-light border-bottom">
                <div data-aos="fade-down">
                  <IoFileTrayFullOutline
                    size={50}
                    style={{ color: "#FF7F50" }}
                    className="mb-3"
                  />
                  <h1
                    className="fw-bold mb-3"
                    style={{ color: "#2d3436", letterSpacing: "-1px" }}
                  >
                    DOWNLOADS
                  </h1>
                  <p
                    className="text-muted mx-auto"
                    style={{ maxWidth: "600px", fontSize: "1.1rem" }}
                  >
                    Access our complete technical library. Download catalogues,
                    data sheets, and certificates for our high-end wood
                    products.
                  </p>
                </div>
              </div>

              <div className="p-4 p-md-5">
                <div
                  className="d-flex align-items-center mb-5"
                  data-aos="fade-right"
                >
                  <IoDocumentTextOutline
                    className="me-2 text-warning"
                    size={24}
                  />
                  <h3 className="m-0 fw-bold" style={{ color: "#FF7F50" }}>
                    All Catalogues
                  </h3>
                  <div
                    className="flex-grow-1 ms-3 border-top"
                    style={{ opacity: 0.2 }}
                  ></div>
                </div>

                <div className="download-list">
                  {allItems.map((item, index) => (
                    <div
                      className="download-item d-flex align-items-center flex-wrap"
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                    >
                      <div className="flex-grow-1 me-3 mb-3 mb-md-0">
                        <div className="d-flex align-items-center mb-1">
                          <h5
                            className="fw-bold mb-0"
                            style={{ color: "#2d3436" }}
                          >
                            {item.name}
                          </h5>
                          {item.featured && (
                            <span className="featured-badge">Featured</span>
                          )}
                          {item.category && (
                            <span className="ms-2 badge bg-light text-muted border fw-normal">
                              {item.category}
                            </span>
                          )}
                        </div>
                        <p
                          className="text-muted small mb-0"
                          style={{ maxWidth: "700px" }}
                        >
                          {item.description}
                        </p>
                      </div>

                      <div className="ms-auto">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn download-btn d-flex align-items-center"
                          style={{
                            backgroundColor: item.featured
                              ? "#FF7F50"
                              : "#f1f2f6",
                            color: item.featured ? "white" : "#2d3436",
                            border: "none",
                          }}
                        >
                          <IoCloudDownloadOutline className="me-2" size={18} />
                          Download
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-light p-4 text-center">
                <small className="text-muted">
                  © 2026 Wood. All digital assets are protected by copyright.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
