import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Media from "./pages/Media";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      </Routes>
      <div className="">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/comming" element={<ComingSoon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
