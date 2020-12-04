const gameTime = 30*1000; //ms
let gameStop = false;

function createScore() {
    const score = new GameObject();
    score.x = 32;
    score.y = 32;
    score.wins = 0;
    score.time = gameTime; // seconds
    score.update = function(delta){
        if (this.time>0) {
            this.time -= delta;
        } else{
            gameStop = true;
            this.time = gameTime;
        }
    }

    score.render = function(ctx) {
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Monsters caught:" + this.wins, this.x, this.y);
        // ctx.textAlign = "right" ;
        ctx.fillStyle = "red";
        ctx.fillText("Time: " + this.time/1000, this.x*10, this.y);
    }
    return score;
}
