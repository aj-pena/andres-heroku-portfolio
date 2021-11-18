import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Resume from './components/pages/Resume';

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
    case 3:
      return <Resume/>;
    
  }
  
 };
  
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      <div className="row work">
                {/* <!-- section title --> */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 section-title">
                <h2><a id="work-section">Work</a></h2>
            </div>
                {/* <!-- gallery of apps --> */}
            <div className="col-12 col-sm-6 col-md-8 col-lg-8">                
            {renderPage()}              
            </div>
        </div>     
      <Footer/>        
    </div>
  );
}


