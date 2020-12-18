class Counter {
    paragraph
    counter = 0;
    time
    handler

    constructor(elementToChange, time) {
        this.paragraph = elementToChange;
        this.time = time;
    }

    start() {
        this.handler = setInterval(() => this.count(), this.time)
    };

    count() {
        this.counter++;
        this.paragraph.innerText = this.counter + "";
    }

    stop() {
        clearInterval(this.handler);
    }
}