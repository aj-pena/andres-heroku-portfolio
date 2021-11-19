import React from 'react'



function Project({title, page, repo, image}) {
    return (
                                        
        <div className="card card-medium medium-app">
            <img src={image} className="card-img-top medium" alt="screenshot of the deployed application's homepage"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <a href={page} className="card-link">Deployed App</a>
                <a href={repo} className="card-link">GitHub Repo</a>                          
            </div>                  
        </div>                           
        
    )
}

export default Project
