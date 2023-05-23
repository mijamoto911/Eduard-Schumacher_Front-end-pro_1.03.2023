var slides = document.getElementsByClassName('slide');
var currentSlide = 0;
var nextButton = document.getElementById('nextButton');
var prevButton = document.getElementById('prevButton');



function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[n].style.display = 'block';
    currentSlide = n;

    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }

    if (currentSlide === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }
}

function nextSlide() {
    if (currentSlide === slides.length - 1) {

        showSlide(0);
    } else {

        showSlide(currentSlide + 1);
    }
}

function previousSlide() {
    if (currentSlide === 0) {

        showSlide(slides.length - 1);
    } else {

        showSlide(currentSlide - 1);
    }
}
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', previousSlide);



showSlide(0);