import React from "react";
import ChatAssistant from "./ChatAssistant";

export default function Hero(){
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-content fade-in-up">
        <div className="hero-text">
          <h2 id="hero-title">Expert Legal Counsel You Can Trust</h2>
          <p className="lead">
            SMR Law Associates — Led by Advocate Syed Mujahid Pasha. Providing strategic legal 
            solutions across civil, criminal, family, and corporate matters. Serving clients 
            throughout Bangalore with dedicated representation and clear, practical advice.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contact">
              📋 Request Free Consultation
            </a>
            <a className="btn btn-outline" href="tel:9738483568">
              📞 Emergency Call
            </a>
          </div>

          <div style={{marginTop:"32px", maxWidth:"600px"}}>
            <ChatAssistant compact />
          </div>
        </div>

        <aside className="attorney-card" aria-label="Attorney Profile">
          <img 
            className="attorney-photo" 
            alt="Advocate Syed Mujahid Pasha" 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500&auto=format&fit=crop" 
          />
          <div className="attorney-meta">
            <div className="name">Advocate Syed Mujahid Pasha</div>
            <div className="role">Principal Attorney • SMR Law Associates</div>
            <div className="bio">
              Extensive experience in litigation, property disputes, family law, and corporate 
              matters. Known for clear legal opinions and effective courtroom representation.
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

