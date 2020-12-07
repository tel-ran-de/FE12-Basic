const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

const keysPressed = {};

const game = new Game(canvas);
game.start();
