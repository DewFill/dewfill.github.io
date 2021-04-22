//затемнение фона при наведении
let itemsR = document.querySelectorAll(".review-content");
let backgroundR = document.getElementById('backgroundJSReviews');
backgroundR.style.transition = 'background-color 1s linear';
for (let i = 0; i < itemsR.length; i++){
    itemsR[i].addEventListener('mouseover', function (){
        backgroundR.style.backgroundColor = '#e5dec2';
    })
}

//отмена background color
for (let i = 0; i < itemsR.length; i++){
    itemsR[i].addEventListener('mouseout', function (){
        backgroundR.style.backgroundColor = '#f5efe6';
    })
}