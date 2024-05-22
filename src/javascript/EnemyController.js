import Enemy from './Enemy.js'
import MovingDirection from './MovingDirection.js'
export default class EnemyController {
    enemyMap = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ];
    enemyRows = [];

currentDirection  = MovingDirection.right;
xVelocity = 0;
yVelocity = 0;
defaultXVelocity = 1;
defaultYVelocity = 1;
moveDownTimerDefault = 30;
moveDownTimer = this.moveDownTimerDefault;
fireBulletTimerDefault = 100;
fireBulletTimer = this.fireBulletTimerDefault;

constructor(canvas, enemyBulletController, playerBulletController) {
    this.canvas = canvas;
    this.enemyBulletController = enemyBulletController;
    this.playerBulletController = playerBulletController;
    this.enemyDeathSound = new Audio("src/assets/sounds/enemy-death.wav");
    this.enemyDeathSound.volume = 0.1;
    } 

    collisionDetection(){
        this.enemyRows.forEach((enemyRow) => {
            enemyRow.forEach((enemy, enemyIndex) =>{
                if (this.playerBulletController.collisionWith(enemy)) {
                    this.enemyDeathSound.currentTime = 0;
                    this.enemyDeathSound.play();
                    enemyRow.splice(enemyIndex, 1);
                }
            });
        });
        this.enemyRows = this.enemyRows.filter((enemyRow) => enemyRow.lenght > 0);
    }
    fireBullet(){
        this.fireBulletTimer--;
        if(this.fireBulletTimer <= 0) {
            const allEnemies = this.enemyRow.flat();      
            const enemyIndex = math.floor(Math.random() * allEnemies.lenght);
            const enemy = allEnemies[enemyIndex];
            this.enemyBulletController.shoot(enemy.x + enemy.width / 2, enemy. y, -3);
 
        }
    }
    resetMoveDownTimer() {
        if(this.moveDownTimer <= 0) {
            this.moveDownTimer = this.moveDownTimerDefault;
        }
    }

    decremntMoverDownTimer() {
        if(
            this.currentDirection == MovingDirection.downLeft ||
            this.currentDirection == MovingDirection.downLeft
        ) {
            this.moveDownTimer--;
        }
    }
    updateVelocityAndDirection() {
        for(const enemyRow of this.enemyRows) {
            if(this.currentDirection === MovingDirection.right) {
                this.xVelocity = this.defaultXVelocity;
                this.yVelocity = 0;
                const rightMostEnemy = enemyRow[enemyRow.lenght - 1];
                if(rightMostEnemy.x + rightMostEnemy.width >= this.canvas.width) {
                    this.currentDirection = this.MovingDirection.downLeft;
                    break;
                }
            } else if(this.currentDirection === MovingDirection.downLeft) {
                if(this.moveDownTimer(MovingDirection.left)) {
                    break;
                }
            }else if(this.currentDirection === MovingDirection.left) {
                this.xVelocity = -this.defaultXVelocity;
                this.yVelocity = 0;
                const leftMostEnemy = enemyRow[0];
                if(leftMostEnemy.x <= 0) {
                    this.currentDirection = MovingDirection.donwRight;
                    break;
                }
            }else if( this.currentDirection === MovingDirection.donwRight) {
                if(this.moveDownTimer(MovingDirection.right)) {
                    break;
                }
            }   
          }
    }
}     