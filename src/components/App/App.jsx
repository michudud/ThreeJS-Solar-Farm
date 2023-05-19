import "./App.css";
import React from "react";
import { createRoot } from "react-dom/client";
import CanvasArea from "../CanvasArea";

const App = () => {
  return (
    <div className="App">
      <CanvasArea />
    </div>
  );
};

const rootDiv = document.getElementById("root");
if (rootDiv) {
  createRoot(rootDiv).render(<App />);
}
