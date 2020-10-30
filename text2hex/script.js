function textToHex() {
    const text = document.querySelector('textarea').value;
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += text.charCodeAt(i).toString(16);
    }
    const element = document.querySelector('.hex-result');
    element.innerHTML = result;
}

function hexToString() {
    const hex = document.querySelector('textarea').value;
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
    }
    const element = document.querySelector('.hex-string');
    element.innerHTML = str;
}