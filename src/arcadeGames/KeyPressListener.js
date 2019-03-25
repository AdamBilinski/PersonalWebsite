class KeyPressListener{
    constructor(obj){
        this.obj = obj;

        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }

     keyDownHandler= function(e) {
        if(e.key === "Right" || e.key === "ArrowRight") {
            this.obj.rightPressed = true;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft") {
            this.obj.leftPressed = true;
        }
    }
    
     keyUpHandler = function(e) {
        if(e.key === "Right" || e.key === "ArrowRight") {
            this.obj.rightPressed = false;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft") {
            this.obj.leftPressed = false;
        }
    }
}

export default KeyPressListener