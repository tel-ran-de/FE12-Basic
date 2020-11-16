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

GameObject.prototype.render = function (ctx){
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

monster.x = monster.image.width + (Math.random() * (canvas.width - (monster.image.width * 2)));
monster.y = monster.image.height + (Math.random() * (canvas.height - (monster.image.height * 2)));

const ctx = canvas.getContext('2d');

ctx.drawImage(background.image, 0, 0);
//background.image.onload = () => ctx.drawImage(background.image, 0, 0);

window.addEventListener('keydown', (event) =>{
    console.log(event);
    hero.x += 1;
    hero.y += 1;
});

window.addEventListener('keyup', (event) =>{
    console.log(event);
});

const gameCycle = function (){
    console.log('gameCycle');
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
