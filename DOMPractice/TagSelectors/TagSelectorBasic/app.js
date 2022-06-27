'use strict';

const movie_selector_content = document.querySelector('.movie-selector-content');

movie_selector_content.addEventListener('click', select);


function select(e) {
    if (e.target.classList.contains('btn-primary')) {
        let a = e.target;
        a.classList.toggle('select');
        const icon = document.createElement('i');
        icon.className = 'fa-regular fa-circle-check';

        if (a.children[0]) {
            a.children[0].remove();
        } else {
            a.appendChild(icon);
        }

    }
}