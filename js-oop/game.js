function GameObject(imageUrl) {
    this.x = 0;
    this.y = 0;
    this.ready=false;
    this.image = new Image();
    this.image.imageUrl=imageUrl;
    this.image.src = imageUrl !== undefined ? imageUrl : "";
}

GameObject.prototype.isLoaded = function() {
    this.ready = true;
}

function onLoadInit() {
    const object1 = new GameObject("https://www.imgonline.com.ua/examples/bee-on-daisy.jpg");
    object1.image.onload = function() {
        object1.isLoaded();
    }

    object1.image.addEventListener('load', function() {
        console.log("image is loaded: ", object1.ready);
        const element = document.getElementById("canvas")
        element.setAttribute("src", object1.image.src);
        element.setAttribute("width", "200");
        element.setAttribute("height", "200");
    }, false);

    console.log(object1.image, "Load image...");
}

onLoadInit();
