function onClickHandler() {
    const text = document.getElementById('text-container').value;
    console.log(text);
    const hex = convertToHex(text);
    console.log(hex);
    insertIntoHexContainer(hex);
}

function convertToHex(text) {
    const hex = [];
    for (let i = 0; i < text.length; i++) {
        hex[i] = text.charCodeAt(i).toString(16);
    }
    return hex;
}

function insertIntoHexContainer(hex) {
    const hexContainer = document.getElementById('hex-container');
    let hexText = '';
    for (let i = 0; i < hex.length; i++) {
        if (i !== 0 && i % 32 === 0) {
            hexText += '<br>';
        }

        hexText += hex[i];

        if ((i + 1) % 32 !== 0 && (i + 1) !== hex.length) {
            hexText += ' ';
        }
    }
    hexContainer.innerHTML = hexText;
}
