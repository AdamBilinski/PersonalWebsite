import React, { Component } from "react";
 
class Ball extends Component {
    constructor(props){
        super(props);
        const ctx = this.props.ctx;
    }
    
    drawCircle = () =>{
        this.ctx.beginPath();
        this.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    render (){
        return(
            <div>
               ? 
            </div>
        )
    }
}

export default Ball;