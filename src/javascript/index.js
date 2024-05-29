import EnemyController from "./EnemyController.js";
import BulletController from "./BulletController.js";
import player from "./player.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "./src/assets/imagens/space.png";

const enemyBulletController = new BulletController(canvas, 4, "red", false);
const playerBulletController = new player(canvas, 10, "white", true);
const enemyController = new EnemyController(canvas, enemyBulletController, playerBulletController);
const player = new player(canvas, 10, playerBulletController);

let isGameOver = false;
let didWin = false;

function game() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    displaGameOver();

    if(isGameOver) {
        enemyController.draw(ctx);
        player.draw(ctx);
        enemyBulletController.draw(ctx);
        playerBulletController.draw(ctx);
    }
}
function displaGameOver() {
    let text = didWin ? "voce ganhou!" : "Game Over";
    let textOffset = didWin ? 5 : 3.6;
    ctx.fillstyle = "white";
    ctx.font = "35px 'press start 2P'";
    ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
}

function checkGameOver() {
    if(isGameOver) {
        return;
    }
    if(enemyBulletController.collideWith(player)) {
        isGameOver = true;
    }

    if(enemyController.collideWith(player)) {
        isGameOver = true;
    }

    if(enemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
    }
}

setInterval(game, 1000 / 60);
