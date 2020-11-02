function makeHex() {
    let text = document.getElementById('textForAnalysis').value;
    let replaced = text.replace(' ', '').toString();
    let result = '';
    for (let i = 0; i < replaced.length; i += 2) {
        result += String.fromCharCode(parseInt(replaced.substr(i, 2), 16)) + ' ';
    }
    return result;
}

function showHexToString() {
    const element = document.querySelector('.result');
    element.innerHTML = makeHex();
}
