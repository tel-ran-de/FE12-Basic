const colors = ['red', 'blue', 'green'];


const paragraphs = document.getElementsByTagName('p');
for (var j = 0; j < paragraphs.length; j++) {
    let i = 0;
    paragraphs[j].onclick = function (i) {
        return function (event) {
            i = (i + 1) % colors.length;
            this.style.backgroundColor = colors[i];
        }
    }(i);
}

