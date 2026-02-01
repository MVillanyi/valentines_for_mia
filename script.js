const pages = document.querySelectorAll(".card");

function showPage(id) {
  pages.forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const buttonsArea = noBtn.parentElement;

function moveNoInsideBox() {
  const area = buttonsArea.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  const maxX = area.width - btn.width;
  const maxY = area.height - btn.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  const currentRight = parseFloat(getComputedStyle(noBtn).right) || 0;
  const baseX = maxX - currentRight;

  const dx = x - baseX;

  noBtn.style.transform = `translate(${dx}px, ${y}px)`;
}

noBtn.addEventListener("mouseenter", moveNoInsideBox);
noBtn.addEventListener("pointerenter", moveNoInsideBox);

yesBtn.addEventListener("click", () => {
  showPage("page-hurray");
  if (typeof confetti === "function") {
    confetti({
      particleCount: 60,
      spread: 55,
      origin: { y: 0.6 }
    });
  }
});

document.querySelectorAll(".next").forEach(btn => {
  btn.addEventListener("click", () => {
    showPage(btn.dataset.next);
  });
});

const gallery = document.getElementById("gallery");
if (gallery) {
  for (let i = 1; i <= 9; i++) {
    const img = document.createElement("img");
    img.src = `favorite_${i}.png`;
    gallery.appendChild(img);
  }
}
