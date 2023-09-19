import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Project from './pages/Project';
import Services from './pages/Services'
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import './App.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <About/>
    <Resume/>
    <Project/>
    <Services/>
    <Testimonials/>
    <Contact/>
    <Footer/>

  </React.StrictMode>
)
