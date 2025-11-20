import React, { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

export default function ChatAssistant({ compact = false }){
  const QUESTIONS = [
    "Hello! May I know your name?",
    "Briefly describe your legal concern (1-2 sentences).",
    "Which practice area best matches your needs? (civil/criminal/family/corporate/property/other)",
    "Preferred contact method? (phone/email/in-person)",
    "Best time for consultation? (morning/afternoon/evening)"
  ];
  
  const [open, setOpen] = useState(!compact);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [value, setValue] = useState("");

  const send = () => {
    if (!value.trim()) return;
    setAnswers(prev => ({...prev, [step]: value.trim()}));
    setValue("");
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setOpen(false);
      // In a real app, you would send this data to your backend
      alert("Thank you! We have received your information. Our office will contact you shortly at 9738483568.");
      console.log("Client consultation request:", {...answers, [step]: value.trim()});
      setStep(0);
      setAnswers({});
    }
  };

  if (!open && compact) {
    return (
      <div style={{display: "flex", gap: "12px", alignItems: "center"}}>
        <button 
          className="btn btn-outline" 
          onClick={() => setOpen(true)}
          style={{borderColor: "rgba(255,255,255,0.3)", color: "white"}}
        >
          <FaRobot style={{marginRight: "8px"}} />
          Quick Legal Assessment
        </button>
      </div>
    );
  }

  return (
    <div className="chat-assistant">
      <div className="chat-header">
        <FaRobot />
        SMR Legal Assistant
      </div>
      <div className="chat-message">
        <div style={{fontSize: "14px", color: "var(--text-muted)", marginBottom: "8px"}}>
          {QUESTIONS[step]}
        </div>
        {step > 0 && (
          <div style={{fontSize: "12px", color: "var(--primary-blue)", background: "rgba(30, 64, 175, 0.1)", padding: "8px", borderRadius: "6px", marginTop: "8px"}}>
            Previous: {answers[step - 1]}
          </div>
        )}
      </div>
      <div className="chat-input-group">
        <input 
          value={value} 
          onChange={e => setValue(e.target.value)} 
          placeholder="Type your answer here..." 
          className="chat-input"
          onKeyDown={e => { if(e.key === "Enter") send(); }}
        />
        <button className="btn btn-primary" onClick={send} style={{padding: "14px"}}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}

