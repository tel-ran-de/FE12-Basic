const $p = document.getElementsByTagName('p')[0];

let i = 0;

const handlerId = setInterval(() => {
    i++;
    $p.innerText = i;
}, 1000); // replace with counter.start(interval)

let result = Math.random() < 0.5;
let delay = Math.random() * (5000 - 1000) + 1000;

// counter object with two methods: counter.start, counter.stop

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
        clearInterval(handlerId); // replace with counter.stop()
        $p.innerText = response;
        $p.style.color = 'green';
    })
    .catch(reason => {
        clearInterval(handlerId); // replace with counter.stop()
        $p.innerText = reason;
        $p.style.color = 'red';
    })
    .finally(() => console.log('Request is finished'));
