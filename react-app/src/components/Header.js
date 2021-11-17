
export default function Header() {
    return (
        <div>
             {/* <!-- Header --> */}
            <div class="row header">
                {/* <!-- name --> */}
              <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                <h1 id="myName"><a href="./Assets/pdf/Andrés_Peña.pdf">Andrés Peña</a></h1>
              </div>
                {/* <!-- buttons --> */}
              <div class="col-12 col-sm-6 col-md-8 col-lg-8">
                    <ul class="headerBtns">
                      <li><a href="#about-me-section">About Me</a></li>
                      <li><a href="#work-section">Work</a></li>
                      <li><a href="#contact-me-section">Contact Me</a></li>
                    </ul>                
              </div>              
            </div>
        </div>
    );
}