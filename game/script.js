function GameObject(imageUrl) {
    this.x = 0;
    this.y = 0;
    this.ready = false;
    this.image = new Image();
    this.image.onload = () => this.ready = true;
    if (imageUrl) {
        this.image.src = imageUrl;
    }
}

GameObject.prototype.render = function (ctx) {
    if (this.ready) {
        ctx.drawImage(this.image, this.x, this.y);
    }
}
const keysPressed = {};

const background = new GameObject('images/background.png');
const hero = new GameObject('images/hero.png');
const monster = new GameObject('images/monster.png');

const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

const startPosition = function () {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    monster.x = monster.image.width + Math.random() * (canvas.width - 3 * monster.image.width);
    monster.y = monster.image.height + Math.random() * (canvas.height - 3 * monster.image.height);
}

startPosition();

const MovableGameObjectPrototype = {
    speed: 0,
    moveUp: function () {
        this.y = this.y - this.speed;
        if (this.y < 0) {
            this.y = canvas.height - this.y;
        }
    },
    moveDown: function () {
        this.y = Math.abs(this.y % canvas.height + this.speed);
    },
    moveLeft: function () {
        this.x = this.x - this.speed;
        if (this.x < 0) {
            this.x = canvas.width - this.x;
        }
    },
    moveRight: function () {
        this.x = Math.abs(this.x % canvas.width + this.speed);
    },
    speedUp: function () {
        this.speed += 1;
        console.log(this.speed);
    },
    speedDown: function () {
        if (this.speed > 1)
            this.speed -= 1;
        console.log(this.speed);
    },
    updatePosition: function () {
        if (keysPressed["ArrowUp"]) {
            hero.moveUp();
        }
        if (keysPressed["ArrowDown"]) {
            hero.moveDown();
        }
        if (keysPressed["ArrowRight"]) {
            hero.moveRight();
        }
        if (keysPressed["ArrowLeft"]) {
            hero.moveLeft();
        }
    },
    updateSpeed: function () {
        // if (keysPressed["ControlRight"]) {
        if (keysPressed["Space"]) {
            hero.speedUp();
        }
        if (keysPressed["ControlLeft"]) {
            hero.speedDown();
        }
    }
}

Object.assign(hero, MovableGameObjectPrototype);

const distanceBetweenTwoPoints = (x1, x2, y1, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

hero.update = function () {
    hero.updatePosition();
    hero.updateSpeed();
}
hero.speed = 1;


const ctx = canvas.getContext('2d');

const a = {}

window.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    keysPressed[event.code] = true;
});

window.addEventListener('keyup', (event) => {
    keysPressed[event.key] = false;
    keysPressed[event.code] = false;
});

let winCount = 0;

ctx.font = "32px Arial";
// ctx.fillStyle = "white";
ctx.textAlign = "center";
const grad = ctx.createLinearGradient(0, 0, canvas.width, 32);
grad.addColorStop("0", "red");
grad.addColorStop("1", "yellow");
ctx.fillStyle  = grad;
const textDraw = function () {
    ctx.fillText("Win count: " + winCount, canvas.width / 2, hero.image.width / 2 + 10);
}


const gameCycle = function () {
    hero.update();

    if (distanceBetweenTwoPoints(hero.x, monster.x, hero.y, monster.y) < hero.image.width / 2 + monster.image.width / 2) {
        console.log("Hero caught monster!!!");
        winCount++;
        console.log("win count: " + winCount);
        startPosition();
    }

    background.render(ctx);
    hero.render(ctx);
    monster.render(ctx);
    textDraw();
    window.requestAnimationFrame(gameCycle);
}

window.requestAnimationFrame(gameCycle);

// setTimeout(() => {
//     background.render(ctx);
//     hero.render(ctx);
//     monster.render(ctx);
// }, 1500);
