function textToHex() {
    const text = document.querySelector('textarea').value;
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += ' ' + text.charCodeAt(i).toString(16);
    }

    const element = document.querySelector('.hex-result');
    element.innerHTML = result;
}
