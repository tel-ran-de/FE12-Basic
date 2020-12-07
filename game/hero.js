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
        if (this.keysPressed["ArrowUp"]) {
            this.moveUp(delta);
        }
        if (this.keysPressed["ArrowDown"]) {
            this.moveDown(delta);
        }
        if (this.keysPressed["ArrowRight"]) {
            this.moveRight(delta);
        }
        if (this.keysPressed["ArrowLeft"]) {
            this.moveLeft(delta);
        }

        if (this.keysPressed["ControlRight"]) {
            this.speedUp();
        }
        if (this.keysPressed["ControlLeft"]) {
            this.speedDown();
        }
    }
}
