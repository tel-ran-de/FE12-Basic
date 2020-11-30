function createMonster(imageUrl, canvas) {
    const monster = new GameObject(imageUrl);

    Object.assign(monster, MovableGameObjectPrototype);

    monster.reset = function() {
        this.x = this.image.width + Math.random() * (canvas.width - 3 * this.image.width);
        this.y = this.image.height + Math.random() * (canvas.height - 3 * this.image.height);
        this.speed = 0.5;
    }

    monster.reset();

    monster.update = function (delta){
        this.speed = this.getRandomSpeed();
        this.chooseDirection(delta);
    }

    let data = new Date;
    let getTheNumber = +(data.getSeconds() * Math.random() + monster.speed).toFixed();

    monster.chooseDirection = function (delta){
        const numberForChoosingDirection = getTheNumber;
        if (numberForChoosingDirection <= 20){
            this.moveRight(delta);
            this.moveDown(delta);
        }
        if (numberForChoosingDirection > 20 && numberForChoosingDirection <= 30){
            this.moveRight(delta);
            this.moveUp(delta);
        }
        if (numberForChoosingDirection > 30 && numberForChoosingDirection <= 40){
            this.moveLeft(delta);
            this.moveUp(delta);
        }
        if (numberForChoosingDirection > 40 && numberForChoosingDirection <= 60){
            this.moveLeft(delta);
            this.moveDown(delta);
        }
    }

    monster.getRandomSpeed = function (){
        return Math.random() * (getTheNumber % 4 + 0.5);
    }

    return monster;
}
