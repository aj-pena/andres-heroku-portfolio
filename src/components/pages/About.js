import React from 'react'
import Picture from '../../Assets/images/me.jpg'

function About() {
    return (
        <div>
             {/* <!-- About Me --> */}
            <div className="row about">
                {/* <!-- section title --> */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 section-title">
                  <h2><a id="about-me-section">About Me</a></h2>
                  {/* <!-- Photo of me --> */}
                  <img className="me" src={Picture} alt="Photograph of Andrés Peña"/>
                </div>
                {/* <!-- content --> */}
                <div className="col-12 col-sm-6 col-md-8 col-lg-8">
                  <p id="about-me"> Web developer leveraging transportation planning background to build web applications for cities and companies. Recently earned a Certificate in Full-stack Development from the University of Toronto, with newly developed skills in JavaScript, CSS, React.js, SQL, MongoDB, Express and NodeJS. Known as an integral analyst passionate about front-end design. I applied aspects of responsive design in a recent project. I worked on a team of five to develop a multi-page MERN app that helps students from underserved communities find funds to advance their education. I am excited to leverage my skills as part of a double-impact, quality-driven team to improve cities and companies logistics through immersive web applications. </p>    
              </div>
            </div>
        </div>
    )
}

export default About
