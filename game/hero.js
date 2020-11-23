function createHero(imageUrl, canvas) {
    const hero = new GameObject(imageUrl);
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    Object.assign(hero, MovableGameObjectPrototype);

    hero.speed = 1;

    hero.update = function() {
        if (keysPressed["ArrowUp"]) {
            hero.moveUp();
        }
        if (keysPressed["ArrowDown"]) {
            hero.moveDown();
        }
        if (keysPressed["ArrowRight"]) {
            hero.moveRight();
        }
        if (keysPressed["ArrowLeft"]) {
            hero.moveLeft();
        }

        if (keysPressed["ControlRight"]) {
            hero.speedUp();
        }
        if (keysPressed["ControlLeft"]) {
            hero.speedDown();
        }
    }

    return hero;
}
