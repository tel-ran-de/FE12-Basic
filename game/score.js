class Score {

    score = new GameObject();
    timeOfGame;

    constructor (time) {
        this.score.x = 32;
        this.score.y = 32;
        this.score.wins = 0;
        this.score.timeToEnd = this.timeOfGame;
        this.score.isGameOver = false;
}

    update (delta) {
        if (this.timeToEnd <= 0) {
            this.isGameOver = true;
            this.timeToEnd = 0;
        } else {
            this.timeToEnd -= delta;
        }

        if (keysPressed["Space"]){
            this.isGameOver = false;
            this.timeToEnd = this.timeOfGame;
        }
    }

    render (ctx) {
        ctx.fillStyle = "rgb(62,49,5)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        if (this.isGameOver) {
            ctx.fillText("The game is over! Your score is: " + this.score.wins, this.score.x + 50, this.score.y + 150);
            ctx.fillText("If you want to play again, press Space", this.score.x + 30, this.score.y + 200);
        }
        else {
            ctx.fillText("Monsters caught:" + this.score.wins, this.score.x, this.score.y);
            ctx.fillText("Seconds left: " + Math.floor(this.timeToEnd / 1000), this.score.x + 250, this.score.y);
        }
    }
}