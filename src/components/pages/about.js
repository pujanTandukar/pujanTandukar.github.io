import React, { Component } from 'react'
import '../css/about.css'

import Github from '../../img/Github.png'
import LinkedIn from '../../img/Linkedin.png'
import VSCO from '../../img/Vsco.png'

import NavBar from '../header.js'

class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div id="pujanInfo">
          <h2 id="titleHeader">About</h2>
          <p>Hello there! My name is Pujan Tandukar.</p>
          <p>
            I am currently studying Computer Science and Technology Arts and
            Media at University of Colorado Boulder.
          </p>
          <div>
            <a target="_blank" href="https://github.com/pujanTandukar">
              <img id="icons" alt="Github" src={Github} />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/pujantandukar/"
            >
              <img id="linkedin" alt="Linkedin" src={LinkedIn} />
            </a>

            <a target="_blank" href="http://vsco.co/pujan-/">
              <img id="icons" alt="VSCO" src={VSCO} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default About
