function frequencyDictionary(str) {
    const dictionary = {};

    const wordsArray = wordsStringToArray(str);

    console.log(wordsArray);

    for (let i = 0; i < wordsArray.length; i++) {
        if (dictionary[wordsArray[i]]) {
            dictionary[wordsArray[i]]++;
        } else {
            dictionary[wordsArray[i]] = 1;

        }
    }
    return dictionary;
}

function wordsStringToArray(str) {
    return str.split(/[\s.,?:!;\-"]+/)
        .filter(function(el) {
            return el.length !== 0
        });
}

let onCliBut = document.querySelector('.btn-btn-primary');
onCliBut.onclick=function () {
    const text = document.getElementById('textForAnalysis').value;
    if (text === '') {
        document.querySelector('.input-group div.invalid-feedback.empty').style.display = 'block';
        return;
    }
    if (wordsStringToArray(text).length < 2 ) {
        document.querySelector('.input-group div.invalid-feedback.minvalue').style.display = 'block';
        return;
    }
    insertIntoTable(frequencyDictionary(text));


}

function handleOnFocus() {
    for (const element of document.querySelectorAll('.input-group div.invalid-feedback')) {
        element.style.display = 'none';
    }

}

function insertIntoTable(wordsObject) {
    const element = document.querySelector('table.table tbody');
    let toBeInserted ='';
    let i =1;
        for (const word in wordsObject) {

               toBeInserted +=`<tr><th scope="row">${i++}</th><td>${word}</td><td>${wordsObject[word]}</td></tr>`;


    }
        element.innerHTML=toBeInserted;
}

let butTopThree =document.querySelector('.topThree');

let butBottomThree =document.querySelector('.BottomThree');
let butShowAll =document.querySelector('.ShowAll');

butTopThree.onclick=function () {
    console.log(butTopThree.value);
  let a =6;
  let b = 10;
  let  elem =+ a+b;
  let toBeInserted1 ='';
  const element1 = document.querySelector('table.table tbody');
  toBeInserted1 += `<tr><th scope="row">${a}</th><td>${b}</td><td>${elem}</td></tr>`;
  element1.innerHTML = toBeInserted1;
}

butBottomThree.onclick=function () {

   /* const element2 = document.querySelector('table.table tbody');
    let toBeInserted2 = '';
    let k = 1;
    for (let i = 1; i < zzz; i++) {

        toBeInserted2 += `<tr><th scope="row">${k++}</th><td>${zzz}</td><td>${tttt}</td></tr>`;
*/

      /*  let r = ' ALFAVIT ';
        let t = ' ABWGD ';
        let ttt = r + t;
        let toBeInserted2 = '';
        toBeInserted2 += `<tr><th scope="row">${r}</th><td>${t}</td><td>${ttt}</td></tr>`;
       */
  /*
    element2.innerHTML = toBeInserted2;*/
}
butShowAll.onclick=function () {
    const text1 = document.getElementById('textForAnalysis').value;
    if (text1 === '') {
        document.querySelector('.input-group div.invalid-feedback.empty').style.display = 'block';
        return;
    }
    if (wordsStringToArray(text1).length < 2) {
        document.querySelector('.input-group div.invalid-feedback.minvalue').style.display = 'block';
        return;
    }

    insertIntoTable2(frequencyDictionary(text1));



}
function handleOnFocus() {
    for (const element of document.querySelectorAll('.input-group div.invalid-feedback')) {
        element.style.display = 'none';
    }

}

function insertIntoTable2(wordsObject3) {
    const element3 = document.querySelector('table.table tbody');
    let toBeInserted3 = '';
    let i = 1;

    for (let word3 in wordsObject3) {
        console.log(wordsObject3[word3]);
        toBeInserted3 += `<tr><th scope="row">${i++}</th><td>${word3}</td><td>${wordsObject3[word3]}</td></tr>`;

        // function mysort(){
        //     wordsObject3[word3].cellIndex.sort(function (a, b) {
        //         return a - b });
        //         console.log(mysort);
        //

        //
        // function myFunction2() {
        //     element3.sort(function (a, b) {
        //         return a - b
        //     }); }}
let maisort = toBeInserted3;
console.log(maisort);

//
// ?????????????????????????????????????
//         wordsObject3[word3].sort()
// ??????????????????????????????????????


    }
    element3.innerHTML = toBeInserted3;

}