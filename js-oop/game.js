function GameObject(imageUrl) {
    this.x = 0;
    this.y = 0;
    this.image = new Image();
    if (imageUrl) {
        this.image.src = imageUrl;
    }
    this.ready = false;
}
//Uncaught TypeError: Cannot set property 'onload' of undefined  (game.js:11 )
GameObject.prototype.image.onload = function () {
    this.ready = true;
}

const image1 = new GameObject('http://pngimg.com/uploads/goblin/goblin_PNG32.png');
const image2 = new GameObject();
image1.image.onload(undefined);
// image2.onload();

console.log(image1);
console.log(image2);
