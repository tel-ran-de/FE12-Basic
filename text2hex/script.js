let lenghtHEXString = 10;

function convertTextToHEX() {

    let textHEX = "";

    const text = document.querySelector('textarea').value;
    document.querySelector('div.hex').innerHTML = "";

    for (let i = 0; i < text.length; i++) {
        if (i > 1 && i % lenghtHEXString === 0) {
            textHEX += '<br>';
        }
        textHEX += text.charCodeAt(i).toString(16) + " ";
    }
    document.querySelector('div.hex').innerHTML = textHEX;
}

// trim spase-symbol at the begin and end
// Dont make "Enter"
function convertHEXToText() {
    let textFromHEX = "";
    const hex = document.querySelector('div.hex').innerHTML;
    document.querySelector('div.hex').innerHTML = "";
    let start = 0;
    let end
    let symbol;
    while (start < hex.length) {
        end = hex.indexOf(' ', start + 1);
        symbol = String.fromCharCode(parseInt(hex.substring(start, end), 16));
        start = end + 1;

        textFromHEX += symbol;
    }
    document.querySelector('div.hex').innerHTML = textFromHEX;
}
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
