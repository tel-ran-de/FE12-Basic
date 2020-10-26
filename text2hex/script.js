function convertToHex() {
    const textInput = getTextFromForm();
    let hex = '';
    let counter = 0;
    if (textInput !== undefined) {
        for (let i = 0; i < textInput.length; i++) {
            hex += ' ' + textInput.charCodeAt(i).toString(16);
            counter++;
            if (counter > 32) {
                hex += '<br>';
                counter = 0;
            }
        }
        insertToTheForm(hex);
    }
}

function insertToTheForm(text) {
    const element = document.getElementById('outputHex');
    element.innerHTML = text;
}

function handleOnFocus() {
    for (const element of document.querySelectorAll('.input-group div.invalid-feedback')) {
        element.style.display = 'none';
    }
}

function getTextFromForm() {
    let text = document.getElementById('textForConvert').value;
    if (text === '') {
        document.querySelector('.input-group div.invalid-feedback.empty').style.display = 'block';
        return;
    }
    if (text.split(' ').length < 2) {
        document.querySelector('.input-group div.invalid-feedback.minvalue').style.display = 'block';
        return;
    }
    return text;
}
