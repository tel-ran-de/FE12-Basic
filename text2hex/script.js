function toHex() {
    const str = document.getElementById('text').value;
    let hex = '';
    for (let i=0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(32) + ' ';
    }
    document.getElementById('result').innerHTML = hex;
    return hex;
}
