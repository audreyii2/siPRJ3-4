document.querySelector('.toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
});

let currentHighlightIndex = -1;
let highlights = [];