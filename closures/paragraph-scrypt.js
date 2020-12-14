const color = ['red', 'blue', 'green'];

for (let i = 1; i < color.length; i++) {
    let $paragraph = document.getElementById('p' + i);
    $paragraph.onclick = function (i) {
        let n = 0;
        return function (event) {
            if (n < color.length) {
                this.style.backgroundColor = color[n];
            } else {
                this.style.backgroundColor = null;
                n = -1;
            }
            n++;
        };
    }(i);
}
