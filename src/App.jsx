import React from "react";
import "./App.css";
import Sponsor from "./pages/Sponsor";
import Teams from "./pages/Teams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventsSection from "./components/EventsSection";
import DomainEvents from "./components/DomainEvents";
import Gallery from "./pages/Gallery";
import TeamsOG from "./pages/TeamsOG";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/events" element={<EventsSection />} />
        <Route path="/events/:domain" element={<DomainEvents />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/TeamOG" element={<TeamsOG />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import EventsSection from './components/EventsSection';
// import bgImage from '/backgroundImage.png';

// function App() {
//   return (
//     <div
//       className="min-h-screen bg-cover bg-center"
//       style={{ 
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       <Header />
//       <Hero />
//       <EventsSection />
//     </div>
//   );
// }

// export default App;
