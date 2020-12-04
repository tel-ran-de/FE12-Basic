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

        if (keysPressed["Space"]){
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
            ctx.fillText("The game is over! Your score is: " + this.wins, this.x + 50, this.y + 150);
            ctx.fillText("If you want to play again, press Space", this.x + 30, this.y + 200);
        }
        else {
            ctx.fillText("Monsters caught:" + this.wins, this.x, this.y);
            ctx.fillText("Seconds left: " + Math.floor(this.timeToEnd / 1000), this.x + 250, this.y);
        }
    }
    return score;
}
