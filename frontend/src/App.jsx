import React, { useEffect, useState } from "react";

// ASSETS
import logo from "./assets/logo.png";
import footerlogo from "./assets/footerlogo.png";
import partners from "./assets/partners.png";

import slide1 from "./assets/1.png";
import slide2 from "./assets/2.png";
import slide3 from "./assets/3.png";
import slide4 from "./assets/4.png";
import slide5 from "./assets/5.png";
import slide6 from "./assets/6.png";
import slide7 from "./assets/7.png";
import slide10 from "./assets/10.png";
import slide12 from "./assets/12.png";
import slide13 from "./assets/13.png";
import slide14 from "./assets/14.png";

const ecoNarrative = [
  {
    img: slide1,
    title: "Daily Functional Hydration",
    desc: "A new category of beverage merging natural electrolytes and prebiotic support with 100% glass packaging.",
  },
  {
    img: slide2,
    title: "Carbon Net-Zero Mission",
    desc: "Building a future with zero emissions and regenerative impact through biotechnology.",
  },
  {
    img: slide3,
    title: "Impact for Planet & People",
    desc: "Designing circular solutions that protect the environment while improving efficiency.",
  },
  {
    img: slide4,
    title: "Advanced Water Solutions",
    desc: "Intelligent hydration powered by purification and contaminant removal technologies.",
  },
  {
    img: slide5,
    title: "Sustainable Materials",
    desc: "Developing bio-based circular materials that transform industrial inputs into assets.",
  },
  {
    img: slide6,
    title: "Gut-Friendly Innovation",
    desc: "Harnessing coconut-water-derived electrolytes and prebiotic restoration.",
  },
  {
    img: slide7,
    title: "Zero-Waste Engineering",
    desc: "Achieving circularity where every material is reused and retained.",
  },
  {
    img: slide10,
    title: "TBI NIT Calicut Ecosystem",
    desc: "Incubated at Technology Business Incubator, NIT Calicut.",
  },
  {
    img: slide12,
    title: "Multidisciplinary Expertise",
    desc: "Experts in Material Science, Biotechnology, and Food Technology.",
  },
  {
    img: slide13,
    title: "Aligned with UN SDGs",
    desc: "Targeting Innovation, Responsible Production, and Clean Water.",
  },
  {
    img: slide14,
    title: "Hydration. Inside Out.",
    desc: "The NEIOX vision: a borderless circular manufacturing network.",
  },
];

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(".reveal-on-scroll")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [showIntro]);

  return (
    <>
      {/* INTRO */}

      <div
        className={`fog-wrapper ${showIntro ? "active" : "hidden"
          }`}
      >
        <div className="fog fog1"></div>
        <div className="fog fog2"></div>
      </div>

      {/* BACKGROUND */}

      <div className="nature-overlay">

        {[...Array(40)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="water-bubble"
            style={{
              left: `${(i * 2.7) % 100}%`,
              top: `${(i * 4.1) % 100}%`,
              animationDelay: `${i * 0.22}s`,
              animationDuration: `${10 + (i % 6)}s`,
            }}
          />
        ))}

        <div className="water-flow flow1"></div>
        <div className="water-flow flow2"></div>
        <div className="water-flow flow3"></div>

        {[...Array(18)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="light-particle"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}

        {[...Array(10)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="floating-orb"
            style={{
              left: `${i * 11}%`,
              top: `${(i * 8) % 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${18 + i}s`,
            }}
          />
        ))}

      </div>

      {/* HERO */}

      <section className="hero-section">

        <div className="hero-content">

          <img
            src={logo}
            alt="NEIOX"
            className="hero-logo"
          />

          <div className="hero-line"></div>

          <h1>
            Innovation Meets Sustainability
          </h1>

        </div>

      </section>

      {/* CONTENT */}

      <section className="content-stream">

        {ecoNarrative.map((item, index) => (

          <div
            key={index}
            className={`pillar-row reveal-on-scroll ${index % 2 !== 0 ? "reverse" : ""
              }`}
          >

            <div className="media-box">

              <img
                src={item.img}
                alt={item.title}
              />

            </div>

            <div className="text-box">

              <span className="pillar-tag">
                PILLAR {index + 1}
              </span>

              <h2>{item.title}</h2>

              <p>{item.desc}</p>

            </div>

          </div>

        ))}

      </section>

      {/* FOOTER */}

      <footer className="site-footer">

        <div className="footer-content">

          <div className="footer-logo-bar">

            <img
              src={footerlogo}
              alt="NEIOX"
              className="foot-logo-main"
            />

            <div className="logo-separator"></div>

            <img
              src={partners}
              alt="Partners"
              className="foot-logo-partners"
            />

          </div>

          <div className="footer-corporate-box">

            <div className="footer-top-row">

              <div>

                <span className="footer-mini-title">
                  CORPORATE CONTACT
                </span>

                <h2>
                  Inquiry & Collaborations
                </h2>

              </div>

              <a
                href="https://www.linkedin.com/company/neiox-eco-cycle/"
                target="_blank"
                rel="noreferrer"
                className="linkedin-btn"
              >
                Corporate Profile →
              </a>

            </div>

            <div className="corporate-grid">

              <div className="compact-panel">

                <div className="compact-title">
                  CONTACT
                </div>

                <div className="compact-row">
                  <span>Phone</span>
                  <strong>8943355515</strong>
                </div>

                <div className="compact-row">
                  <span>WhatsApp</span>
                  <strong>9400939955</strong>
                </div>

              </div>

              <div className="compact-panel">

                <div className="compact-title">
                  DIGITAL
                </div>

                <div className="compact-row">
                  <span>Email</span>
                  <strong>
                    neioxecocycle@gmail.com
                  </strong>
                </div>

                <div className="compact-row">
                  <span>Website</span>
                  <strong>
                    www.neioxecocycle.in
                  </strong>
                </div>

              </div>

              <div className="compact-panel">

                <div className="compact-title">
                  OFFICE
                </div>

                <p className="compact-office">

                  <strong>
                    NEIOX ECO CYCLE PVT LTD
                  </strong>

                  <br /><br />

                  Technology Business Incubator
                  <br />
                  NIT Calicut
                  <br />
                  Kozhikode, Kerala, India
                  <br />
                  PIN: 673601

                </p>

                <div className="mini-badge">
                  CO INCUBATED AT IIM-K LIVE
                </div>

              </div>

            </div>

          </div>

        </div>

      </footer>

      <style>{`

        body {
          margin: 0;
          overflow-x: hidden;
          font-family: Inter, sans-serif;
          background: #fff;
        }

        /* HERO */

        .hero-section {
          height: 100vh;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          background: white;

          position: relative;
          z-index: 2;
        }

        .hero-logo {
          width: 650px;
          max-width: 85%;
        }

        .hero-line {
          width: 120px;
          height: 4px;

          background: #10b981;

          margin: 25px auto;

          border-radius: 999px;
        }

        .hero-content h1 {
          letter-spacing: 10px;
          text-transform: uppercase;

          color: #065f46;

          font-size: 1rem;
        }

        /* CONTENT */

        .content-stream {
          padding: 100px 0;

          position: relative;
          z-index: 2;

          background:
            radial-gradient(
              circle at top left,
              rgba(37,99,235,0.18),
              transparent 35%
            ),

            radial-gradient(
              circle at bottom right,
              rgba(2,132,199,0.16),
              transparent 38%
            ),

            linear-gradient(
              180deg,
              #dbefff,
              #d3ebff,
              #d8efff,
              #e8f6ff
            );
        }

        .pillar-row {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 70px;

          padding: 90px 12%;
        }

        .pillar-row.reverse {
          flex-direction: row-reverse;
        }

        .reveal-on-scroll {
          opacity: 0;

          transform:
            translateY(60px)
            scale(0.96);

          transition:
            opacity 1.1s ease,
            transform 1.1s ease;
        }

        .reveal-on-scroll.is-visible {
          opacity: 1;

          transform:
            translateY(0)
            scale(1);
        }

        .media-box {
          flex: 1.2;
        }

        .media-box img {
          width: 100%;

          border-radius: 24px;

          box-shadow:
            0 20px 45px rgba(0,0,0,0.08);
        }

        /* TEXT BOX */

        .text-box {
          flex: 0.8;

          position: relative;

          padding: 34px 38px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.82),
              rgba(255,255,255,0.72)
            );

          border-radius: 22px;

          backdrop-filter: blur(16px);

          box-shadow:
            0 10px 30px rgba(0,0,0,0.06);

          overflow: hidden;
        }

        .text-box::before {
          content: "";

          position: absolute;

          left: 0;
          top: 18px;
          bottom: 18px;

          width: 8px;

          border-radius: 999px;

          background:
            linear-gradient(
              180deg,
              #10b981,
              #22c55e,
              #14b8a6
            );
        }

        .pillar-tag {
          color: #10b981;

          font-weight: 900;

          letter-spacing: 4px;

          font-size: 0.72rem;
        }

        .text-box h2 {
          font-size: 1.8rem;

          color: #064e3b;

          margin: 12px 0;
        }

        .text-box p {
          color: #166534;

          line-height: 1.75;

          font-size: 1rem;
        }

        /* FOOTER */

        .site-footer {
          background:
            linear-gradient(
              180deg,
              #052e2b,
              #031b1a
            );

          color: white;

          position: relative;
          z-index: 2;
        }

        .footer-content {
          padding: 90px 8%;
        }

        .footer-logo-bar {
          display: flex;

          justify-content: space-between;
          align-items: center;

          gap: 40px;

          padding: 28px 40px;

          margin-bottom: 35px;

          background:
            rgba(255,255,255,0.06);

          border-radius: 28px;
        }

        .logo-separator {
          width: 2px;
          height: 80px;

          background:
            rgba(255,255,255,0.2);
        }

        .foot-logo-main {
          width: 230px;
        }

        .foot-logo-partners {
          width: 100%;
          max-width: 500px;
        }

        .footer-corporate-box {
          background:
            rgba(255,255,255,0.04);

          border-radius: 34px;

          padding: 42px;
        }

        .footer-top-row {
          display: flex;

          justify-content: space-between;
          align-items: center;

          margin-bottom: 35px;
        }

        .footer-mini-title {
          color: #6ee7b7;

          letter-spacing: 3px;

          font-size: 0.8rem;

          font-weight: 800;
        }

        .footer-top-row h2 {
          font-size: 2rem;
        }

        .linkedin-btn {
          text-decoration: none;

          color: white;

          background:
            linear-gradient(
              90deg,
              #10b981,
              #14b8a6
            );

          padding: 12px 20px;

          border-radius: 999px;

          font-weight: 700;
        }

        .corporate-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr 1.2fr;

          gap: 22px;
        }

        .compact-panel {
          background:
            rgba(255,255,255,0.04);

          border-radius: 24px;

          padding: 26px;
        }

        .compact-title {
          color: #6ee7b7;

          font-size: 0.76rem;

          letter-spacing: 3px;

          font-weight: 800;

          margin-bottom: 20px;
        }

        .compact-row {
          display: flex;

          justify-content: space-between;

          padding: 12px 0;

          border-bottom:
            1px solid rgba(255,255,255,0.08);
        }

        .compact-row span {
          color: rgba(255,255,255,0.6);
        }

        .compact-office {
          line-height: 1.8;
        }

        .mini-badge {
          margin-top: 18px;

          display: inline-block;

          padding: 10px 16px;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              #10b981,
              #14b8a6
            );

          font-size: 0.78rem;

          font-weight: 700;
        }

        /* BACKGROUND ANIMATIONS */

        .nature-overlay {
          position: fixed;
          inset: 0;

          pointer-events: none;

          overflow: hidden;

          z-index: 0;
        }

        .water-bubble {
          position: absolute;

          width: 14px;
          height: 14px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle at 30% 30%,
              rgba(255,255,255,0.95),
              rgba(56,189,248,0.9)
            );

          border:
            1px solid rgba(255,255,255,0.45);

          box-shadow:
            0 0 16px rgba(56,189,248,0.35),
            0 0 32px rgba(56,189,248,0.18);

          animation:
            subtleBubble linear infinite;
        }

        @keyframes subtleBubble {

          0% {
            transform:
              translateY(120px)
              scale(0.35);

            opacity: 0;
          }

          15% {
            opacity: 0.35;
          }

          50% {
            opacity: 0.5;
          }

          100% {
            transform:
              translateY(-420px)
              scale(1.45);

            opacity: 0;
          }

        }

        .floating-orb {
          position: absolute;

          width: 260px;
          height: 260px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(16,185,129,0.18),
              rgba(56,189,248,0.12),
              transparent 72%
            );

          filter: blur(20px);

          opacity: 0.9;

          animation:
            floatingOrbMove linear infinite;
        }

        @keyframes floatingOrbMove {

          0% {
            transform:
              translateY(0px)
              translateX(0px);
          }

          50% {
            transform:
              translateY(-40px)
              translateX(30px);
          }

          100% {
            transform:
              translateY(0px)
              translateX(0px);
          }

        }

        @media (max-width: 1024px) {

          .pillar-row,
          .pillar-row.reverse {
            flex-direction: column;
            padding: 60px 6%;
          }

          .footer-logo-bar {
            flex-direction: column;
          }

          .corporate-grid {
            grid-template-columns: 1fr;
          }

        }

      `}</style>
    </>
  );
}

export default App;