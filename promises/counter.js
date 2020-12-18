class Counter {
    elementToShowCounterIn
    counter = 0;
    interval
    handlerId

    constructor(elementToShowCounterIn, interval) {
        this.elementToShowCounterIn = elementToShowCounterIn;
        this.interval = interval;
    }

    start() {
        this.handlerId = setInterval(() => this.count(), this.interval)
    }

    count() {
        this.counter++;
        this.elementToShowCounterIn.innerText = this.counter;
    }

    stop() {
        clearInterval(this.handlerId);
    }
}
