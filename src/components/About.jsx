import React from "react";
import { FaAward, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about-section fade-in-up">
      <h3>About Advocate Syed Mujahid Pasha</h3>
      <p>
        Advocate Syed Mujahid Pasha leads SMR Law Associates with extensive experience 
        across civil, criminal, and corporate law. Our firm is committed to providing 
        pragmatic legal advice, clear documentation, and strong courtroom representation 
        tailored to each client's unique needs.
      </p>
      <p>
        We believe in building long-term relationships with our clients based on trust, 
        transparency, and exceptional legal service. Our approach combines traditional 
        legal expertise with modern strategies to achieve the best possible outcomes.
      </p>
      
      <div className="about-details">
        <div className="detail-item">
          <FaAward style={{color: "var(--primary-gold)"}} />
          <div>
            <strong>Experience</strong>
            <div style={{fontSize: "14px", color: "var(--text-muted)"}}>Years of Practice</div>
          </div>
        </div>
        <div className="detail-item">
          <FaMapMarkerAlt style={{color: "var(--primary-blue)"}} />
          <div>
            <strong>Office</strong>
            <div style={{fontSize: "14px", color: "var(--text-muted)"}}>K R Puram, Bangalore</div>
          </div>
        </div>
        <div className="detail-item">
          <FaPhone style={{color: "var(--accent-purple)"}} />
          <div>
            <strong>Contact</strong>
            <div style={{fontSize: "14px", color: "var(--text-muted)"}}>9738483568</div>
          </div>
        </div>
        <div className="detail-item">
          <FaClock style={{color: "var(--primary-gold)"}} />
          <div>
            <strong>Availability</strong>
            <div style={{fontSize: "14px", color: "var(--text-muted)"}}>Mon - Sat, 9AM - 7PM</div>
          </div>
        </div>
      </div>
    </section>
  );
}
