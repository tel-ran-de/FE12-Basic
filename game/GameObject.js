class GameObject {


    constructor(imageUrl) {
        this.x = 0;
        this.y = 0;
        this.ready = false;
        this.image = new Image();
        this.image.onload = () => this.ready = true;
        if (imageUrl) {
            this.image.src = imageUrl;
        }
    }

    render(ctx) {
        if (this.ready) {
            ctx.drawImage(this.image, this.x, this.y);
        }
    }
}

class MovableGameObject extends GameObject {

    constructor(imageUrl, canvas) {
        super(imageUrl);
        this.speed = 0;
        this.canvas = canvas;
    }

    moveUp(time) {
        this.y = this.y - this.speed * time;
        if (this.y < 0) {
            this.y = this.canvas.height - this.y;
        }
    }

    moveDown(time) {
        this.y = Math.abs(this.y % this.canvas.height + this.speed * time);
    }

    moveLeft(time) {
        this.x =  this.x - this.speed * time;
        if (this.x < 0) {
            this.x = this.canvas.width - this.x;
        }
    }

    moveRight (time) {
        this.x = Math.abs(this.x % canvas.width + this.speed * time);
    }

    speedUp () {
        this.speed += 0.1;
        console.log(this.speed);
    }

    speedDown () {
        if (this.speed > 1)
            this.speed -= 0.1;
        console.log(this.speed);
    }
}
