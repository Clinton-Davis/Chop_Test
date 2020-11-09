let quoteIndex = 1;

showQuotes(quoteIndex);

// Next/previous controls
function plusQuotes(num) {
  showQuotes((quoteIndex += num));
}

// Thumbnail image controls
function currentQuote(num) {
  showQuotes((quoteIndex = num));
}

function showQuotes(num) {
  let i;
  let quotes = document.getElementsByClassName("myQuote");
  let dash = document.getElementsByClassName("dash");
  if (num > quotes.length) {
    quoteIndex = 1;
  }
  if (num < 1) {
    quoteIndex = quotes.length;
  }
  for (i = 0; i < quotes.length; i++) {
    quotes[i].style.display = "none";
  }
  for (i = 0; i < dash.length; i++) {
    dash[i].className = dash[i].className.replace(" active", "");
  }
  quotes[quoteIndex - 1].style.display = "block";
  dash[quoteIndex - 1].className += " active";
}

let slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
  displaySlides((slide_index += n));
}
function currentSlide(n) {
  displaySlides((slide_index = n));
}
function displaySlides(n) {
  let i;
  let slides = document.getElementsByClassName("spcial_card");
  if (n > slides.length) {
    slides.index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "block";
  }
  slides[slide_index - 1].style.display = "block";
}
