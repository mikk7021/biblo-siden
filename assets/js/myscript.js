const btn = document.querySelector('#submit2newsletter');
const errorWrapper = document.querySelector('#error-wrapper');
let email = document.getElementById('email')
let fullname = document.getElementById('fullname')
let number = document.getElementById('number')
let textarea = document.getElementById('messageinput')
let slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



function removetext() {
errorWrapper.innerHTML = null;
}




function validate () {

    
if (fullname.value === "" || !isValidAlpha(fullname.value)){
errorWrapper.innerHTML = "Navn er ikke korrekt"
}
    
else if (email.value === "" || !isValidEmail(email.value)){
errorWrapper.innerHTML = "Email er ikke korrekt"
}

else if (number.value === "" || !isValidNumber(number.value)){
errorWrapper.innerHTML = "TLF nummer er ikke korrekt"
}

else if (textarea.value === "") {
  errorWrapper.innerHTML = "Du skal skrive en besked"
}

else {
errorWrapper.innerHTML = " Formularen er afsendt"
}
}
function isValidAlpha(value) {
  let pattern = /^[A-ZÆØÅa-zæøå ]+$/;
  return pattern.test(value);
  }

//Tjekker om værdi har en gyldig email syntaks
function isValidEmail(value) {
let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
return pattern.test(value);
}

//Tjekker om værdi er 8 tal
function isValidNumber(value) {
let pattern = /[0-9]{8}/;
return pattern.test(value);
}


