function createScore() {
    const score = new GameObject();
    score.x = 32;
    score.y = 32;
    score.wins = 0;

    score.render = function (ctx) {
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Monsters caught:" + this.wins, this.x, this.y);
    }
    return score;
}
