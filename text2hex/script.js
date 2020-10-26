function makeHex() {
    let text = document.getElementById('textForAnalysis').value;
    let hex = '';
    for (let i = 0; i < text.length; i++) {
        if (i % 32 === 0) {
            hex += '<br>';
        }
        hex += '' + text.charCodeAt(i).toString(16) + " ";
    }
    return hex;
}

function showStringHex() {
    const element = document.querySelector('.result');
    element.innerHTML = makeHex();
}
