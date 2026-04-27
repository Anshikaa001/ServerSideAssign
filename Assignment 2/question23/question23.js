const images = [
    "./images/img1.png",
    "./images/img2.png",
    "./images/img3.png",
];

let slideIndex = 0;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const imgElement = document.getElementById('slideshow-img');

    if (n >= images.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = images.length - 1;
    }

    imgElement.src = images[slideIndex];
}

showSlides(slideIndex);
