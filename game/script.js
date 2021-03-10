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

hero.x = canvas.width / 2;
hero.y = canvas.height / 2;
hero.speed = 1;

monster.x = monster.image.width + (Math.random() * (canvas.width*0.9 - monster.image.width * 2)); // not to appear in bush
monster.y = monster.image.height + (Math.random() * (canvas.height*0.9 - monster.image.height * 2)); // not to appear in bush

const ctx = canvas.getContext('2d');

ctx.drawImage(background.image, 0, 0);
//background.image.onload = () => ctx.drawImage(background.image, 0, 0);

window.addEventListener('keydown', (event) =>{
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
    if (event.key === "ControlLeft") {
        if (hero.speed > 0) {      //doesn't works
            hero.speed *= 20;
        }
    }
    if (event.key === "ControlRight") {
        if (hero.speed > 0) {      //doesn't works
            hero.speed /= 20;
        }
    }
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
    console.log(event);
});

const gameCycle = function () {
    background.render(ctx);
    hero.render(ctx);
    monster.render(ctx);
    window.requestAnimationFrame(gameCycle);
}

window.requestAnimationFrame(gameCycle);

// setTimeout(() => {
//     background.render(ctx);
//     hero.render(ctx);
//     monster.render(ctx)},
//     1500
// );

const game = new Game(canvas);
game.start();