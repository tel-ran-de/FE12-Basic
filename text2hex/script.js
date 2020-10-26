let textHEX;
let lenghtHEXString = 32;

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
