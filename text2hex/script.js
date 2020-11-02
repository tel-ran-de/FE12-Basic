function stringToHex() {
    const str = document.getElementById('text').value;
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16) + ' ';
        if(i % 32 === 0 ){
            hex += '<br>';
        }
    }
    document.getElementById('hex').innerHTML = hex;
    return hex;
}

function hexToString(){
    const hex = (document.getElementById('text').value).match(/.{1,2}/g);
    let str = "";
    for(let i = 0; i < hex.length; i++) {
        str += String.fromCharCode(parseInt(hex[i], 16));
    }
    document.getElementById('string').innerHTML = str;
    return str;
}
