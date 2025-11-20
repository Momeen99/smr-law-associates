import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaDirections } from "react-icons/fa";

export default function Contact(){
  return (
    <aside id="contact" className="contact-card fade-in-up">
      <h3>Contact & Visit</h3>

      <div className="contact-item">
        <FaMapMarkerAlt style={{color: "var(--primary-blue)"}} />
        <div>
          <strong>Office:</strong>
          <div style={{marginLeft: "8px", color: "var(--text-muted)"}}>
            K R Puram, Bangalore
          </div>
        </div>
      </div>
      
      <div className="contact-item">
        <FaPhone style={{color: "var(--primary-gold)"}} />
        <div>
          <strong>Phone:</strong>
          <a href="tel:9738483568" style={{marginLeft: "8px"}}>
            9738483568
          </a>
        </div>
      </div>
      
      <div className="contact-item">
        <FaEnvelope style={{color: "var(--accent-purple)"}} />
        <div>
          <strong>Email:</strong>
          <a href="mailto:info@smrlaw.in" style={{marginLeft: "8px"}}>
            info@smrlaw.in
          </a>
        </div>
      </div>
      
      <div className="contact-item">
        <FaClock style={{color: "var(--text-muted)"}} />
        <div>
          <strong>Hours:</strong>
          <span style={{marginLeft: "8px", color: "var(--text-muted)"}}>
            Mon-Sat: 9AM - 7PM
          </span>
        </div>
      </div>

      <div className="contact-actions">
        <a className="btn btn-primary" href="tel:9738483568">
          <FaPhone /> Call Now
        </a>
        <a className="btn btn-outline" href="#directions" style={{borderColor: "var(--text-muted)", color: "var(--text-muted)"}}>
          <FaDirections /> Get Directions
        </a>
      </div>

      <div className="map-placeholder">
        <div style={{textAlign: "center", zIndex: 2}}>
          <FaMapMarkerAlt size={32} style={{marginBottom: "8px"}} />
          <div>Office Location Map</div>
          <div style={{fontSize: "12px", opacity: 0.8, marginTop: "4px"}}>
            K R Puram, Bangalore
          </div>
        </div>
      </div>
    </aside>
  );
}
