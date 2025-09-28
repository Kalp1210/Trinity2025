import React from "react";
import "./App.css";
import Sponsor from "./pages/Sponsor";
import Teams from "./pages/Teams";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

