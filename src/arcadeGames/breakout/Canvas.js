import React from 'react';

class Canvas extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        
       this.props.registerCanvas(ctx);
    }
    render() {
        return (
            <div>
                {/* <canvas onLoad={this.props.registerCanvas(this)} ref="canvas" width={640} height={425} /> */}
                <canvas ref="canvas" width={640} height={425} />
            </div>
        )
    }
}

export default Canvas