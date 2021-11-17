import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import './style.css'

export default function App() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <Project/>
      <Footer/>      
    </div>
  );
}


