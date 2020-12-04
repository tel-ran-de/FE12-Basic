function createMonster(imageUrl, canvas) {
    const monster = new GameObject(imageUrl);

    Object.assign(monster, MovableGameObjectPrototype);

    monster.reset = function() {
        this.x = this.image.width + Math.random() * (canvas.width - 3 * this.image.width);
        this.y = this.image.height + Math.random() * (canvas.height - 3 * this.image.height);
        this.speed = 0.5;
    }

    monster.reset();

    monster.update = function (delta) {
        this.moveRight(delta);
        this.moveDown(delta);
        /*
        1. Generate random number defines how much time monster will move.
        2. Generate random number defines a direction (up, down, left, right and their combinations)
        3. Generate random number defines monster's speed.
        4. Move monster for the defines period of time in (1)
        */
    }

    return monster;
}
