import { useState } from "react";
import "./App.css";
import Navbar from "./components/common/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
