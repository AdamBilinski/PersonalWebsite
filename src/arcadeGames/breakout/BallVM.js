class BallVM {
    constructor(canvasWidth, canvasHeight) {
        this.width = canvasWidth;
        this.height = canvasHeight;
        this.movingRight = true;
        this.movingTop = true;
        this.radius = 5;
        this.X = this.width / 2 - this.radius / 2;
        this.Y = this.height - this.radius;
    }

    setContext = function (ctx) {
        this.ctx = ctx;
    }

    draw = function () {
        this.recalculatePosition();
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.beginPath();
        this.ctx.arc(this.X, this.Y, 5, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    recalculatePosition = function () {
        if (this.X > this.width && this.movingRight) {
            this.movingRight = false;
        }
        else if(this.X < 0 && !this.movingRight){
            this.movingRight = true;
        }

        if (this.Y < 0 && this.movingTop) {
            this.movingTop = false;
        }
        else if(this.Y > this.height && !this.movingTop){
            this.movingTop = true;
        }

        if (this.movingRight) {
            this.X += 1;
        } else {
            this.X -= 1;
        }

        if (this.movingTop) {
            this.Y -= 1;
        } else { 
            this.Y += 1; }
    }
}

export default BallVM