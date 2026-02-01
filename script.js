const yes = document.getElementById("yes");
const no = document.getElementById("no");
const card = document.getElementById("ask");
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlayText = document.getElementById("overlayText");
const next = document.getElementById("next");

no.addEventListener("mouseenter", () => {
  const x = Math.random() * 240;
  const y = Math.random() * 70;
  no.style.transform = `translate(${x}px, ${y}px)`;
});

yes.addEventListener("click", () => {
  card.classList.add("isHidden");

  overlayTitle.textContent = "Hurray!";
  overlayText.innerHTML =
    "Mark the 14th of February as our day in your calendar.<br>I can’t wait to spend time with you.";

  overlay.classList.add("isVisible");

  confetti({
    particleCount: 60,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#e63973", "#7a1f3d", "#ffffff"],
    scalar: 0.9
  });

  setTimeout(() => {
    confetti({
      particleCount: 35,
      spread: 55,
      origin: { y: 0.55 },
      colors: ["#e63973", "#7a1f3d"],
      scalar: 0.8
    });
  }, 250);
});

next.addEventListener("click", () => {
  overlay.classList.remove("isVisible");
});
