import React from "react";
import { FaGavel, FaBalanceScale, FaFileContract, FaUsers, FaHome, FaHandshake } from "react-icons/fa";

const SERVICES = [
  { 
    icon: <FaGavel />, 
    title: "Civil Litigation", 
    desc: "Comprehensive representation in property disputes, contract enforcement, and civil suits with strategic case management." 
  },
  { 
    icon: <FaBalanceScale />, 
    title: "Criminal Defense", 
    desc: "Expert representation in criminal matters, bail applications, and legal defense strategies." 
  },
  { 
    icon: <FaUsers />, 
    title: "Family Law", 
    desc: "Professional handling of divorce, maintenance, child custody, and family mediation cases." 
  },
  { 
    icon: <FaFileContract />, 
    title: "Corporate Law", 
    desc: "Drafting legal documents, contract negotiations, and corporate legal advisory services." 
  },
  { 
    icon: <FaHome />, 
    title: "Property Law", 
    desc: "Expert guidance on property disputes, documentation, and real estate legal matters." 
  },
  { 
    icon: <FaHandshake />, 
    title: "Legal Consultation", 
    desc: "Professional legal opinions and consultation services for individuals and businesses." 
  },
];

export default function Services(){
  return (
    <section id="services" className="services-section">
      <h3 className="section-title">Our Practice Areas</h3>
      <div className="services-grid">
        {SERVICES.map((service, index) => (
          <div key={service.title} className="service-card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="service-icon">
              {service.icon}
            </div>
            <div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
