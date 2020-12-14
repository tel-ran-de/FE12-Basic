const colors = ['white', 'red', 'blue', 'green'];

function backgroundColorSwitch() {
    let color = 0;
    return function () {
        color++;
        this.style['backgroundColor'] = colors[color % colors.length]
    }
}

document.querySelectorAll('p').forEach(function (el) {
    el.addEventListener('click', backgroundColorSwitch())
});
