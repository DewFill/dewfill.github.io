"use strict";
let advantage = document.querySelectorAll('.advantage');
for (let elem of advantage) {
    elem.addEventListener('mouseover', function() {
        for (let e of advantage) {
            if (elem.id !== e.id){
                e.style.filter = 'grayscale(100%)';
                e.style.transition = 'all .1s linear';
            }
        }
    });
}

for (let elem of advantage) {
    elem.addEventListener('mouseout', function () {
        for (let e of advantage){
            e.style.filter = 'grayscale(0%)';
            e.style.transition = 'all .1s linear';
        }
    })
}