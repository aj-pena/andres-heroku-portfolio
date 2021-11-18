import React from 'react'

function About() {
    return (
        <div>
             {/* <!-- About Me --> */}
            <div className="row about">
                {/* <!-- section title --> */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 section-title">
                  <h2><a id="about-me-section">About Me</a></h2>
                </div>
                {/* <!-- content --> */}
                <div className="col-12 col-sm-6 col-md-8 col-lg-8">
                  <p id="about-me"> I have 8 years of experience in transportation planning and engineering. Registered as EIT with Professional Engineers Ontario, I have taken formal training in ArcMap, Vissim, AutoCAD, Revit and Photoshop. Passionate about urban and regional transportation, I am currently learning to code web applications that will help cities and companies move safely, efficiently and fairly. </p>    
              </div>
            </div>
        </div>
    )
}

export default About
