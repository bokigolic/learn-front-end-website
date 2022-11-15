/*Show more*/
const text = document.getElementById("p-tag");
const button = document.getElementById("show-more")

button.onclick = function() {

if(text.className=='open'){
  text.className = ""
  button.innerHTML="Show more"

}else{
  text.className  = "open"
  button.innerHTML="Show les"
}
};

/*Show more*/


/*Modal*/
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

/*Modal*/
