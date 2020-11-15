function GameObject(imageUrl) {
    this.imageUrl = imageUrl;
    this.ready = false;
    this.x = 0;
    this.y = 0;
}

GameObject.prototype.image = new Image();
GameObject.prototype.onload = function () {
    this.ready = true;
}

const gameObj = new GameObject('http://www.kenart.net/portfolio/images/gameprojects_alice.jpg');
console.log(gameObj);
gameObj.onload();
gameObj.image.src = gameObj.imageUrl;

console.log('------------');

console.log(gameObj.image);
console.log(gameObj);