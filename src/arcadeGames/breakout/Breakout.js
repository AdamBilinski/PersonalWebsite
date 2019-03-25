import React, { Component } from 'react';

import Canvas from '../Canvas';
import BallVM from './BallVM';
import PaddleVm from './PaddleVM';
import KeyListener from '../KeyPressListener';

class Breakout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ctx: null,
            canvasWidth: 400,
            canvasHeight: 600,
            ball: new BallVM(400, 600),
            paddle: new PaddleVm(400, 600),
        };
       
        new KeyListener(this.state.paddle);
      }

    renderCanvas = () => {
        var ball = this.state.ball;
        var paddle = this.state.paddle;
        ball.draw();
        paddle.draw();
        requestAnimationFrame(this.renderCanvas);
    }

    registerCanvas = (ctx) => {
        this.setState({
            ctx: ctx
        })
        this.state.ball.setContext(ctx);
        this.state.paddle.setContext(ctx);
    }

    render() {
        return (
            <div>
                <button onClick={this.renderCanvas}>Start New Game</button>
                <Canvas height={this.state.canvasHeight}
                        width={this.state.canvasWidth}
                        registerCanvas={this.registerCanvas} />
            </div>
        )
    }
}

export default Breakout;