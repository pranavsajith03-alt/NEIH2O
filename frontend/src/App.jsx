import React, { useEffect, useState, useRef } from "react";

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
import slide16 from "./assets/16.png";
import slide18 from "./assets/18.png";


const ecoNarrative = [
  {
    img: slide1,
    title: "Daily Functional Hydration",
    desc: "A new category of beverage merging natural electrolytes and prebiotic support with 100% glass packaging.",
  },
  {
    img: slide12,
    title: "Multidisciplinary Expertise",
    desc: "Experts in Material Science, Biotechnology, and Food Technology.",
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
    img: slide6,
    title: "Gut-Friendly Innovation",
    desc: "Harnessing coconut-water-derived electrolytes and prebiotic restoration.",
  },
  {
    img: slide16,
    title: "Scientific Mechanism",
    desc: "A scientifically engineered prebiotic hydration system designed to support gut microbiome balance, reduce inflammation, and improve overall wellness through functional bioactive compounds.",
  },
  {
    img: slide5,
    title: "Sustainable Materials",
    desc: "Developing bio-based circular materials that transform industrial inputs into assets.",
  },
  {
    img: slide10,
    title: "TBI NIT Calicut Ecosystem",
    desc: "Incubated at Technology Business Incubator, NIT Calicut.",
  },
  {
    img: slide18,
    title: "Business Model",
    desc: "A scalable subscription-driven wellness business model combining D2C sales, retail distribution and global expansion strategies for long-term recurring growth.",
  },
  {
    img: slide7,
    title: "Zero-Waste Engineering",
    desc: "Achieving circularity where every material is reused and retained.",
  },
  {
    img: slide14,
    title: "Hydration. Inside Out.",
    desc: "The NEIOX vision: a borderless circular manufacturing network.",
  },
  {
    img: slide13,
    title: "Aligned with UN SDGs",
    desc: "Targeting Innovation, Responsible Production, and Clean Water.",
  },
  {
    img: slide2,
    title: "Carbon Net-Zero Mission",
    desc: "Building a future with zero emissions and regenerative impact through biotechnology.",
  },
];

