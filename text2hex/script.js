const text = {};

function textToHex (text){
    let hexText = '';
    for (let i = 0; i<text.length; i++){
        hexText += text.charCodeAt(i).toString(16) + ' ';
    }
    return hexText;
}