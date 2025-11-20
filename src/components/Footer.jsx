import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="brand">
          <div className="logo" style={{background: "rgba(255,255,255,0.1)"}}>
            SMR
          </div>
          <div>
            <h1>SMR LAW ASSOCIATES</h1>
            <div style={{fontSize:"12px", color:"rgba(255,255,255,0.8)"}}>
              Adv. Syed Mujahid Pasha
            </div>
          </div>
        </div>
        
        <div className="footer-info">
          <div>© {new Date().getFullYear()} SMR LAW ASSOCIATES</div>
          <div style={{marginTop: "4px", fontSize: "14px"}}>
            K R Puram, Bangalore • <a href="tel:9738483568">9738483568</a>
          </div>
          <div style={{marginTop: "8px", fontSize: "12px", opacity: 0.7}}>
            Justice • Integrity • Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}

