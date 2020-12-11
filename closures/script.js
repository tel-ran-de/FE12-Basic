var i;
for (i = 1; i <=5; i++) {
    document.getElementById('b' + i).onclick = function() {
        console.log('Button ' + i + 'clicked');
    }
}
