import React  from "react";
export default function Navigation(props) {
    return (
        <div className="col-12 col-sm-6 col-md-8 col-lg-8">
            {/* <!-- buttons --> */}
            
                    <ul className="headerBtns">
                      <li><button onClick={() => props.setCurrentPage(0)} >About Me</button></li>
                      <li><button onClick={() => props.setCurrentPage(1)}>Work</button></li>
                      <li><button onClick={() => props.setCurrentPage(2)}>Contact Me</button></li>
                      <li><a href='../Assets/pdf/Andrés_Peña.pdf'>Resume</a></li>
                    </ul>                
              
        </div>
    );
}