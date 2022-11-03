/*Hello world animations

const words = document.getElementsByClassName('word');
const wordArray = [];
const currentWord = 0;

words[currentWord].style.opacity = 1;
for (const i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  const cw = wordArray[currentWord];
  const nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (const i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (const i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = 'letter out';
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function () {
    nw[i].className = 'letter in';
  }, 340 + (i * 80));
}

function splitLetters(word) {
  const content = word.innerHTML;
  word.innerHTML = '';
  const letters = [];
  for (const i = 0; i < content.length; i++) {
    const letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
*/


// Modal button funcionality

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*Hamburger menu*/



/*Hamburger menu*/





