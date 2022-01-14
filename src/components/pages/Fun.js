import React from 'react'
import Hobby from '../Hobby'
// Import images of projects
import Zero from '../../Assets/images/Zero-gravity.jpg'
import First from '../../Assets/images/FirstFewDays.png'
import Cat from '../../Assets/images/Cat.JPG'
import TreeLamp from '../../Assets/images/TreeLamp.jpg'
import MyHand from '../../Assets/images/MyHand.jpg'
import Bench from '../../Assets/images/Bench.jpg'
import Building from '../../Assets/images/Building.jpg'
import Hand from '../../Assets/images/Hand.jpg'

const diyProjects = [
  {
      title: 'Zero-Gravity Park Bench',
      resource: 'https://altugcakmakci.github.io/movie_pal/',
      image: Zero,
      description: 'This application allows the cinephile to search for a title from the IDB movie database. It also allows the user to search for an actor or director. Each search returns a list of options to choose from.',
  },
  {
      title: 'Moving to Ottawa',
      resource: 'https://inout-app.herokuapp.com/',
      image: First,
      description: 'This web application will allow users to first choose if they want to stay inside or if they want to go outside. Once chosen, the application will display a set of activity cards and present the user with preference buttons to filter activities.',
  },
  {
      title: 'Cat in Ottawa',
      resource: 'https://aj-pena.github.io/Day-Planner/',
      image: Cat,
      description: 'This application allows the user to schedule events for a 5 day time frame. It contains slots for every work-day hour that can be used to store event names. The times-slots are color-coded to represent past, present and future time-slots.',
  },
  {
      title: 'Laser-Cutted Tree Lamp',
      resource: 'https://aj-pena.github.io/Code-Quiz/',
      image: TreeLamp,
      description: 'This program will generate an interactive quiz with multiple choices that will keep track of high scores. This program will allow the user to keep his/her coding knowledge greased and compare it to others via scores.',
  },
  {
      title: 'Clay Sculpting',
      resource: 'https://budget-tracker-ajp.herokuapp.com/',
      image: MyHand,
      description: 'This application will allow an avid traveler record their transactions even if they are offline.',
  },
  {
      title: 'Bench',
      resource: 'https://fitness-tracker-apj.herokuapp.com/?id=618d6d09e1bbb1001665fd93',
      image: Bench,
      description: 'This application allows the user to create workouts and add exercises to each workout. By keeping track of the number of workouts and time spent, the user can reach his/her goals faster.',
  },
  {
    title: 'Conceptualizing Spaces',
    resource: 'https://googlebooks-ajp.herokuapp.com/',
    image: Building,
    description: 'This application is built on the cloud with a MERN Stack framework and uses the Google Book API. It allows the avid reader to search for books of interest and to add them to a personal collection.',
  },
  {
    title: 'Life Drawing',
    resource: 'https://aqueous-ocean-45024.herokuapp.com/',
    image: Hand,
    description: 'MERN web application that helps underserved students find funding for college or university',
  }

]

function Fun() {
    return (
      <div className="row work">
                {/* <!-- section title --> */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 section-title">
                <h2><a id="work-section">Projects</a></h2>
            </div>
                {/* <!-- gallery of apps --> */}
            <div className="col-12 col-sm-6 col-md-8 col-lg-8 apps">
             {diyProjects.map((project) =>{
               return <Hobby title={project.title} resource={project.resource} image={project.image} description={project.description} />
             })}
            </div>
                           
        </div>
    )
}

export default Fun
