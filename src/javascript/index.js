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

