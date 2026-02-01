const pages = document.querySelectorAll(".card");

function showPage(id) {
  pages.forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseenter", () => {
  const parent = noBtn.parentElement.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  const maxX = parent.width - btn.width;
  const maxY = parent.height - btn.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  showPage("page-hurray");
  confetti({
    particleCount: 80,
    spread: 60,
    origin: { y: 0.6 }
  });
});

document.querySelectorAll(".next").forEach(btn => {
  btn.addEventListener("click", () => {
    showPage(btn.dataset.next);
  });
});

const gallery = document.getElementById("gallery");
for (let i = 1; i <= 9; i++) {
  const img = document.createElement("img");
  img.src = `favorite_${i}.png`;
  gallery.appendChild(img);
}
