const colors = ['red', 'blue', 'green'];

const createEventHandler = () => {
    let i = 0;
    return function() {
        this.style.backgroundColor = colors[i % colors.length];
        i++;
    }
}

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(element => {
        element.onclick = createEventHandler();
    }
);
