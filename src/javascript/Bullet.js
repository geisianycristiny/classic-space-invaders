export default class Bullet {
    constructor(canvas, x, y, velocity, bullteColor){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.bullteColor = bullteColor;

        this.width = 5;
        this.height = 20;

    }
    draw(ctx) {
        this.y -= this.velocity
        ctx.fillStyle = this.bullteColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    collideWith(sprite) {
        if(
            this.x + this.width > sprite.x &&
            this.x < sprite.x + sprite.width &&
            this.y + this.height > sprite.y &&
            this.y < sprite.y + sprite.height
        ) {
            return true;
        } else {
            return false;
        }
    }
}