import React from 'react';
import './Topbar.css';
//import Items from './Items'
import logo from '../images/iconmusic.png'

class Topbar extends React.Component{



  myFunction= () => {
        var x = document.getElementById("navbarBasicExample")
        if (x.style.display === "block") {
          x.style.display = "none"
        } else {
          x.style.display = "block"
        }
}

  
  render() {

  
  return (<div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src={logo} />
    </a>

    <a role="button" class="navbar-burger burger" id ="myLinks" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={this.myFunction}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>



    </div>);
}
}

export default Topbar;


