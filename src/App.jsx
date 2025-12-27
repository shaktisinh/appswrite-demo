import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

