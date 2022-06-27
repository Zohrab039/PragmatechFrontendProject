'use strict';

const movie_selector_content = document.querySelector('.movie-selector-content');
const btn = document.querySelectorAll('.btn-primary');
const input = document.querySelector('.movie-add input');

let myNewArr = [];

btn.forEach(function(item) {
    myNewArr.push(item);
})


input.addEventListener('keypress', addElement);

function addElement(e) {
    if (e.key == 'Enter') {
        const a = document.createElement('a');
        a.classList = 'btn btn-primary';
        a.textContent = input.value;
        movie_selector_content.appendChild(a);
        myNewArr.push(a);
        input.value = '';
    }
}

console.log(btn);


movie_selector_content.addEventListener('click', select);


function select(e) {
    if (e.target.classList.contains('btn-primary')) {
        let a = e.target;

        myNewArr.forEach(item => {
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