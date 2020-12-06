class Hero extends MovableGameObject {

    canvasWidth;
    canvasHeight;

    constructor(imageUrl, canvas) {
        super(imageUrl);
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.reset()
    }

    reset() {
        this.x = this.canvasWidth / 2;
        this.y = this.canvasHeight / 2;
        this.speed = 0.1;
    }

    update(delta) {
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
