class KeyPressListener{
    constructor(){
        this.rightPressed = false;
        this.leftPressed = false;

        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }

     keyDownHandler= function(e) {
        if(e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = true;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = true;
        }
    }
    
     keyUpHandler = function(e) {
        if(e.key === "Right" || e.key === "ArrowRight") {
            //this.rightPressed = false;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft") {
            //this.leftPressed = false;
        }
    }

    rightPressedFunc = function(callback){
        callback(this.rightPressed);
    }
}

export default KeyPressListener