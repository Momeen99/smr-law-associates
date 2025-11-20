import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root") || (() => {
  const d = document.createElement("div");
  d.id = "root";
  document.body.appendChild(d);
  return d;
})();
createRoot(container).render(<App />);
