const words = ["Web Developer.", "Web designer.", "UI/UX."];
let i = 0;
let counter;
function typeNow() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("text").innerHTML += word.shift();
    } else {
      deleteNow();
      return false;
    }
    counter = setTimeout(loopTyping, 200);
  };
  loopTyping();
}
function deleteNow() {
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("text").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typeNow();
      return false;
    }
    counter = setTimeout(loopDeleting, 20);
  };
  loopDeleting();
}
typeNow();
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 150) {
      navbar.classList.add("fixed");

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        navbar.classList.remove("hidden");
      } else {
        // Scrolling down
        navbar.classList.remove("hidden");
      }
    } else {
      navbar.classList.remove("fixed");
    }

    lastScrollY = currentScrollY;
  });
});
