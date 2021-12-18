// ---------------------------------------------------------
// Humberger Menu
// =========================================================

(() => {
  // All variables
  const humbergerMenu = document.getElementById("humbergerMenu");
  const getInTouch = document.getElementById("getInTouch");
  const infoBoxes = document.querySelectorAll(".info-box");

  getInTouch.addEventListener("click", function (e) {
    e.preventDefault();
    humbergerMenu.classList.toggle("humberger-active");

    infoBoxes.forEach(function (infoBox, index) {
      if (infoBox.style.animation) {
        infoBox.style.animation = "";
      } else {
        infoBox.style.animation =
          "slideAnimation 0.3s ease forwards " + (index / 10 + 0.5) + "s";
      }
    });
  });
})();
