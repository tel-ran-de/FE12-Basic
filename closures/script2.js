var i = 0;
for (var j = 1; j <=5; j++) {
    document.getElementById('b' + j).onclick = function(j) {
        return function(event) {
            console.log('Button ' + j + ' clicked');
            i++;
            console.log('function was executed ' + i);
        }
    }(j)
}