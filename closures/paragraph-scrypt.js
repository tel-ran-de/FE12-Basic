const color = ['red', 'blue', 'green'];

for (let i = 1; i < 4; i++) {
    let $paragraph = document.getElementById('p' + i);
    $paragraph.onclick = function (i) {
        let n = 0;
        return function (event) {
            if (n > 2) {
                this.style.color = null;
                n = 0;
            } else this.style.color = color[n];
            n++;
        };
    }(i);
}
