function createScore() {
    const score = new GameObject();
    score.x = 32;
    score.y = 32;
    score.wins = 0;
    score.timeToEnd = 5000;
    score.isGameOver = false;

    score.update = function (delta) {
        if (this.timeToEnd <= 0) {
            this.isGameOver = true;
            this.timeToEnd = 0;
        } else {
            this.timeToEnd -= delta;
        }
    }

    score.render = function (ctx) {
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        if (this.isGameOver) {
            ctx.fillText("The game is over! Your score is: " + this.wins, this.x + 50, this.y + 150);
        }
        else {
            ctx.fillText("Monsters caught:" + this.wins, this.x, this.y);
            ctx.fillText("Seconds left: " + Math.floor(this.timeToEnd / 1000), this.x + 250, this.y);
        }
    }
    return score;
}
