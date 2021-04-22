let slides = document.querySelectorAll('.radioJS');
let slideNumber = 1;
let timerId = setInterval(() => nextSlide(), 10000);

function nextSlide(qualifiedName, value) {
    for (let i = 0; i < slides.length; i++){
        if (slides[i].hasAttribute('checked')){
            slideNumber = i;
            slides[slideNumber].removeAttribute('checked');
        }
    }
    slideNumber++;
    if (slideNumber > slides.length - 1){
        slideNumber = 0;
    }
    slides[slideNumber].toggleAttribute('checked');
}