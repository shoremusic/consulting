import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ThankYou from "./pages/ThankYou";
import ServicesPage from './pages/Services.jsx'; // if you want a dedicated services page
import ContactPage from './pages/Contact.jsx';   // dedicated contact page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
