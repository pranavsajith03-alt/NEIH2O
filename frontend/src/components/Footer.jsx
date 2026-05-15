import { useEffect, useState } from "react";

// Asset Imports
import logo from "./assets/logo.png";
import partners from "./assets/partners.png";
import slide1 from "./assets/1.png";
import slide2 from "./assets/2.png";
import slide3 from "./assets/3.png";
import slide4 from "./assets/4.png";
import slide5 from "./assets/5.png";
import slide6 from "./assets/6.png";
import slide7 from "./assets/7.png";
import slide10 from "./assets/10.png";
import slide11 from "./assets/11.png";
import slide12 from "./assets/12.png";
import slide13 from "./assets/13.png";
import slide14 from "./assets/14.png";

const ecoNarrative = [
  {
    img: slide1,
    title: "The Circular Imperative",
    desc: "A fundamental shift from linear 'Take-Make-Waste' models toward a regenerative framework that treats industrial byproducts as high-value assets."
  },
  {
    img: slide2,
    title: "Predictive Asset Lifecycle",
    desc: "Deploying digital twins and IoT intelligence to monitor structural health, ensuring infrastructure longevity and preventing resource waste."
  },
  {
    img: slide3,
    title: "Integrated Biophilic Design",
    desc: "Synthesizing industrial architecture with biological systems to create carbon-absorbing urban landscapes that heal their own environment."
  },
  {
    img: slide4,
    title: "Advanced Aqueous Recovery",
    desc: "Proprietary hydro-filtration protocols that extract mineral nutrients and pollutants from industrial runoff, restoring water to potable quality."
  },
  {
    img: slide5,
    title: "Thermodynamic Grid Cascading",
    desc: "Capturing low-grade thermodynamic waste and upcycling it into community energy streams for district heating and decentralized power."
  },
  {
    img: slide6,
    title: "AI-Enabled Material Triage",
    desc: "Neural-network-driven optical sorting that performs real-time multi-spectral analysis to segregate complex waste with 99.9% accuracy."
  },
  {
    img: slide7,
    title: "The Zero-Bypass Objective",
    desc: "Our engineering gold standard: Achieving 100% material retention within the value chain to effectively eliminate the concept of industrial refuse."
  },
  {
    img: slide10,
    title: "Institutional Incubation",
    desc: "Leveraging the specialized ecosystems at TBI NIT Calicut and IIM-K LIVE to accelerate technological validation and strategic market entry."
  },
  {
    img: slide11,
    title: "ESG Operational Advisory",
    desc: "Translating board-level net-zero targets into actionable operational roadmaps that modernize existing industrial facilities."
  },
  {
    img: slide12,
    title: "Traceability & Chain of Custody",
    desc: "Blockchain-backed logistics providing an immutable record of circularity, verifying the ethical origin and destination of every resource."
  },
  {
    img: slide13,
    title: "Science-Based KPIs",
    desc: "Moving beyond traditional accounting to quantify real-world ecosystem restoration, biological gain, and net carbon sequestration."
  },
  {
    img: slide14,
    title: "Global Scale Blueprint",
    desc: "The NEIOX vision for a borderless circular network, standardizing sustainable industrial protocols across global manufacturing hubs."
  },
];

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));
    return () => revealElements.forEach((el) => observer.unobserve(el));
  }, [showIntro]);

  return (
    <>
      {/* --- ATMOSPHERIC FOG INTRO --- */}
      <div className={`intro-mist ${showIntro ? "active" : "clear"}`}>
        <div className="mist-layer m1"></div>
        <div className="mist-layer m2"></div>
      </div>

      <div className="main-site">
        {/* GLOBAL NATURE DECORATIONS (Background Layer) */}
        <div className="nature-master-overlay">
          <div className="droplets">
            {[...Array(8)].map((_, i) => (
              <div key={`drop-${i}`} className="drop"></div>
            ))}
          </div>
          <div className="leaves">
            {[...Array(10)].map((_, i) => (
              <div
                key={`leaf-${i}`}
                className={`leaf leaf-type-${(i % 3) + 1} leaf-pos-${i + 1}`}
              ></div>
            ))}
          </div>
        </div>

        {/* --- HERO SECTION --- */}
        <section className="hero">
          <div className="hero-content">
            <img src={logo} alt="NEIOX Logo" className="hero-logo-main" />
            <div className="hero-divider"></div>
            <p className="hero-tagline">Innovation Meets Sustainability</p>
          </div>
        </section>

        {/* --- DYNAMIC ECO STREAM --- */}
        <div className="eco-stream">
          <div className="growth-line"></div>
          {ecoNarrative.map((item, index) => (
            <section
              key={`pillar-${index}`}
              className={`pillar-section reveal-on-scroll ${index % 2 === 0 ? "left-align" : "right-align"}`}
            >
              <div className="visual-field">
                <img src={item.img} alt={item.title} className="native-integrated-img" />
              </div>
              <div className="content-field">
                <span className="section-number">PILLAR {index + 1}</span>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <div className="section-vignette"></div>
              </div>
            </section>
          ))}
        </div>

        {/* --- FOOTER: ANIMATED WAVE TRANSITION --- */}
        <footer className="footer-corporate">
          <div className="footer-top-wave">
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(1, 28, 25, 0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(1, 28, 25, 0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(1, 28, 25, 0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#011c19" />
              </g>
            </svg>
          </div>

          <div className="footer-body">
            <div className="footer-logo-header">
              <img src={logo} alt="NEIOX Logo" className="f-logo" />
              <div className="partners-branding">
                <p>Official Incubation & Ecosystem Partners</p>
                <img src={partners} alt="Institutional Partners" className="f-partners" />
              </div>
            </div>

            <div className="footer-grid">
              <div className="f-col">
                <h4>Registered HQ</h4>
                <p><strong>NEIOX ECO CYCLE PVT LTD</strong></p>
                <p>Technology Business Incubator (TBI)</p>
                <p>National Institute of Technology Calicut</p>
                <p>NIT Campus PO, Kozhikode</p>
                <p>Kerala, India - 673601</p>
              </div>

              <div className="f-col">
                <h4>Direct Contact</h4>
                <p><strong>General inquiries:</strong> reachout@neiox.eco</p>
                <p><strong>Partnerships:</strong> strategy@neiox.eco</p>
                <p><strong>Hotline 1:</strong> +91 89433 55515</p>
                <p><strong>Hotline 2:</strong> +91 94009 39955</p>
                <div className="social-cta">
                  <a href="https://linkedin.com/company/neiox-eco-cycle" target="_blank" rel="noreferrer">Corporate Profile</a>
                </div>
              </div>

              <div className="f-col">
                <h4>Affiliations</h4>
                <div className="accred-box">
                  <p>TBI NIT Calicut</p>
                  <div className="v-divider"></div>
                  <p>IIM-K LIVE</p>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; 2026 NEIOX Eco Cycle. Innovation Meets Sustainability.</p>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        body { margin: 0; padding: 0; background: #fff; font-family: 'Inter', sans-serif; color: #1a202c; overflow-x: hidden; }
        .reveal-on-scroll { opacity: 0; transform: translateY(40px); transition: all 1.3s cubic-bezier(0.2, 1, 0.3, 1); }
        .reveal-on-scroll.is-visible { opacity: 1; transform: translateY(0); }

        .intro-mist { position: fixed; inset: 0; z-index: 9999; background: #fff; transition: 2s ease-in-out; }
        .intro-mist.clear { opacity: 0; pointer-events: none; }
        .mist-layer { position: absolute; inset: -50%; background: radial-gradient(circle, #f0fdf4 0%, #ffffff 70%); filter: blur(60px); }
        .m1 { animation: drift 10s infinite alternate; opacity: 0.8; }
        .m2 { animation: drift 15s infinite alternate-reverse; opacity: 0.5; left: -10%; }
        @keyframes drift { from { transform: translate(-5%, -5%); } to { transform: translate(5%, 5%); } }

        .hero { height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; z-index: 10; }
        .hero-logo-main { width: 450px; max-width: 80%; }
        .hero-divider { width: 60px; height: 1px; background: #10b981; margin: 30px auto; }
        .hero-tagline { font-size: 0.9rem; letter-spacing: 8px; text-transform: uppercase; color: #0f766e; }

        .eco-stream { 
            position: relative; 
            padding-top: 100px; 
            background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(240,253,244,0.7) 50%, rgba(224,242,254,0.7) 100%); 
            background-size: 400% 400%;
            animation: bgMove 20s infinite alternate;
            z-index: 5;
        }
        @keyframes bgMove { 0% { background-position: 0% 0%; } 100% { background-position: 100% 100%; } }

        .pillar-section { display: flex; align-items: center; justify-content: center; min-height: 85vh; padding: 60px 0; }
        .left-align { flex-direction: row; }
        .right-align { flex-direction: row-reverse; }
        .visual-field { flex: 1.4; padding: 0 2%; }
        .native-integrated-img { width: 100%; border-radius: 12px; box-shadow: 0 30px 60px rgba(0,0,0,0.1); }
        
        .content-field { 
            flex: 1; padding: 50px; margin: 0 4%; background: rgba(255, 255, 255, 0.5); 
            backdrop-filter: blur(15px); border-radius: 30px; border: 1px solid rgba(255,255,255,0.6);
        }
        .content-field h2 { font-size: 2.4rem; color: #064e3b; margin: 15px 0; font-weight: 800; line-height: 1.1; }
        .content-field p { font-size: 1.1rem; color: #4a5568; line-height: 1.8; }
        .section-number { font-size: 0.75rem; font-weight: 900; color: #10b981; letter-spacing: 4px; }

        .footer-corporate { background: transparent; position: relative; z-index: 20; }
        .waves { width: 100%; height: 12vh; min-height: 100px; margin-bottom: -5px; }
        .parallax > use { animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite; }
        .parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
        .parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
        .parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
        .parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }
        @keyframes move-forever { 0% { transform: translate3d(-90px,0,0); } 100% { transform: translate3d(85px,0,0); } }

        .footer-body { background: #011c19; color: #ccfbf1; padding: 80px 10%; }
        .footer-logo-header { display: flex; justify-content: space-between; align-items: center; background: #fff; padding: 40px; border-radius: 50px; margin-bottom: 80px; }
        .f-logo { height: 65px; }
        .f-partners { height: 55px; }

        .nature-master-overlay { position: fixed; inset: 0; pointer-events: none; z-index: 1; opacity: 0.5; }
        .drop { position: absolute; width: 8px; height: 8px; background: rgba(59,130,246,0.15); border-radius: 50%; bottom: -20px; animation: rise linear infinite; }
        @keyframes rise { from { transform: translateY(0); opacity: 0; } 20% { opacity: 0.5; } to { transform: translateY(-120vh); opacity: 0; } }
        .drop:nth-child(1) { left: 10%; animation-duration: 7s; }
        .drop:nth-child(2) { left: 40%; animation-duration: 11s; }
        .drop:nth-child(3) { left: 70%; animation-duration: 9s; }

        .leaf { position: absolute; top: -100px; animation: falling linear infinite, sway ease-in-out infinite; }
        .leaf-type-1 { width: 20px; height: 45px; background: linear-gradient(#22c55e, #166534); border-radius: 100% 0; }
        .leaf-type-2 { width: 30px; height: 30px; background: linear-gradient(#4ade80, #15803d); border-radius: 50% 50% 0 50%; }
        .leaf-type-3 { width: 25px; height: 40px; background: linear-gradient(#10b981, #064e3b); border-radius: 0 50% 50% 50%; }
        
        .leaf-pos-1 { left: 5%; animation-duration: 14s, 5s; }
        .leaf-pos-2 { left: 25%; animation-duration: 18s, 4s; }
        .leaf-pos-3 { left: 50%; animation-duration: 13s, 6s; }
        .leaf-pos-4 { left: 75%; animation-duration: 20s, 5s; }
        .leaf-pos-5 { left: 90%; animation-duration: 15s, 4.5s; }

        @keyframes falling { 0% { transform: translateY(-100px) rotate(0deg); } 100% { transform: translateY(120vh) rotate(360deg); } }
        @keyframes sway { 0%, 100% { margin-left: 0; } 50% { margin-left: 60px; } }

        @media (max-width: 1024px) {
            .pillar-section { flex-direction: column !important; }
            .content-field { width: 90%; padding: 40px; margin-top: 30px; }
            .footer-logo-header { flex-direction: column; gap: 30px; text-align: center; }
        }
      `}</style>
    </>
  );
}

export default App;