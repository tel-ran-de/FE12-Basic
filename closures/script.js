// ES5 closures
for (var j = 1; j <=5; j++) {
    document.getElementById('b' + j).onclick = function(i) {
        return function(event) {
            console.log('Button ' + j + ' clicked');
        }
    }(j)
}

// ES2015 closures
/*
for (let i = 1; i <=5; i++) {
    document.getElementById('b' + i).onclick = function() {
            console.log('Button ' + i + ' clicked');
    }
}
*/

var a = 5;
function printA() {
    console.log(a);
}

function plusFunctionGenerator(a) {
    return function(b) {
        return a + b;
    }
}

var onePlusB = plusFunctionGenerator(1);
console.log(onePlusB(2));
