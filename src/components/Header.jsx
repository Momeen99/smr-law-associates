import React, { useState, useEffect } from "react";

export default function Header(){
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="container topbar">
        <div style={{display:"flex", alignItems:"center"}}>
          <div className="brand">
            <div className="logo">
              SMR
            </div>
            <div className="brand-text">
              <h1>SMR LAW ASSOCIATES</h1>
              <div className="subtitle">Adv. Syed Mujahid Pasha</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#consultation">Consultation</a>
          </nav>
        </div>

        <div className="top-actions">
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:"12px", color:"var(--text-muted)", marginBottom:"4px"}}>
              📍 K R Puram, Bengaluru
            </div>
            <a className="cta-phone" href="tel:9738483568">
              📞 Call: 9738483568
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
