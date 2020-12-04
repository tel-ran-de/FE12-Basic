function createScore() {
    const score = new GameObject();
    score.x = 32;
    score.y = 32;
    score.wins = 0;


    score.render = function(ctx) {
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Monsters caught: " + this.wins, this.x, this.y);
        ctx.fillText("Game time: " + this.gameTime, this.x, this.y + 28);
        if (this.gameTime <= 0) {
            ctx.fillText("Game over! Your score is: " + score.wins + "!", 100, 220);
        }
    }
    return score;
}
