class BallVM {
    constructor(canvasWidth, canvasHeight) {
        this.cWidth = canvasWidth;
        this.cHeight = canvasHeight;
        this.radius = 5;
        this.x = this.cWidth / 2 - this.radius / 2;
        this.y = this.cHeight - this.radius;
        this.dx = 2;
        this.dy = 2;
    }

    setContext = function (ctx) {
        this.ctx = ctx;
    }

    draw = function (paddleX, paddleWidth) {
        this.recalculatePosition(paddleX, paddleWidth);
        this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    recalculatePosition = function (paddleX, paddleWidth) {
        if(this.x + this.dx > this.cWidth-this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        if(this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }

        else if(this.y + this.dy > this.cHeight-this.radius) {
            if(this.x > paddleX && this.x < paddleX + paddleWidth) {
                this.dy = -this.dy;
            }
            else {
                alert("GAME OVER");
                document.location.reload();
            }
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}

export default BallVM