const charactersArray = [];
const string = {};
function stringToCharactersArray (string){
    for(let i = 0; i<string.length; i++){
        charactersArray.push(string.charAt[i]);
    }
    return charactersArray;
}
/*let string1 = "sahglkhsdfbkgskdjg"
stringToCharactersArray(string1);
console.log(charactersArray)*/

function textToHex (array){
    for (let i = 0; i<charactersArray.length; i++){
        console.log(charactersArray[i].charCodeAt(0).toString(16));
    }
}