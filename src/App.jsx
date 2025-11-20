import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="main-content">
          <div className="container grid">
            <div>
              <Services />
              <About />
            </div>
            <div>
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Enhanced Floating Chat Button */}
      <div className="chat-floating" role="dialog" aria-label="Chat Assistant">
        <button className="chat-button" title="Chat with SMR Assistant">
          💬
        </button>
      </div>
    </>
  );
}