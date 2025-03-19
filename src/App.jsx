import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import reactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import account from "./routes/account.jsx";
import helpers from "./routes/Helpers.jsx";
import settings from "./routes/settings.jsx";
import Hero from "./components/Hero.jsx";
import Carousel from "./components/Carousel.jsx";
import tool from "./components/tool.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/account" element={<account />}/>
        <Route path="/helpers" element={<helpers />}/>
        <Route path="/settings" element={<settings />}/>
      </Routes>
      <Hero />
      <Carousel />
      <tool />

    </>
  );
}

export default App;
