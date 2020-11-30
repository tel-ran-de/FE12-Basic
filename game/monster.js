function createMonster(imageUrl, canvas) {
    const monster = new GameObject(imageUrl);

    Object.assign(monster, MovableGameObjectPrototype);
    monster.reset = function () {
        this.x = this.image.width + Math.random() * (canvas.width - 3 * this.image.width);
        this.y = this.image.height + Math.random() * (canvas.height - 3 * this.image.height);
        this.speed = Math.floor(Math.random() * (4 - 1) + 1);
    }
    monster.reset();

    monster.randomMonsterDelta = function () {
        this.randomMonsterDelta = Math.floor(Math.random() * (10 - 2) + 2);
    }
    monster.randomMonsterDelta();

    monster.randomDirection = function () {
        this.randomDirection = Math.floor(Math.random() * (4 - 1) + 1);
    }

    monster.randomDirection();

    monster.update = function (delta) {
        if (this.randomDirection === 1) {
            this.moveRight(this.randomMonsterDelta);
        }
        if (this.randomDirection === 2) {
            this.moveDown(this.randomMonsterDelta);
        }
        if (this.randomDirection === 3) {
            this.moveLeft(this.randomMonsterDelta);
        }
        if (this.randomDirection === 4) {
            this.moveUp(this.randomMonsterDelta);
        }
    }
    /*
    1. Generate random number defines how much time monster will move.
    2. Generate random number defines a direction (up, down, left, right and their combinations)
    3. Generate random number defines monster's speed.
    4. Move monster for the defines period of time in (1)
    */
    return monster;
}
