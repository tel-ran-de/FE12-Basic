function GameObject(imageUrl) {
    this.x = 0;
    this.y = 0;
    this.ready = false;
    this.image = new Image();
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
    moveUp: function () {
        this.y = this.y - this.speed;
        if (this.y < 0) {
            this.y = canvas.height - this.y;
        }
    },
    moveDown: function () {
        this.y = Math.abs(this.y % canvas.height + this.speed);
    },
    moveLeft: function () {
        this.x =  this.x - this.speed;
        if (this.x < 0) {
            this.x = canvas.width - this.x;
        }
    },
    moveRight: function () {
        this.x = Math.abs(this.x % canvas.width + this.speed);
    },
    speedUp: function() {
        this.speed += 1;
        console.log(this.speed);
    },
    speedDown: function() {
        if (this.speed > 1)
            this.speed -= 1;
        console.log(this.speed);
    }
}

