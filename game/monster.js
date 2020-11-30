function createMonster(imageUrl, canvas) {
    const monster = new GameObject(imageUrl);

    Object.assign(monster, MovableGameObjectPrototype);

    monster.direction = 0;
    monster.movingTime = 0;

    monster.reset = function() {
        this.x = this.image.width + Math.random() * (canvas.width - 3 * this.image.width);
        this.y = this.image.height + Math.random() * (canvas.height - 3 * this.image.height);
    }

    monster.reset();

    monster.update = function (delta) {
        if (this.movingTime <=0) {
            this.movingTime = Math.floor(Math.random() * 1000) + 100;
            this.speed = Math.round(Math.random() * 5 + 0.05) * 0.1;
            this.direction = Math.floor(Math.random() * 4 + 1);
        }

        switch (this.direction) {
            case 1: this.moveRight(delta); break;
            case 2: this.moveLeft(delta); break;
            case 3: this.moveDown(delta); break;
            case 4: this.moveUp(delta); break;
        }

        this.movingTime -= delta;
    }

    return monster;
}
