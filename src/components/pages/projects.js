import React, { Component } from 'react'
import '../css/projects.css'
import '../css/about.css'

import Sphere from '../../img/web.png'
import Colours from '../../img/ColoursDuo.png'
import WorkoutDiary from '../../img/WorkoutDiaryDuo.png'
import Shrine from '../../img/Shrine.png'
import Cozy from '../../img/Cozy.png'
import Library from '../../img/Library.png'

import NavBar from '../header.js'

class Projects extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      projects: [
        {
          name: 'Data Visualization of Health Data',
          language: 'WebGL, p5JS',
          subtitle:
            'By using p5js and webGL, I created a simple data visualization using the heart rate data from my apple watch! The middle sphere symbolizes "me" in this case and the cubes that are rotating around the sphere are individual heart rate data. The size, distance, speed and the angle that its rotating is calculated by each instance.',
          thumbnail: Sphere,
          link:
            'http://creative.colorado.edu/~putn4264/code/final/final/index.html'
        },
        {
          name: 'Colours',
          language: 'Swift',
          subtitle:
            'Finding a suitable color pallete for projects was always hard for me so, I created a simple iOS app using Swift that randomizes and gives user a simple pallete of colors with their designated hex values!',
          thumbnail: Colours,
          link: 'https://github.com/pujanTandukar/Colours'
        },
        {
          name: 'Workout Diary',
          language: 'Java',
          subtitle:
            'Personally, I need motivation to go to the gym so, I created a simple Android workout diary/journal that logs entry from an user and keep them motivated!',
          thumbnail: WorkoutDiary,
          link: 'https://github.com/pujanTandukar/WorkoutDiary'
        },
        {
          name: 'Cozy Cabin',
          language: 'Maya',
          subtitle:
            'Using Maya, I created a simple scene that shows the beauty of a cabin in the middle of a forrest. Everything in this video except for the materials are built from scratch!',
          thumbnail: Cozy,
          link: 'https://vimeo.com/247891376'
        },
        {
          name: 'A Illustration of a Japanese Shrine',
          language: 'OpenGL, C',
          subtitle:
            'I used OpenGL, to create a simple illustration of a Japanese shrine which includes a temple with artifacts inside!',
          thumbnail: Shrine,
          link: 'https://github.com/pujanTandukar/JapaneseShrine'
        },
        {
          name: 'Library of p5JS',
          language: 'p5JS',
          subtitle:
            'A collection of illustrations I have made using p5js and WebGL!',
          thumbnail: Library,
          link: 'http://creative.colorado.edu/~putn4264/code/'
        }
      ]
    }
  }

  render() {
    let { projects } = this.state
    return (
      <div className="Projects">
        <NavBar />
        <h2 id="titleHeader">Projects</h2>
        <div id="projectsContainer">
          {projects.map((project, index) => {
            return (
              <div id="eachProject" key={index}>
                <a id="seperateLink" target="_blank" href={project.link}>
                  <img id="projectImage" src={project.thumbnail} />
                  <h3>{project.name}</h3>
                </a>
                {/* <h4>{project.language}</h4> */}
                <h5>{project.subtitle}</h5>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default Projects
