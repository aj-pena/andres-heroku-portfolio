import React from 'react'
import pdf from '../../Assets/pdf/Andrés_Peña.pdf'

function Resume() {
    return (
        <div className= 'resume'>
            <h4>Proficiencies</h4>
            <ul className='resumeUl'>
                <li className= 'resumeList'>HTML</li>
                <li className= 'resumeList'>CSS</li>
                <li className= 'resumeList'>JavaScript</li>
                <li className= 'resumeList'>ExpressJs</li>
                <li className= 'resumeList'>NodeJs</li>
            </ul>
            <a href={pdf}>Download a copy of my Resume</a>
        </div>
    )
}

export default Resume
