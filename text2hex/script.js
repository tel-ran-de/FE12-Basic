let textHEX = "";
let lenghtHEXString = 32;
let textFromHEX = "";

function convertTextToHEX() {

    const text = document.querySelector('textarea').value;

    for (let i = 0; i < text.length; i++) {
        let a = text.charCodeAt(i);
        let b = a.toString(16);
        if (i > 1 && i % lenghtHEXString === 0) {
            textHEX += '<br>';
        }
        textHEX += b + " ";
    }
    document.querySelector('div.hex').innerHTML = textHEX;
}

function convertHEXToText() {
    const hex = document.querySelector('div.hex').innerHTML;
    console.log(hex);
    document.querySelector('div.hex').innerHTML = "";
    let start = 0;
    let  text;
    while (start<hex.length) {
        console.log("start: " + start);
        let end = hex.indexOf(' ', start + 1);
        console.log("end: " + end);
        let charText = hex.substring(start, end);
        console.log(charText);
        text = String.fromCharCode(parseInt(charText.toString(), 16));
        start = end + 1;

        textFromHEX += text;
    }
    document.querySelector('div.hex').innerHTML = textFromHEX;
}
