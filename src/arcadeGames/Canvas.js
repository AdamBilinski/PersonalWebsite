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
                <canvas ref="canvas" width={this.props.width} height={this.props.height} />
            </div>
        )
    }
}

export default Canvas