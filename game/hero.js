function createHero(imageUrl, canvas) {
    const hero = new GameObject(imageUrl);

    Object.assign(hero, MovableGameObjectPrototype);

    hero.reset = function() {
        hero.x = canvas.width / 2;
        hero.y = canvas.height / 2;
        hero.speed = 0.1;
    }

    hero.update = function(delta) {
        if (keysPressed["ArrowUp"]) {
            this.moveUp(delta);
        }
        if (keysPressed["ArrowDown"]) {
            this.moveDown(delta);
        }
        if (keysPressed["ArrowRight"]) {
            this.moveRight(delta);
        }
        if (keysPressed["ArrowLeft"]) {
            this.moveLeft(delta);
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
