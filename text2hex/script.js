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
    console.log(hex);
    document.querySelector('div.hex').innerHTML = "";
    for (let start = 0; start < hex.length; ) {
        console.log("start: " + start); //immer "6"
        let end = hex.indexOf(' ', start);
        console.log("end: " + end);
        let charText = hex.substr(start, end);
        let text = String.fromCharCode(parseInt(charText));
        start = end;

        textFromHEX += text;
    }
    document.querySelector('div.hex').innerHTML = textFromHEX;
}
