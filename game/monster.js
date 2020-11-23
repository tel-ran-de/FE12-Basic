function createMonster(imageUrl, canvas) {
    const monster = new GameObject(imageUrl);

    monster.x = monster.image.width + Math.random() * (canvas.width - 3 * monster.image.width);
    monster.y = monster.image.height + Math.random() * (canvas.height - 3 * monster.image.height);

    return monster;
}
