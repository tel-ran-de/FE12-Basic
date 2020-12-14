const color = ['red', 'blue', 'green'];

let $paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < $paragraphs.length; i++) {
    $paragraphs[i].onclick = function () {
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
    }();
}
