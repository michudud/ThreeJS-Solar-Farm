import "./App.css";
import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="App">
    </div>
  );
};

const rootDiv = document.getElementById("root");
if (rootDiv) {
  createRoot(rootDiv).render(<App />);
}
