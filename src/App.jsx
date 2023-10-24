import { useState } from "react";
import "./App.css";
import Navbar from "./components/common/navbar/navbar";
import Slides from "./components/Slides/Slides";

function App() {
  return (
    <>
      <Navbar />
      <Slides />
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Jayvan Andel S</a>.
      </div>
    </>
  );
}

export default App;
