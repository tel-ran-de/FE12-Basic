const $p = document.getElementsByTagName('p')[0];
counter = new CounterObject();
counter.start();

let result = function () {
    let randomNumber = Math.floor(Math.random() * (10 - 1)) + 1;
    if (randomNumber < 6) {
        return true;
    } else {
        return false;
    }
}
let delay = (Math.floor(Math.random() * (5 - 1)) + 1) * 1000; // Generated randomly: from 1000 to 5000 with 1000 step
console.log(delay);

const promise = new Promise((resolve, reject) => {
    if (result()) {
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
        $p.style.color = "green";
    })
    .catch(reason => {
        counter.stop();
        $p.innerText = reason;
        $p.style.color = "red";
    })
    .finally(() => console.log('Request is finished'));
