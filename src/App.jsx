import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import reactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
