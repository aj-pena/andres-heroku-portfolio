import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './style.css'

export default function App() {
  const [ currentPage, setCurrentPage] = useState(0);
 function renderPage(){
  switch (currentPage){
    case 0:
      return <About/>;
    case 1: 
      return <Gallery/>;
    case 2:
      return <Contact/>;
    
  }
  
 };
  
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer/>        
    </div>
  );
}


