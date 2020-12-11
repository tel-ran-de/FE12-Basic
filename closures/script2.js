let times = function() {
    let counter = 0;
    return function() {
        console.log(++counter);
    }
}()
