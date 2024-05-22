class BullteController {
    bullets = [];
    timeTillNextBulletAllowed = 0
    constructor(canvas, maxBulletAtATime, BulletColor, soundEnabled) {
        this.canvas = canvas;
        this.maxBulletAtATime = maxBulletAtATime;
        this.BulletColor = BulletColor;
        this.soundEnabled = soundEnabled;

        this.schotSoud = new Audio("src/assets/souds/shoot.wav");
        this.schotSoud.volume = 0.1;
    }

    draw(ctx) {
        this.bullets = this.bullets.filter((Bullet) => Bullet.y + Bullet.
        width > 0 && this.bullets. y <= this.canvas.height);
    
    this.bullets.forEach((bullet) => bullet.draw(ctx));

    if(this.timeTillNextBulletAllowed > 0) {
        this.timeTillNextBulletAllowed--;
    }
   }
   collideWith(sprite) {
    const bullerThatHitspriteIndex = this.bullets.findIndex((bullet) =>
        bullet.collideWith(sprite));

    if(bullerThatHitspriteIndex >= 0){
        this.bullets.splice(bullerThatHitspriteIndex, 1);
        return true;
    }
    return false;
   }

   shoot(x, y, velocity, timeTillNextBulletAllowed = 0) {
    if(this.timeTillNextBulletAllowed <= 0 &&
        this.bullets.lengt < this.maxBullestsAtATime
    ) {
        const bullet = new Bulltet(this.canvas, x, y, velocity, this.BulletColor);
        this.bullets.push(bullet);
       if(this.soundEnabled){
        this.schotSoud.currentTime = 0;
        this.schotSoud.play();
       }
       this.timeTillNextBulletAllowed = timeTillNextBulletAllowed
       }
    }
}