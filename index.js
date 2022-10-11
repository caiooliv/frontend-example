function moveButton() {
  var randomPosition = Math.floor(Math.random() * (300 - -300)) + -300;
  document.querySelector(
    "button"
  ).style.transform = `translateX(${randomPosition}%)`;
}
