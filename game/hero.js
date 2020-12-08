class Hero extends MovableGameObject {
    keysPressed = {};

    constructor(imageUrl, canvas) {
        super(imageUrl, canvas);
        this.reset();
    }

    reset() {
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.speed = 0.1;
    }

    update(delta, keysPressed) {
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
}
