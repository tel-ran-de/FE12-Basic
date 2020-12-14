
// Simple promise example
const somePromise = new Promise((resolve) => {
    setTimeout(() => resolve("Hello from promise"), 5000)
});

somePromise
    .then((str) => console.log(str))

console.log("Hello from usual js script");
