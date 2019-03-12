import React, { Component } from 'react';

import Canvas from '../Canvas';
import BallVM from './BallVM';

class Breakout extends Component {

    state = {
        ctx: null,
        canvasWidth: 400,
        canvasHeight: 600,
        ball: new BallVM(400, 600),
    };

    renderCanvas = () => {
        var ball = this.state.ball;
        ball.draw();
        requestAnimationFrame(this.renderCanvas);
    }

    registerCanvas = (ctx) => {
        this.setState({
            ctx: ctx
        })
        this.state.ball.setContext(ctx);
    }

    moveRight = () => {
        var ball = this.state.ball;
        ball.moveRight();
    }

    moveLeft = () => {
        var ball = this.state.ball;
        ball.moveLeft();
    }

    render() {
        return (
            <div>
                <button onClick={this.renderCanvas}>Start New Game</button>
                <button onClick={this.moveRight}>Left</button>
                <button onClick={this.moveLeft}>Right</button>
                <Canvas height={this.state.canvasHeight}
                        width={this.state.canvasWidth}
                        registerCanvas={this.registerCanvas} />
            </div>
        )
    }
}

export default Breakout;