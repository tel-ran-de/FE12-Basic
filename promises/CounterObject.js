var handlerId;
var i = 0;
class CounterObject {
    constructor() {
        this.interval = 1000;
    }

    countTime() {
        i++;
        $p.innerText = i;
    };

    start() {
        handlerId = setInterval(this.countTime, this.interval);
    };

    stop() {
        clearInterval(handlerId);
    };
}
