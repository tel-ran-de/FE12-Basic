function GameObject(imageUrl) {
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.ready = false;
    this.image = new Image();
    this.image.onload = () => this.ready = true;
    if (imageUrl) {
        this.image.src = imageUrl;
    }
}

GameObject.prototype.render = function(ctx) {
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

hero.x = canvas.width / 2;
hero.y = canvas.height / 2;

monster.x = Math.floor(Math.random() * ((canvas.width - monster.image.width * 2) - monster.image.width)) + monster.image.width;
monster.y = Math.floor(Math.random() * ((canvas.height - monster.image.height * 2) - monster.image.height)) + monster.image.height;


const ctx = canvas.getContext('2d');

hero.speed = 10;

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
window.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.key === "ArrowUp") {
        hero.moveUp();
    }
    if (event.key === "ArrowDown") {
        hero.moveDown();
    }
    if (event.key === "ArrowRight") {
        hero.moveRight();
    }
    if (event.key === "ArrowLeft") {
        hero.moveLeft();
    }
});

window.addEventListener('keydown', (event) => {
    console.log(event);
});

const gameCycle = function() {
    background.render(ctx);
    hero.render(ctx);
    monster.render(ctx);
    window.requestAnimationFrame(gameCycle);
}

window.requestAnimationFrame(gameCycle);
