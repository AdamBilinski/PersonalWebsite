import Brick from './Brick';

class BricksVM {
    constructor() {
        this.brickRowCount = 3;
        this.brickColumnCount = 5;
        this.brickPadding = 10;
        this.brickOffsetTop = 30;
        this.brickOffsetLeft = 30;
        this.brickWidth = 75;
        this.brickHeight = 20;

        this.bricks = [];

        this.setBricks();
    }

    setContext = function (ctx) {
        this.ctx = ctx;

        for (var c = 0; c < this.brickColumnCount; c++) {
            for (var r = 0; r < this.brickRowCount; r++) {
                var brick = this.bricks[c][r];
                brick.setContext(ctx);
            }
        }
    }

    setBricks = function () {
        for (var c = 0; c < this.brickColumnCount; c++) {
            this.bricks[c] = [];
            for (var r = 0; r < this.brickRowCount; r++) {
                this.bricks[c][r] = new Brick(0, 0, this.brickWidth, this.brickHeight, 1);
            }
        }
    }

    draw = function () {
        for (var c = 0; c < this.brickColumnCount; c++) {
            for (var r = 0; r < this.brickRowCount; r++) {
                var brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
                var brickY = (r * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
                var brick = this.bricks[c][r];
                brick.x = brickX;
                brick.y = brickY;

                brick.draw();
            }
        }
    }
}

export default BricksVM;