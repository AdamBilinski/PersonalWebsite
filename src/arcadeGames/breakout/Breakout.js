import React, { Component } from 'react';

import Canvas from '../Canvas';
import BallVM from './BallVM';
import PaddleVm from './PaddleVM';
import keyListener from '../KeyPressListener';

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
       
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
      }

    componentDidMount(){
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyDownHandler);
        document.removeEventListener('keyup', this.keyUpHandler);
      }

    keyDownHandler= function(e) {
        var paddle = this.state.paddle;
        if(e.key === "Right" || e.key === "ArrowRight") {
            paddle.rightPressed = true;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft") {
            paddle.leftPressed = true;
        }
    }
    
     keyUpHandler = function(e) {
        var paddle = this.state.paddle;
        if(e.key === "Right" || e.key === "ArrowRight") {
            paddle.rightPressed = false;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft") {
            paddle.leftPressed = false;
        }
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