class Monster extends Hero {

    #direction;
    #movingTime;

    constructor(imageUrl, canvas) {
        super(imageUrl, canvas);
        this.#direction = 0;
        this.#movingTime = 0;
    }

    reset() {
        this.x = this.image.width + Math.random() * (this.canvasHeight - 3 * this.image.width);
        this.y = this.image.height + Math.random() * (this.canvasHeight - 3 * this.image.height);
    }

    update(delta) {
        if (this.#movingTime <= 0) {
            this.#movingTime = Math.floor(Math.random() * 1000) + 100;
            this.speed = Math.round(Math.random() * 5 + 0.05) * 0.1;
            this.#direction = Math.floor(Math.random() * 4 + 1);
        }

        switch (this.#direction) {
            case 1:
                this.moveRight(delta);
                break;
            case 2:
                this.moveLeft(delta);
                break;
            case 3:
                this.moveDown(delta);
                break;
            case 4:
                this.moveUp(delta);
                break;
        }

        this.#movingTime -= delta;
    }
}

