let text=document.querySelector('.strtohex');
// let out=document.querySelector('.out');
const buttonHex=document.querySelector('.but');
let arrhex=document.querySelector('.hax');
let hex='';
let hextoStArr=document.querySelector('.hextostr');

buttonHex.onclick= () => {

    let valumTexAry = text.value;
    console.log(valumTexAry);
    for (let i = 0; i < valumTexAry.length; i++) {
        hex += valumTexAry.charCodeAt(i).toString(16);
         }
      arrhex.value=hex;
}
const buttonabc=document.querySelector('.butabc');
let abc='';
buttonabc.onclick=()=>{
    let hexto= arrhex.value.toString();
       console.log(hexto);
      for (let j = 0; j < hexto.length; j +=2) {
       abc += String.fromCharCode(parseInt(hexto.substr(j,2), 16));
}
    console.log(abc);
    hextoStArr.innerHTML =abc;
}
console.log(abc);
let beistex=document.querySelector('.beispil');
function selek(){
  let valselk=beistex.value;
  switch (valselk) {
      case 'nulewoe':
          break;
      case 'Text':
         text.value= ' JavaScript: Convert Hexadecimal to ASCII format ';
         break;
      case 'Number':
          text.value=    23403457537493875934;
break;
      default:
          text.value='error';
  }
}
document.querySelector('.beispil').onchange = selek;
function clean(){
    arrhex.value='';

}

document.querySelector('.clen').onclick = clean;
function clean1(){
    text.value='';

}

document.querySelector('.clen1').onclick = clean1;