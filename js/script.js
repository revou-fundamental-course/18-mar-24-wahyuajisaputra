document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name == "") {
        alert("Nama tidak valid!");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Email tidak valid!");
        return false;
    }

    alert('Berhasil');

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

    return false;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function joinAlert() {
    alert('Berhasil Bergabung');
}


const slides = Array.from(document.getElementsByClassName("slider-image"));
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

slides[currentSlide].classList.add("active");

setInterval(nextSlide, 3000);
