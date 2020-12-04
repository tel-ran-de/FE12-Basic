const numberOfMonsters = 5;
let isEnd = false;

const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

const background = new GameObject('images/background.png');
const hero = createHero('images/hero.png', canvas);
const score = createScore();
//const finish = createFinish();

const monsters = [];
for (let i = 0; i < numberOfMonsters; i++) {
    monsters.push(createMonster('images/monster.png', canvas));
}

const distanceBetweenTwoPoints = (x1, x2, y1, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

const keysPressed = {};

window.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    keysPressed[event.code] = true;
});

window.addEventListener('keyup', (event) => {
    keysPressed[event.key] = false;
    keysPressed[event.code] = false;
});

const ctx = canvas.getContext('2d');
let countTime = function () {

    if (score.time <= 0) {
        clearInterval(countTime());
        score.gameTime = 0;
        hero.ready = false;
        monsters.forEach(monster => monster.ready = false);
        isEnd = true;
        return

    }
    score.time -= 1;
}
setInterval(countTime, 1000);

let before = Date.now();

const gameCycle = function () {
    let now = Date.now();
    let delta = now - before;

    if (isEnd){
        return;
    }

    hero.update(delta);

    monsters.forEach(monster => {
        if (distanceBetweenTwoPoints(hero.x, monster.x, hero.y, monster.y) < hero.image.width / 2 + monster.image.width / 2) {
            score.wins++;
            hero.reset();
            monster.reset();
            console.log("Hero caught monster!!!")
        }
        monster.update(delta);
    })

    background.render(ctx);
    hero.render(ctx);
    monsters.forEach(monster => monster.render(ctx));
    score.render(ctx);

    before = now;
    window.requestAnimationFrame(gameCycle);
}

window.requestAnimationFrame(gameCycle);