const paragraph = document.getElementsByTagName('p')[0];

const counter = new Counter(paragraph, 1000);

let result = Math.random() < 0.5;
let delay = 1000 + Math.round(Math.random() * 4000)

const promise = new Promise((resolve, reject) => {
    counter.start();
    if (result) {
        setTimeout(() => {
            resolve("Hello");
        }, delay);
    } else {
        setTimeout(() => {
            reject("Error")
        }, delay)
    }
});

promise
    .then(response => {
        counter.stop();
        paragraph.innerText = response;
        paragraph.style.color = 'green';
    })
    .catch(reason => {
        counter.stop();
        paragraph.innerText = reason;
        paragraph.style.color = 'red';
    })
    .finally(() => console.log("Request is finished"));

