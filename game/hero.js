function createHero(imageUrl, canvas) {
    const hero = new GameObject(imageUrl);

    Object.assign(hero, MovableGameObjectPrototype);

    hero.reset = function() {
        hero.x = canvas.width / 2;
        hero.y = canvas.height / 2;
        hero.speed = 1;
    }

    hero.update = function() {
        if (keysPressed["ArrowUp"]) {
            this.moveUp();
        }
        if (keysPressed["ArrowDown"]) {
            this.moveDown();
        }
        if (keysPressed["ArrowRight"]) {
            this.moveRight();
        }
        if (keysPressed["ArrowLeft"]) {
            this.moveLeft();
        }

        if (keysPressed["ControlRight"]) {
            this.speedUp();
        }
        if (keysPressed["ControlLeft"]) {
            this.speedDown();
        }
    }

    hero.reset();

    return hero;
}
