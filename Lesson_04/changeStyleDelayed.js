// changeStyleDelayed.js

function changeStyleDelayed(id, delay) {
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
            element.style.backgroundColor = 'lightblue';
            element.style.color = 'white';
        } else {
            console.warn(`Элемент с id "${id}" не найден.`);
        }
    }, delay);
}