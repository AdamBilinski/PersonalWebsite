class PaddleVm {
    constructor(canvasWidth, canvasHeight){
        this.cWidht = canvasWidth;
        this.cHeight = canvasHeight;
        this.height = 10;
        this.width = 60;

        this.x = (this.cWidht-this.width) / 2;

        this.rightPressed = false;
        this.leftPressed = false;
    }
    setContext = function (ctx) {
        this.ctx = ctx;
    }

    draw = function(){
        this.recalculatePosition();
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.cHeight-this.height, this.width, this.height);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    recalculatePosition = function () {
        if(this.rightPressed && this.x < this.cWidht - this.width) {
            this.x += 7;
        }
        else if(this.leftPressed && this.x > 0) {
            this.x -= 7;
        }
    }
}

export default PaddleVm