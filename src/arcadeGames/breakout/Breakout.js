import React, { Component } from 'react';

import Canvas from '../Canvas';
import BallVM from './BallVM';
import PaddleVm from './PaddleVM';
import BricksVM from './BricksVM';
import KeyListener from '../KeyPressListener';

class Breakout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ctx: null,
            canvasWidth: 480,
            canvasHeight: 320,
            ball: new BallVM(480, 320),
            paddle: new PaddleVm(480, 320),
            bricks: new BricksVM(480, 320)
        };
       
        new KeyListener(this.state.paddle);
      }

    renderCanvas = () => {
        var ball = this.state.ball;
        var paddle = this.state.paddle;
        var bricks = this.state.bricks;

        ball.draw(paddle.x, paddle.width);
        bricks.draw();
        paddle.draw();
        requestAnimationFrame(this.renderCanvas);
    }

    registerCanvas = (ctx) => {
        this.setState({
            ctx: ctx
        })
        this.state.ball.setContext(ctx);
        this.state.paddle.setContext(ctx);
        this.state.bricks.setContext(ctx);
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