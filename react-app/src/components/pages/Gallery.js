import React from 'react'

function Gallery() {
    return (
        <div className="row work">
                {/* <!-- section title --> */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 section-title">
                <h2><a id="work-section">Work</a></h2>
            </div>
                {/* <!-- gallery of apps --> */}
            <div className="col-12 col-sm-6 col-md-8 col-lg-8">
                <div className='container'>
                    {/* big app */}
                <div className="row">
                    <div className="card bigg-app">
                        <img src="./Assets/images/MoviePal.PNG" className="card-img-top big" alt="screenshot of the deployed application's homepage"/>
                        <div className="card-body">
                          <h5 className="card-title">Movie Pal</h5>
                          <a href="https://altugcakmakci.github.io/movie_pal/" className="card-link">Deployed App</a>
                          <a href="https://github.com/altugcakmakci/movie_pal.git" className="card-link">GitHub Repo</a>                          
                        </div>                       
                    </div>
                </div>
            
                </div>

            </div>
                           
        </div>
    )
}

export default Gallery
