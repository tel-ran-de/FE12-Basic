class Monster extends MovableGameObject {

    #direction;
    #movingTime;

    monster.reset = function () {
        this.x = this.image.width + Math.random() * (canvas.width - 3 * this.image.width);
        this.y = this.image.height + Math.random() * (canvas.height - 3 * this.image.height);
        this.speed = 0.5;
    }

    monster.reset();

    monster.update = function (delta) {
        this.speed = this.getRandomSpeed();
        this.chooseDirection(delta);
    }

    let data = new Date;
    let getTheNumber = +(data.getSeconds() * Math.random() + monster.speed).toFixed();

    monster.movingTime = function () {
        return monster.time = Math.random() * this.speed;
    }

    monster.chooseDirection = function (delta) {
        const numberForChoosingDirection = getTheNumber;
        if (numberForChoosingDirection <= 20) {
            this.moveRight(delta);
            this.moveDown(delta);
        }
        if (numberForChoosingDirection > 20 && numberForChoosingDirection <= 30) {
            this.moveRight(delta);
            this.moveUp(delta);
        }
        if (numberForChoosingDirection > 30 && numberForChoosingDirection <= 40) {
            this.moveLeft(delta);
            this.moveUp(delta);
        }
        if (numberForChoosingDirection > 40 && numberForChoosingDirection <= 60) {
            this.moveLeft(delta);
            this.moveDown(delta);
        }
    }

    monster.getRandomSpeed = function () {
        return Math.random() * (getTheNumber % 4 + 0.5);
    }

    update(delta) {
        if (this.#movingTime <=0) {
            this.#movingTime = Math.floor(Math.random() * 1000) + 100;
            this.speed = Math.round(Math.random() * 5 + 0.05) * 0.1;
            this.#direction = Math.floor(Math.random() * 4 + 1);
        }

        switch (this.#direction) {
            case 1: this.moveRight(delta); break;
            case 2: this.moveLeft(delta); break;
            case 3: this.moveDown(delta); break;
            case 4: this.moveUp(delta); break;
        }

        this.#movingTime -= delta;
    }
}
