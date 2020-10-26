let text=document.querySelector('.arryal');
let out=document.querySelector('.out');
const button1=document.querySelector('.but');
let hex='';
button1.onclick= () => {
    let valumTexAry = text.value;
    console.log(valumTexAry);
    for (let i = 0; i < valumTexAry.length; i++) {
        hex += ' ' + valumTexAry.charCodeAt(i).toString(16);
    }
    console.log(hex);
    out.innerHTML =hex;

}
