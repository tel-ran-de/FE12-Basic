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
