const yes = document.getElementById("yes");
const no = document.getElementById("no");
const arena = document.getElementById("arena");
const card = document.getElementById("ask");

const overlay = document.getElementById("overlay");
const title = document.getElementById("overlayTitle");
const body = document.getElementById("overlayBody");
const next = document.getElementById("next");

let step = 0;

no.addEventListener("mouseenter", () => {
  const a = arena.getBoundingClientRect();
  const n = no.getBoundingClientRect();
  no.style.transform = `translate(${Math.random()*(a.width-n.width)}px, ${Math.random()*(a.height-n.height)}px)`;
});

yes.addEventListener("click", () => {
  card.classList.add("isHidden");
  overlay.classList.add("isVisible");
  step = 1;

  title.textContent = "Hurray!";
  body.innerHTML =
    "Mark the 14th of February as our day in your calendar.<br>I can’t wait to spend time with you.";
  next.textContent = "There’s more →";

  confetti({
    particleCount: 60,
    spread: 70,
    origin: { y: .6 },
    colors: ["#e63973","#7a1f3d","#ffffff"]
  });
});

next.addEventListener("click", () => {
  step++;

  if (step === 2) {
    title.textContent = "Our first picture";
    body.innerHTML = `
      <img src="us.png">
      <p>This is our picture together.<br>I can’t wait to take the next one.</p>`;
    next.textContent = "There’s more →";
  }

  else if (step === 3) {
    title.textContent = "My favorite pictures of you";
    let imgs = "";
    for (let i=1;i<=9;i++) imgs += `<img src="favorite_${i}.png">`;
    body.innerHTML = `<div class="grid">${imgs}</div>`;
    next.textContent = "One last thing →";
  }

  else if (step === 4) {
    title.textContent = "One last thing";
    body.innerHTML = "<p>TBA</p>";
    next.style.display = "none";
  }
});
