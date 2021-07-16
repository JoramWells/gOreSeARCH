const text = "wtf";
const speed = 50;

var form = document.getElementById("form");
function handleSubmit(e) {
  e.preventDefault();
}
form.addEventListener("submit", handleSubmit);

const typeWriter = () => {
  if (text.length) {
    document.getElementById("type").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

const header = document.querySelector(".navbar");
window.onscroll = function () {
  var top = window.scrollY;
  if (top >600) {
  header.classList.add("active");
} else {
  header.classList.remove("active");
}
};

