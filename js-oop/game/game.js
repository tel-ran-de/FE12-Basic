function GameObject(imageUrl) {
    this.image = new Image();
    if (imageUrl !== undefined) this.image.src = imageUrl;
    this.ready = false;
    this.x = 0;
    this.y = 0;
    this.image.onload = function () {   //doesn't work, I don't understand how to change it to make it works
        getReadyOn();
    }
}

function getReadyOn(){
    this.ready = true;
}

const gameObj = new GameObject('http://www.kenart.net/portfolio/images/gameprojects_alice.jpg');
console.log(gameObj);
console.log('------------');
gameObj.image.onload(undefined);
console.log(gameObj);