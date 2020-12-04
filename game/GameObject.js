function GameObject(imageUrl) {
    this.x = 0;
    this.y = 0;
    this.ready = false;
    this.image = new Image();
    this.gameTime = 30;
    this.image.onload = () => this.ready = true;
    if (imageUrl) {
        this.image.src = imageUrl;
    }
}

GameObject.prototype.render = function(ctx) {
    if (this.ready) {
        ctx.drawImage(this.image, this.x, this.y);
    }
}

const MovableGameObjectPrototype = {
    speed: 0,
    moveUp: function (time) {
        this.y = this.y - this.speed * time;
        if (this.y < 0) {
            this.y = canvas.height - this.y;
        }
    },
    moveDown: function (time) {
        this.y = Math.abs(this.y % canvas.height + this.speed * time);
    },
    moveLeft: function (time) {
        this.x =  this.x - this.speed * time;
        if (this.x < 0) {
            this.x = canvas.width - this.x;
        }
    },
    moveRight: function (time) {
        this.x = Math.abs(this.x % canvas.width + this.speed * time);
    },
    speedUp: function () {
        this.speed += 0.1;
        console.log(this.speed);
    },
    speedDown: function () {
        if (this.speed > 1)
            this.speed -= 0.1;
        console.log(this.speed);
    }
}

