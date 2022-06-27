'use strict';

const movie_selector_content = document.querySelector('.movie-selector-content');
const btn = document.querySelectorAll('a');



movie_selector_content.addEventListener('click', select);


function select(e) {
    if (e.target.classList.contains('btn-primary')) {
        let a = e.target;

        btn.forEach(item => {
            if (item.classList.contains('select')) {
                item.classList = 'btn btn-primary';
                item.children[0].remove();
            }
        })

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