let textHEX;

function convertTextToHEX(){

   const text = document.querySelector('textarea').value;
    for (let i = 0; i < text.length; i++) {
        let a = text.charCodeAt(i);
        let b = a.toString(16);
        if (i%32===0){
            console.log("i%32===0");
            textHEX +='\n';
        } textHEX += b + " ";
    }
    document.querySelector('div.hex').innerHTML = textHEX;

}
