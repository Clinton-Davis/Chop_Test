var quoteIndex = 1;
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
