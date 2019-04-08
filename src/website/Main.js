import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import AboutMe from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light header" >
          <NavLink className="navbar-brand" to="/">About Me</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><NavLink className="nav-link" to="/skills">My Skills</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/projects">Projects</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
              </ul>
            </div>
          </nav>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutMe} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;