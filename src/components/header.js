import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class Header extends Component {
  render() {
    return (
      <div id="navBar">
        <Link id="navBarButton" to="./">
          Back
        </Link>
      </div>
    )
  }
}

export default Header
