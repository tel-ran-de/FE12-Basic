function GameObject(imageUrl) {
    this.x = 0;
    this.y = 0;
    this.speed = 1;
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

hero.moveUp = function () {
    this.y -= this.speed;
}
hero.moveDown = function () {
    this.y += this.speed;
}
hero.moveLeft = function () {
    this.x -= this.speed;
}
hero.moveRight = function () {
    this.x += this.speed;
}
hero.speedUp = function() {
    this.speed += 1;
    console.log(this.speed);
}
hero.speedDown = function() {
    if (this.speed > 1)
        this.speed -= 1;
    console.log(this.speed);
}

monster.x = monster.image.width + Math.random() * (canvas.width - 3 * monster.image.width);
monster.y = monster.image.height + Math.random() * (canvas.height - 3 * monster.image.height);

const ctx = canvas.getContext('2d');

window.addEventListener('keydown', (event) => {
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
    if (event.code === "ControlRight") {
        hero.speedUp();
    }
    if (event.code === "ControlLeft") {
        hero.speedDown();
    }
});

window.addEventListener('keyup', (event) => {
    console.log(event);
});

const gameCycle = function() {
    background.render(ctx);
    hero.render(ctx);
    monster.render(ctx);
    window.requestAnimationFrame(gameCycle);
}

window.requestAnimationFrame(gameCycle);

// setTimeout(() => {
//     background.render(ctx);
//     hero.render(ctx);
//     monster.render(ctx);
// }, 1500);
