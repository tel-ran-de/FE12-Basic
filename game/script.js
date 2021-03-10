function GameObject(imageUrl){
    this.x = 0;
    this.y = 0;
    this.ready = false;
    this.image = new Image();
    if (imageUrl){
        this.image.src = imageUrl;
    }
    this.image.onload = () => this.ready = true;
}

GameObject.prototype.render = function (ctx) {
    if (this.ready) {
        ctx.drawImage(this.image, this.x, this.y);
    }
}

const background = new GameObject('images/background.png');
const hero = new GameObject('images/hero.png');
const monster = new GameObject('images/monster.png');

const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

hero.getStarted = function (){
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;
}

hero.getStarted();

const MovebleGameObjectPrototype = {
    speed: 0,
    moveUp: function () {
        this.y = Math.abs(this.y % canvas.height - this.speed)
    },
    moveDown: function () {
        this.y = Math.abs(this.y % canvas.height + this.speed);
    },
    moveLeft: function () {
        this.x = Math.abs(this.x % canvas.width - this.speed)
    },
    moveRight: function () {
        this.x = Math.abs(this.x % canvas.width + this.speed)
    },
    speedUp: function () {
        this.speed += 1;
        console.log(this.speed)
    },
    speedDown: function () {
        if (this.speed > 1)
            this.speed -= 1;
        console.log(this.speed);
    },
    updatePosition: function (){
        if (keyPressed["ArrowUp"]) {
            hero.moveUp();
        }
        if (keyPressed["ArrowDown"]) {
            hero.moveDown();
        }
        if (keyPressed["ArrowRight"]) {
            hero.moveRight();
        }
        if (keyPressed["ArrowLeft"]) {
            hero.moveLeft();
        }
    },
    updateSpeed: function (){
        if (keyPressed["ControlRight"]) {
            hero.speedUp();
        }
        if (keyPressed["ControlLeft"]) {
            hero.speedDown();
        }
    }
};

Object.assign(hero, MovebleGameObjectPrototype);

hero.update = function () {
    hero.updatePosition();
    hero.updateSpeed();
}

hero.speed = 1;

monster.move = function (){
    monster.x = monster.image.width + Math.random() * (canvas.width - 3 * monster.image.width);
    monster.y = monster.image.height + Math.random() * (canvas.height - 3 * monster.image.height);
}

Object.assign(monster, MovableGameObjectPrototype);

monster.move();

const keyPressed = {};


window.addEventListener('keydown', (event) => {
    keyPressed[event.key] = true;
    keyPressed[event.code] = true;
});

hero.moveUp = function () {
    hero.y -= hero.speed;
}

hero.moveDown = function () {
    hero.y += hero.speed;
}

hero.moveRight = function () {
    hero.x += hero.speed;
}

hero.moveLeft = function () {
    hero.x -= hero.speed;
}

window.addEventListener('keyup', (event) => {
    delete keyPressed[event.key];
    delete keyPressed[event.code];
});

const gameCycle = function() {
    let winsOfHero = 0;
    hero.update();

    if (distanceBetweenTwoPoints(hero.x, monster.x, hero.y, monster.y) < hero.image.width / 2 + monster.image.width / 2) {
        console.log("Hero caught monster!!!")
        winsOfHero++;
    }
    monster.update(monster.movingTime());

    if (winsOfHero > 0){
        hero.getStarted();
        monster.move();
    }
    background.render(ctx);
    hero.render(ctx);
    monster.render(ctx);
    window.requestAnimationFrame(gameCycle);
}

window.requestAnimationFrame(gameCycle);

const game = new Game(canvas);
game.start();