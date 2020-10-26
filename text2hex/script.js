function toHex() {
    const str = document.getElementById('text').value;
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16) + ' ';
        if(i > 32){
            hex += '<br>';
        }
    }
    document.getElementById('result').innerHTML = hex;
    return hex;
}
