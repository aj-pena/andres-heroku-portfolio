import React from 'react'
import Navigation from './Navigation'

export default function Header(props) {
    return (
        <div>
             {/* <!-- Header --> */}
            <div className="row header">
                {/* <!-- name --> */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <h1 id="myName"><a href="./Assets/pdf/Andrés_Peña.pdf">Andrés Peña</a></h1>
              </div>              
                <Navigation setCurrentPage={props.setCurrentPage} />              
              
            </div>
            {/* <!-- Ribbon --> */}
            <div className="row">
              {/* <!-- subtitle --> */}
                <div className="col ribbon">
                  {/* <!-- Photo of me --> */}
                  <img className="me" src="../me.jpg" alt="Photograph of Andrés Peña"/>
                  <h3 id="subtitle">Hi, I am a web developer keen to help your city move</h3>
                </div>              
              </div>
        </div>
    );
}