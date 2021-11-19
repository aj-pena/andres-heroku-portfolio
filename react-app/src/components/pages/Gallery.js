import React from 'react'
import Project from '../Project'
import MoviePal from '../../Assets/images/MoviePal.PNG'
import InOrOut from '../../Assets/images/InOrOut.PNG'
import DayPlanner from '../../Assets/images/DayPlanner.PNG'
import CodeQuiz from '../../Assets/images/CodeQuiz.png'
import BudgetTracker from '../../Assets/images/BudgetTracker.PNG'
import FitnessTracker from '../../Assets/images/FitnessTracker.PNG'

const projects = [
  {
      title: 'Movie Pal',
      page: 'https://altugcakmakci.github.io/movie_pal/',
      repo: 'https://github.com/altugcakmakci/movie_pal.git',
      image: MoviePal,
  },
  {
      title: 'In or Out',
      page: 'https://inout-app.herokuapp.com/',
      repo: 'https://github.com/cathytanya/inout.git',
      image: InOrOut,
  },
  {
      title: 'Day Planer',
      page: 'https://aj-pena.github.io/Day-Planner/',
      repo: 'https://github.com/aj-pena/Day-Planner.git',
      image: DayPlanner,
  },
  {
      title: 'Code Quiz',
      page: 'https://aj-pena.github.io/Code-Quiz/',
      repo: 'https://github.com/aj-pena/Code-Quiz.git',
      image: CodeQuiz,
  },
  {
      title: 'Progressive Budget',
      page: 'https://budget-tracker-ajp.herokuapp.com/',
      repo: 'https://github.com/aj-pena/Budget-Tracker-offline.git',
      image: BudgetTracker,
  },
  {
      title: 'Fitness Tracker',
      page: 'https://fitness-tracker-apj.herokuapp.com/?id=618d6d09e1bbb1001665fd93',
      repo: 'https://github.com/aj-pena/Fitness-Tracker.git',
      image: FitnessTracker,
  }

]

function Gallery() {
    return (
        <div className="row work">
                {/* <!-- section title --> */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 section-title">
                <h2><a id="work-section">Work</a></h2>
            </div>
                {/* <!-- gallery of apps --> */}
            <div className="col-12 col-sm-6 col-md-8 col-lg-8 apps">
             {projects.map((project) =>{
               return <Project title={project.title} page={project.page} repo={project.repo} image={project.image} />
             })}
            </div>
                           
        </div>
    )
}

export default Gallery
