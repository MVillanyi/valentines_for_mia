const noButton = document.getElementById("no");

noButton.addEventListener("mouseenter", () => {
  const padding = 20;

  const maxX = window.innerWidth - noButton.offsetWidth - padding;
  const maxY = window.innerHeight - noButton.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noButton.style.position = "fixed";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});
