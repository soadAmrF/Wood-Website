import React from "react";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import heroImg from "../assets/img/EGYPTWOOD.webp";

export default function Contact() {
  const brandColor = "#D2691E";
  const lightWood = "#fcfaf8";
  const darkBrown = "#333333";

  return (
    <div
      className="contact-page"
      style={{ paddingTop: "80px", backgroundColor: "#fff" }}
    >
      <section
        className="position-relative text-center py-5"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "350px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1
            className="fw-bold display-3 mb-2"
            style={{
              letterSpacing: "1px",
              textShadow: "2px 2px 15px rgba(0,0,0,0.4)",
            }}
          >
            Contact Us
          </h1>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: brandColor,
              margin: "0 auto",
              borderRadius: "2px",
            }}
          ></div>
        </div>
      </section>

      <section className="py-5 mt-lg-3">
        <div className="container">
          <div className="row g-5">

            <div className="col-lg-8">
              <h3 className="fw-bold mb-4" style={{ color: darkBrown }}>
                Send Us a Message
              </h3>
              <p
                className="mb-5 text-muted"
                style={{ lineHeight: "1.8", maxWidth: "600px" }}
              >
                Whether you're looking for custom furniture or have a technical
                inquiry, our team is ready to assist you. Fill out the form
                below.
              </p>

              <form id="contactus_form" onSubmit={(e) => e.preventDefault()}>
                <div className="row g-4">
                  {[
                    {
                      id: "name",
                      label: "Name *",
                      type: "text",
                      required: true,
                    },
                    {
                      id: "phone",
                      label: "Phone Number",
                      type: "tel",
                      required: false,
                    },
                    {
                      id: "email",
                      label: "Email *",
                      type: "email",
                      required: true,
                    },
                    {
                      id: "subject",
                      label: "Subject *",
                      type: "text",
                      required: true,
                    },
                  ].map((field) => (
                    <div className="col-md-6 d-flex flex-column" key={field.id}>
                      <label
                        className="fw-bold mb-2 small"
                        style={{ color: darkBrown }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        className="form-control custom-input shadow-sm"
                        name={field.id}
                        required={field.required}
                        placeholder={`Enter your ${field.id}...`}
                      />
                    </div>
                  ))}

                  <div className="col-12 d-flex flex-column">
                    <label
                      className="fw-bold mb-2 small"
                      style={{ color: darkBrown }}
                    >
                      Message *
                    </label>
                    <textarea
                      className="form-control custom-input shadow-sm"
                      name="description"
                      rows="5"
                      required
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <div className="col-12 text-md-start pt-3">
                    <button
                      type="submit"
                      className="btn btn-lg px-5 text-white fw-bold submit-btn"
                    >
                      SUBMIT MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-4">
              <div
                className="p-4 p-md-5 rounded-4 shadow-sm h-100"
                style={{
                  backgroundColor: lightWood,
                  border: `1px solid ${brandColor}15`,
                }}
              >
                <h4 className="fw-bold mb-4" style={{ color: brandColor }}>
                  Visit Our Showroom
                </h4>

                <ContactInfoItem
                  icon={<IoLocationOutline size={22} />}
                  text="Elsalam, Cairo, Egypt."
                  brandColor={brandColor}
                />
                <ContactInfoItem
                  icon={<IoLocationOutline size={22} />}
                  text="ddd, El Nozha, Cairo"
                  brandColor={brandColor}
                />
                <ContactInfoItem
                  icon={<IoCallOutline size={22} />}
                  text="+20 10 1234567"
                  brandColor={brandColor}
                />

                <div className="info-item d-flex align-items-center mt-2">
                  <div className="icon-box me-3" style={{ color: brandColor }}>
                    <IoMailOutline size={22} />
                  </div>
                  <p className="small mb-0">
                    <a
                      href="mailto:info@egyptwood.com"
                      className="text-decoration-none fw-bold"
                      style={{ color: brandColor }}
                    >
                      info@wood.com
                    </a>
                  </p>
                </div>

                <div className="mt-5 pt-4 border-top">
                  <h6 className="fw-bold mb-2" style={{ color: darkBrown }}>
                    Follow Us
                  </h6>
                  <p className="text-muted small">
                    Stay updated with our latest collections and wooden craft
                    news.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .custom-input {
          background-color: #ffffff !important;
          border: 1px solid #eee !important;
          border-radius: 12px !important;
          padding: 14px 18px;
          transition: 0.3s;
          font-size: 0.95rem;
        }
        .custom-input:focus {
          border-color: ${brandColor} !important;
          box-shadow: 0 8px 20px ${brandColor}15 !important;
          outline: none;
        }
        .icon-box {
          background: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          flex-shrink: 0;
        }
        .submit-btn {
          background-color: ${brandColor} !important;
          border-radius: 50px !important;
          padding: 14px 50px !important;
          transition: 0.4s;
          border: none;
          letter-spacing: 0.5px;
        }
        .submit-btn:hover {
          background-color: #b55a1a !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px ${brandColor}40 !important;
        }
        @media (max-width: 768px) {
          .display-3 { font-size: 2.5rem; }
          .submit-btn { width: 100%; }
        }
      `}</style>
    </div>
  );
}

function ContactInfoItem({ icon, text, brandColor }) {
  return (
    <div className="info-item d-flex mb-4">
      <div className="icon-box me-3" style={{ color: brandColor }}>
        {icon}
      </div>
      <p
        className="small mb-0 text-dark align-self-center"
        style={{ lineHeight: "1.6", fontWeight: "500" }}
      >
        {text}
      </p>
    </div>
  );
}
