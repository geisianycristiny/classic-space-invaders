class Player {
    rightPressed = false;
    lefthPressed = false;
    shootPressed = false;
    constructor(canvas, velocity, bulletController) {
        this.canvas = canvas;
        this.velocity = velocity;
        this.bulletController = bulletController;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 75;
        this.width = 50;
        this.height = 48;
        this.image = new Image
        this.image.src = 'src/assets/images;player.png'

        document.addEventListener('Keydown', this.keyDown); 
        document.addEventListener('Keyup', this.keyUp);

    }
    draw(ctx) {
        if (this.shootPressed) {
            this.bulletController.shoot(this.x + this.width / 2, this.y, 4, 18);
        }
        this.move();
        this.collideWith();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    move() {
        if(this.rightPressed){
            this.x += this.velocity;
        }else if (this.leftPressed){
            this.x -= this.velocity;
        }
    }

    collideWith(){
        if(this.x < 0){
            this.x = 0;
        }
        if (this.x > this.canvas.with - this.width){
            this.x = this.canvas.with - this.width;
        }
    }
}