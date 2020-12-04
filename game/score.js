function createScore() {
    const score = new GameObject();
    score.x = 32;
    score.y = 32;
    score.wins = 0;

    score.time = 5;

    score.render = function (ctx) {
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(``, this.x, this.y);
        if (this.time <= 0) {
            ctx.fillText(`Game over! Your score is ${this.wins}!`, 125, 200);
        }else{
            ctx.fillText(`Monsters caught: ${this.wins} and Time: ${this.time}`, this.x, this.y);
        }

    }
    return score;
}

