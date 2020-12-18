const $p = document.getElementsByTagName('p')[0];

let i = 0;

const handlerId = setInterval(() => {
    i++;
    $p.innerText = i;
}, 1000); // replace with counter.start(interval)

let result = Math.random() < 0.5 ? true : false; // Generate randomly: 50% - true, 50% - false
let delay = Math.random() * (5000 - 1000) + 1000; // Generate randomly: from 1000 to 5000 with 1000 step

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
        $p.innerHTML = response;
        // change text color to green
        $p.style.color = "green";
    })
    .catch(reason => {
        clearInterval(handlerId); // replace with counter.stop()
        $p.innerText = reason;
        // change text color to red
        $p.style.color = "red";

    })
    .finally(() => console.log('Request is finished'));
