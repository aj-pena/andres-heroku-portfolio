import React from 'react'
import pdf from '../../Assets/pdf/Andrés_Peña.pdf'

function Resume() {
    return (
        <div className= 'resume'>
            <h4>Proficiencies</h4>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <ul className='resumeUl'>
                            <li className= 'resumeList'><span >&#9899;</span>HTML</li>
                            <li className= 'resumeList'><span >&#9899;</span>CSS</li>
                            <li className= 'resumeList'><span >&#9899;</span>JavaScript</li>
                            <li className= 'resumeList'><span >&#9899;</span>ExpressJs</li>
                            <li className= 'resumeList'><span >&#9899;</span>NodeJs</li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-4">
                        <ul className='resumeUl'>
                            <li className= 'resumeList'><span >&#9899;</span>SQL</li>
                            <li className= 'resumeList'><span >&#9899;</span>NoSQL</li>
                            <li className= 'resumeList'><span >&#9899;</span>MongoDb</li>
                            <li className= 'resumeList'><span >&#9899;</span>React</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br/>
            <a className="copy-resume" href={pdf}>Download a copy of my Resume</a>
            <br/>
        </div>
    )
}

export default Resume
