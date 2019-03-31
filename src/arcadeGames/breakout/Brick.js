class BrickVM {
    constructor(x, y, width, height, level){
        this.x = x;
        this.y = y;
        this.level = level;
        this.width = width;
        this.height = height;
    }

    setContext = function (ctx) {
        this.ctx = ctx;
    }

    draw = function(){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default BrickVM