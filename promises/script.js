const $p = document.getElementsByTagName('p')[0];

const counter = {
    handlerId: 0,
    start: function () {
        let i = 0;
        let interval = 1000;
        this.handlerId = setInterval(() => {
            i++;
            $p.innerText = i;
        }, interval);
    },

    stop: function () {
        clearInterval(this.handlerId);
    }
};

counter.start();

let result = Math.random() < 0.5;
let delay = Math.random() * (5000 - 1000) + 1000;

const promise = new Promise((resolve, reject) => {
    if (result) {
        setTimeout(() => {
            resolve('Hello');
        }, delay);
    } else {
        setTimeout(() => {
            reject('Error')
        }, delay)
    }
});

promise
    .then(response => {
        counter.stop();
        $p.innerText = response;
        $p.style.color = 'green';

    })
    .catch(reason => {
        counter.stop();
        $p.innerText = reason;
        $p.style.color = 'red';
        console.log($p)
    })
    .finally(() => console.log('Request is finished'));

