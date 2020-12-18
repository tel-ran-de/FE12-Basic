const paragraph = document.getElementsByTagName('p')[0];

const handlerId = new Counter(paragraph, 1000);
handlerId.start();

let dateForGenerator = new Date;
let generator = function (){
    return Math.floor(dateForGenerator.getMilliseconds() * Math.random() + 1);
}

let result = function (){
    return generator() > 500;
}

let delay = 5000;

const promise = new Promise((resolve, reject) => {
    let i = result();
    if (i) {
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
        handlerId.stop();
        paragraph.innerText = response;
        paragraph.style.color = 'green';
    })
    .catch(reason => {
        handlerId.stop();
        paragraph.innerText = reason;
        paragraph.style.color = 'red';
    })
    .finally(() => console.log("Request is finished"));





