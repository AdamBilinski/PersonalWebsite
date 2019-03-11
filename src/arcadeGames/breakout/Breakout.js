import React, { Component } from 'react';

import Canvas from '../Canvas';
import BallVM from './BallVM';

class Breakout extends Component {

    state = {
        ctx: null,
        ball: null
    };

    registerCanvas = (ctx) => {
        this.setState({
            ctx: ctx,
            ball: new BallVM(ctx)
        })
    }

    drawBall = () => {
        var ball = this.state.ball;
        ball.drawBall();
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
                <button onClick={this.drawBall}>Draw Ball</button>
                <button onClick={this.moveRight}>Left</button>
                <button onClick={this.moveLeft}>Right</button>
                <Canvas registerCanvas={this.registerCanvas} />
            </div>
        )
    }
}

export default Breakout;