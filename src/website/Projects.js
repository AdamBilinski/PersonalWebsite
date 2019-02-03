import React, {Component} from 'react';

import Breakout from '../arcadeGames/breakout/Breakout';

class Projects extends Component {
    render() {
      return (
        <div>
          <h2>Projects</h2>
          <p>Some fun projects I've been working on in my spare time:</p>
          <ol>
            <li>Brakeout</li>
            <Breakout />
          </ol>
        </div>
      );
    }
  }
   
  export default Projects;