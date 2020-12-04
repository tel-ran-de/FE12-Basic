function createScore(time) {
    const score = new GameObject();
    const timeOfGame = time;
    score.x = 32;
    score.y = 32;
    score.wins = 0;
    score.timeToEnd = timeOfGame;
    score.isGameOver = false;

    score.update = function (delta) {
        if (this.timeToEnd <= 0) {
            this.isGameOver = true;
            this.timeToEnd = 0;
        } else {
            this.timeToEnd -= delta;
        }

        if (keysPressed["Space"]) {
            this.isGameOver = false;
            this.timeToEnd = timeOfGame;
        }
    }

    score.render = function (ctx) {
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        if (this.isGameOver) {
            ctx.textAlign = "center";
            ctx.fillStyle = "yellow";
            ctx.fillText("The game is over! Your score is: " + this.wins, canvas.width / 2, canvas.height / 2);
            ctx.fillText("If you want to play again, press Space", canvas.width / 2, canvas.height / 2 + this.y);
        } else {
            ctx.fillStyle = "white";
            ctx.fillText("Monsters caught:" + this.wins, this.x, this.y);
            ctx.fillStyle = "red";
            ctx.fillText("Seconds left: " + Math.floor(this.timeToEnd / 1000), this.x + 250, this.y);
        }
    }
    return score;
}
