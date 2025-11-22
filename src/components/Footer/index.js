import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../Images/footerlogo.png";
import './style.css';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // ✅ Form Submit Pattern (JS logic inside same file)
  const handleSubscribe = () => {
    if (!email) {
      setMsg("⚠️ Please enter an email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMsg("❌ Invalid email format.");
      return;
    }

    // Simulate API Response
    setTimeout(() => {
      setMsg("✅ Subscription successful!");
      setEmail("");
    }, 800);
  };

  return (
    <>
      {/* 🔶 Top Subscription Section */}
      <section
        className="py-5"
        style={{
          backgroundImage: "url('/src/Images/footrbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold">Subscribe to our Newsletter</h2>
          <p className="text-muted">Get latest updates weekly</p>

          <div className="d-flex justify-content-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control w-50 me-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="Eqval-btn" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>

          <p className="mt-2 text-danger fw-semibold">{msg}</p>
        </div>
      </section>

      {/* ✅ Main Footer */}
      <footer className="text-light pt-5 pb-4" style={{ background: "#111" }}>
        <div className="container">
          <div className="row">

            {/* Column 1: Logo & Text */}
            <div className="col-md-3">
              <img
                src={Logo}
                width="140"
                alt="footer logo"
              />
              <p className="mt-3 text-white-50">
                We deliver professional web development, SEO, and digital
                marketing services worldwide.
              </p>
            </div>

            {/* Column 2: Company */}
            <div className="col-md-3">
              <h5 className="fw-bold mb-3">Company</h5>
              <ul className="list-unstyled text-white">
                <li>About Us</li>
                <li>Projects</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="col-md-3">
              <h5 className="fw-bold mb-3">Services</h5>
              <ul className="list-unstyled text-white">
                <li>Web Development</li>
                <li>React / NextJS</li>
                <li>SEO Optimization</li>
                <li>Digital Marketing</li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="col-md-3">
              <h5 className="fw-bold mb-3">Contact</h5>
              <p className="text-white-50 mb-1">📞 +92 300 1234567</p>
              <p className="text-white-50 mb-1">📧 info@website.com</p>
              <p className="text-white-50">🌍 Lahore, Pakistan</p>
            </div>
          </div>

          {/* bottom line */}
          <hr className="border-secondary" />

          <p className="text-center text-white mb-0">
            © {new Date().getFullYear()} Copyright Ⓒ 2018 – 2025 Sportswear Manufacturing | Designed & Developed By Mega Solvent LLC
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
