import React, { Component } from 'react';

import Canvas from '../Canvas';
import Ball from './Ball';

class Breakout extends Component {

    state = {
        ctx: null
    };

    registerCanvas = (ctx) => {
        this.setState({
            ctx: ctx
        })
    }

    writeText = () => {
        var ctx = this.state.ctx;
        ctx.font = "40px Courier"
        ctx.fillText("this.props.text", 210, 75)
    }

    render() {
        return (
            <div>
                <button onClick={this.writeText}>Write text</button>
                <Canvas registerCanvas={this.registerCanvas} />
                <Ball ctx={this.state.ctx} />
            </div>
        )
    }
}

export default Breakout;