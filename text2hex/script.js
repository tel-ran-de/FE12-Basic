let textHEX = "";
let lenghtHEXString = 32;
let textFromHEX = "";

function convertTextToHEX() {

    const text = document.querySelector('textarea').value;

    for (let i = 0; i < text.length; i++) {
        let a = text.charCodeAt(i);
        let b = a.toString(16);
        if (i % lenghtHEXString === 0) {
            textHEX += '<br>';
        }
        textHEX += b + " ";
    }
    document.querySelector('div.hex').innerHTML = textHEX;
}
// все зависает ((
function convertHEXToText() {
    const hex = document.querySelector('div.hex').innerHTML;
    document.querySelector('div.hex').innerHTML = "";
    let start = 0;
    while (start < hex.length ) {
        let end = hex.indexOf(' ', start);
        let charText = hex.substr(start, end);
        start = end;

        textFromHEX += charText;
    }
    document.querySelector('div.hex').innerHTML = textFromHEX;
}
