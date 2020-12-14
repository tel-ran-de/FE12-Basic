const colors = ['red', 'blue', 'green'];

function changeBackgroundColor() {
    let i = 0;
    return function () {
        this.style['backgroundColor'] = colors[i];
        i++;
        if (i === colors.length) {
            i = 0;
        }
    }
}

for (const element of document.querySelectorAll('p')) {
    element.addEventListener('click', changeBackgroundColor());
}
