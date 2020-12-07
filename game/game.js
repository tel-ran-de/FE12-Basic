class Game {

    canvas;
    monsters = [];
    ctx;
    before;
    now;
    keysPressed = {};

    constructor(canvas, numberOfMonsters = 5) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.background = new GameObject('images/background.png');
        this.hero = new Hero('images/hero.png', canvas);
        this.score = new Score(5000);

        for (let i = 0; i < numberOfMonsters; i++) {
            this.monsters.push(new Monster('images/monster.png', canvas));
        }

        window.addEventListener('keydown', (event) => {
            (this.keysPressed)[event.key] = true;
            this.keysPressed[event.code] = true;
        });

        window.addEventListener('keyup', (event) => {
            this.keysPressed[event.key] = false;
            this.keysPressed[event.code] = false;
        });
        window.requestAnimationFrame(this.gameCycle);
        console.log(this.keysPressed);
    }

    start() {
        this.before = Date.now();
        window.requestAnimationFrame(this.gameCycle);
    }

    distanceBetweenTwoPoints = (x1, x2, y1, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    gameCycle = () => {
        this.now = Date.now();

        let delta = this.now - this.before;

        this.score.update(delta, this.keysPressed);

        if (!this.score.isGameOver) {
            this.hero.update(delta, this.keysPressed);

            this.monsters.forEach(monster => {
                if (this.distanceBetweenTwoPoints(this.hero.x, monster.x, this.hero.y, monster.y) < this.hero.image.width / 2 + monster.image.width / 2) {
                    this.score.wins++;
                    this.hero.reset();
                    monster.reset();
                }
                monster.update(delta);
            })
        }

        this.background.render(this.ctx);
        this.hero.render(this.ctx);
        this.monsters.forEach(monster => monster.render(this.ctx));
        this.score.render(this.ctx);

        this.before = this.now;
        window.requestAnimationFrame(this.gameCycle);
    }
}
