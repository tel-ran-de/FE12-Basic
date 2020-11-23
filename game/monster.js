function createMonster(imageUrl, canvas) {
    const monster = new GameObject(imageUrl);

    monster.reset = function() {
        this.x = this.image.width + Math.random() * (canvas.width - 3 * this.image.width);
        this.y = this.image.height + Math.random() * (canvas.height - 3 * this.image.height);
    }

    monster.reset();

    return monster;
}
