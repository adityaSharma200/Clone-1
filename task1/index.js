const section = document.querySelector("section");
const slides = document.querySelectorAll(".slide");
let slideIndex = 0 ;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
}

function nextSlide() {
    slideIndex = (slideIndex+1) % slides.length;
    showSlide(slideIndex);
}

setInterval(nextSlide,5000);