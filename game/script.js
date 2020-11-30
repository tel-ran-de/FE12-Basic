const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

const background = new GameObject('images/background.png');
const hero = createHero('images/hero.png', canvas);
const monsters = [];
monsters.push(createMonster('images/monster.png', canvas));
monsters.push(createMonster('images/monster.png', canvas));

const score = createScore();

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

let before = Date.now();

const gameCycle = function() {
    let now = Date.now();
    let delta = now - before;

    hero.update(delta);
    for (let monster of monsters) {
        if (distanceBetweenTwoPoints(hero.x, monster.x, hero.y, monster.y) < hero.image.width / 2 + monster.image.width / 2) {
            score.wins++;
            hero.reset();
            monster.reset();
            console.log("Hero caught monster!!!")
        }
        monster.update(delta);
    }


    background.render(ctx);
    hero.render(ctx);
    for (let monster of monsters) {
        monster.render(ctx);
    }
    score.render(ctx);

    before = now;

    window.requestAnimationFrame(gameCycle);
}

window.requestAnimationFrame(gameCycle);
