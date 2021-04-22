// document.querySelectorAll(".card-container").forEach(box =>
//     box.addEventListener("mouseover", function (){
//         console.log('work');
//     }
// ));


//затемнение фона при наведении
let items = document.querySelectorAll(".card-container");
let background = document.getElementById('backgroundJS');
background.style.transition = 'background-color 1s linear';
for (let i = 0; i < items.length; i++){
    items[i].addEventListener('mouseover', function (){
        background.style.backgroundColor = '#e5dec2';
    })
}

//отмена background color
for (let i = 0; i < items.length; i++){
    items[i].addEventListener('mouseout', function (){
        background.style.backgroundColor = '#f5efe6';
    })
}