import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Services from './pages/Services'
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import './App.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Project/>
    <Testimonials/>
    <Contact/>

  </React.StrictMode>,
)
