let banana = document.getElementsByClassName("hiddenskills");
var i;

for (i = 0; i < banana.length; i++) {
  banana[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}