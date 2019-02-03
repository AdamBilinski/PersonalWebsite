import React, {Component} from 'react';

import Canvas from './Canvas';

class Breakout extends Component{

    state = {
        canvas: null
    };

    registerCanvas = (canvas) =>{
            this.setState({
            canvas: canvas
        })
    }

    writeText = () =>{
        var ctx = this.state.canvas;
        ctx.font = "40px Courier"
        ctx.fillText("this.props.text", 210, 75)
    }

    render(){
        return(
            <div>
                <button onClick={this.writeText}>Write text</button>
                <Canvas registerCanvas={this.registerCanvas} />
            </div>
        )
    }
}

export default Breakout;