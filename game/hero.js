class Hero extends MovableGameObject {

    constructor(imageUrl, canvas) {
        super(imageUrl, canvas);
        this.reset();
    }

    reset() {
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.speed = 0.1;
    }

    update(delta) {
        if (game.keysPressed["ArrowUp"]) {
            this.moveUp(delta);
        }
        if (game.keysPressed["ArrowDown"]) {
            this.moveDown(delta);
        }
        if (game.keysPressed["ArrowRight"]) {
            this.moveRight(delta);
        }
        if (game.keysPressed["ArrowLeft"]) {
            this.moveLeft(delta);
        }

        if (game.keysPressed["ControlRight"]) {
            this.speedUp();
        }
        if (game.keysPressed["ControlLeft"]) {
            this.speedDown();
        }
    }
}
