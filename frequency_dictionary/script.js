function onButtonClick() {
    const text = document.getElementById('textForAnalysis').value;
    let quantityWords = (document.getElementById('textForAnalysis').value).split(/[\s.,?:!;\-"]+/).length
    console.log(quantityWords);

    if (text === '') {
        document.querySelector('textarea#textForAnalysis + div.invalid-feedback').style.display = 'block';
    }
    if (quantityWords < 2) {
        document.getElementById('inputError').innerHTML = 'Please type more than 1 word !!!';
    }
}
function handleOnFocus() {
        document.querySelector('textarea#textForAnalysis + div.invalid-feedback').style.display = 'none';
    }