function App() {
  const [showIntro, setShowIntro] = useState(true);
  
  // Element references for the JS Motion Engine
  const alphaRef = useRef(null);
  const betaRef = useRef(null);
  const gammaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // BULLETPROOF JAVASCRIPT ANIMATION TICKER ENGINE
  useEffect(() => {
    let animationFrameId;
    let time = 0;

    const tick = () => {
      time += 0.0015; // Speed factor of the fluid motion

      // Smooth mathematical trigonometric calculation pathways
      const alphaX = Math.sin(time) * 40;
      const alphaY = Math.cos(time * 0.8) * 30;
      const alphaScale = 1 + Math.sin(time * 0.5) * 0.06;

      const betaX = Math.cos(time * 1.1) * -35;
      const betaY = Math.sin(time * 0.9) * 45;
      const betaScale = 1 + Math.cos(time * 0.4) * 0.08;

      const gammaX = Math.sin(time * 0.7) * 25;
      const gammaY = Math.cos(time * 1.2) * -25;

      // Directly force GPU translate3d updates through string mutations
      if (alphaRef.current) {
        alphaRef.current.style.transform = `translate3d(${alphaX}px, ${alphaY}px, 0) scale(${alphaScale})`;
      }
      if (betaRef.current) {
        betaRef.current.style.transform = `translate3d(${betaX}px, ${betaY}px, 0) scale(${betaScale})`;
      }
      if (gammaRef.current) {
        gammaRef.current.style.transform = `translate3d(${gammaX}px, ${gammaY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();
    return () => cancelAnimationFrame(animationFrameId);
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
      <div className={`fog-wrapper ${showIntro ? "active" : "hidden"}`}>
        <div className="fog fog1"></div>
        <div className="fog fog2"></div>
      </div>

      {/* JAVASCRIPT DRIVEN ULTRA-FLUID BACKGROUND INTERACTION LAYER */}
      <div className="nature-overlay">
        <div ref={alphaRef} className="fluid-wave wave-alpha"></div>
        <div ref={betaRef} className="fluid-wave wave-beta"></div>
        <div ref={gammaRef} className="fluid-wave wave-gamma"></div>
        <div className="glass-surface-glare"></div>
      </div>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <img src={logo} alt="NEIOX" className="hero-logo" />
          <div className="hero-line"></div>
          <h1>Innovation Meets Sustainability</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="content-stream">
        {ecoNarrative.map((item, index) => (
          <div
            key={index}
            className={`pillar-row reveal-on-scroll ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="media-box">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="text-box">
              <span className="pillar-tag">PILLAR {index + 1}</span>
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
            <img src={footerlogo} alt="NEIOX" className="foot-logo-main" />
            <div className="logo-separator"></div>
            <img src={partners} alt="Partners" className="foot-logo-partners" />
          </div>

          <div className="footer-corporate-box">
            <div className="footer-top-row">
              <div>
                <span className="footer-mini-title">CORPORATE CONTACT</span>
                <h2>Inquiry & Collaborations</h2>
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
                <div className="compact-title">CONTACT</div>
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
                <div className="compact-title">DIGITAL</div>
                <div className="compact-row">
                  <span>Email</span>
                  <strong>neioxecocycle@gmail.com</strong>
                </div>
                <div className="compact-row">
                  <span>Website</span>
                  <strong>www.neioxecocycle.in</strong>
                </div>
              </div>

              <div className="compact-panel">
                <div className="compact-title">OFFICE</div>
                <p className="compact-office">
                  <strong>NEIOX ECO CYCLE PVT LTD</strong>
                  <br /><br />
                  Technology Business Incubator
                  <br />
                  NIT Calicut
                  <br />
                  Kozhikode, Kerala, India
                  <br />
                  PIN: 673601
                </p>
                <div className="mini-badge">CO INCUBATED AT IIM-K LIVE</div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        html, body, #root {
          background: #d4f0fc !important;
          background-color: #d4f0fc !important;
          margin: 0;
          overflow-x: hidden;
          font-family: Inter, sans-serif;
        }

        /* HERO */
        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: transparent !important;
          position: relative;
          z-index: 3; 
        }

        .hero-logo {
          width: 650px;
          max-width: 85%;
        }

        .hero-line {
          width: 120px;
          height: 4px;
          background: #0ea5e9;
          margin: 25px auto;
          border-radius: 999px;
        }

        .hero-content h1 {
          letter-spacing: 10px;
          text-transform: uppercase;
          color: #0369a1;
          font-size: 1rem;
        }

        /* CONTENT STREAM */
        .content-stream {
          padding: 100px 0;
          position: relative;
          z-index: 2; 
          background: transparent !important;
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
          background: transparent !important;
        }

        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(60px) scale(0.96);
          transition: opacity 1.1s ease, transform 1.1s ease;
        }

        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .media-box {
          flex: 1.2;
        }

        .media-box img {
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 20px 45px rgba(14, 165, 233, 0.08);
        }

        /* TEXT CONTAINERS */
        .text-box {
          flex: 0.8;
          position: relative;
          padding: 34px 38px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(240, 249, 255, 0.88));
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 22px;
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          box-shadow: 0 15px 35px rgba(3, 105, 161, 0.04);
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
          background: linear-gradient(180deg, #0ea5e9, #38bdf8, #0284c7);
        }

        .pillar-tag {
          color: #0284c7;
          font-weight: 900;
          letter-spacing: 4px;
          font-size: 0.72rem;
        }

        .text-box h2 {
          font-size: 1.8rem;
          color: #0369a1;
          margin: 12px 0;
        }

        .text-box p {
          color: #0c4a6e;
          line-height: 1.75;
          font-size: 1rem;
        }

        /* FOOTER */
        .site-footer {
          background: linear-gradient(180deg, #072433, #041620);
          color: white;
          position: relative;
          z-index: 3; 
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
          background: rgba(255,255,255,0.05);
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .logo-separator {
          width: 2px;
          height: 80px;
          background: rgba(255,255,255,0.15);
        }

        .foot-logo-main {
          width: 230px;
        }

        .foot-logo-partners {
          width: 100%;
          max-width: 500px;
          object-fit: contain;
        }

        .footer-corporate-box {
          background: rgba(255,255,255,0.03);
          border-radius: 34px;
          padding: 42px;
          border: 1px solid rgba(255, 255, 255, 0.03);
        }

        .footer-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 35px;
        }

        .footer-mini-title {
          color: #38bdf8;
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
          background: linear-gradient(90deg, #0ea5e9, #0284c7);
          padding: 12px 20px;
          border-radius: 999px;
          font-weight: 700;
        }

        .corporate-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1.2fr;
          gap: 22px;
        }

        .compact-panel {
          background: rgba(255,255,255,0.03);
          border-radius: 24px;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.02);
        }

        .compact-title {
          color: #38bdf8;
          font-size: 0.76rem;
          letter-spacing: 3px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .compact-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .compact-row span {
          color: rgba(255,255,255,0.6);
        }

        .compact-office {
          line-height: 1.8;
          color: #e0f2fe;
        }

        .mini-badge {
          margin-top: 18px;
          display: inline-block;
          padding: 10px 16px;
          border-radius: 999px;
          background: linear-gradient(90deg, #0ea5e9, #0284c7);
          font-size: 0.78rem;
          font-weight: 700;
        }

        /* BACKGROUND ENGINE SPECIFICATIONS */
        .nature-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1; 
          background: linear-gradient(180deg, #cbeefa 0%, #e8f7fd 60%, #daf0fc 100%) !important;
        }

        .fluid-wave {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          mix-blend-mode: multiply;
          will-change: transform;
        }

        .wave-alpha {
          width: 80vw;
          height: 80vw;
          top: -15%;
          left: -10%;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.45) 0%, transparent 75%);
        }

        .wave-beta {
          width: 90vw;
          height: 90vw;
          bottom: -10%;
          right: -10%;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, transparent 75%);
        }

        .wave-gamma {
          width: 75vw;
          height: 75vw;
          top: 35%;
          left: 20%;
          background: radial-gradient(circle, rgba(125, 211, 252, 0.45) 0%, transparent 70%);
        }

        .glass-surface-glare {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, transparent 50%, rgba(224, 242, 254, 0.2) 100%);
        }

        @media (max-width: 1024px) {
          .pillar-row, .pillar-row.reverse {
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