const gameTime = 5 * 1000; //ms
let gameStop = false;

function createScore() {
    const score = new GameObject();
    score.x = 32;
    score.y = 32;
    score.wins = 0;
    score.time = gameTime; // seconds
    score.update = function (delta) {
        if (this.time > 0) {
            gameStop = false;
            this.time -= delta;
            score.render(ctx);
            // console.log(this.time / 1000);
        } else {
            gameStop = true;
            this.time = 0;

        }
    }

    score.render = function (ctx) {
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Monsters caught:" + this.wins, this.x, this.y);
        // ctx.textAlign = "right" ;
        ctx.fillStyle = "red";
        ctx.fillText("Time: " + Math.floor(this.time / 1000), this.x * 10, this.y);
        if (!gameStop){
            ctx.fillStyle = "white";
            ctx.fillText("Monsters caught:" + this.wins, this.x, this.y);
            ctx.fillStyle = "red";
            ctx.fillText("Time: " + Math.floor(this.time / 1000), this.x * 10, this.y);
        } else{
            ctx.textAlign = "center";
            ctx.fillStyle = "yellow";
            ctx.fillText("Game is over! Monsters caught: " + this.wins, canvas.width/2, canvas.height/2);

        }
    }
    return score;
}
