const pages = document.querySelectorAll(".card");

function revealImagesWithin(container) {
  const imgs = Array.from(container.querySelectorAll(".content-image"));
  imgs.forEach(img => {
    img.classList.remove("is-visible");

    const show = () => {
      requestAnimationFrame(() => img.classList.add("is-visible"));
    };

    if (img.complete && img.naturalWidth > 0) {
      show();
    } else {
      img.addEventListener("load", show, { once: true });
      img.addEventListener("error", show, { once: true });
    }
  });
}

function showPage(id) {
  pages.forEach(p => p.classList.add("hidden"));
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove("hidden");
  revealImagesWithin(el);
}

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const buttonsArea = document.querySelector(".buttons");

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
noBtn.addEventListener("click", moveNoInsideBox);

yesBtn.addEventListener("click", () => {
  showPage("page-hurray");

  if (typeof confetti === "function") {
    confetti({
      particleCount: 70,
      spread: 55,
      startVelocity: 18,
      scalar: 0.9,
      origin: { y: 0.65 },
      colors: ["#7b0b2a", "#c2185b", "#ffffff"]
    });

    setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 45,
        startVelocity: 14,
        scalar: 0.85,
        origin: { y: 0.6 },
        colors: ["#7b0b2a", "#c2185b"]
      });
    }, 220);
  }
});

document.querySelectorAll(".next").forEach(btn => {
  btn.addEventListener("click", () => {
    const next = btn.getAttribute("data-next");
    if (next) showPage(next);
  });
});

const revealImg = document.getElementById("revealImg");
const revealCount = document.getElementById("revealCount");
const revealNext = document.getElementById("revealNext");

let revealIndex = 1;
const revealTotal = 10;

function setReveal(index) {
  if (!revealImg || !revealCount || !revealNext) return;

  revealImg.classList.remove("is-visible");

  setTimeout(() => {
    revealImg.src = `favorite_${index}.png`;
    revealImg.alt = `Favorite ${index}`;
    revealCount.textContent = `${index} of ${revealTotal}`;
    revealImagesWithin(document.getElementById("page-favorites"));
  }, 120);

  if (index >= revealTotal) {
    revealNext.textContent = "One last thing";
  } else {
    revealNext.textContent = "Show me the next one";
  }
}

if (revealImg && revealCount && revealNext) {
  setReveal(revealIndex);

  revealNext.addEventListener("click", () => {
    if (revealIndex >= revealTotal) {
      showPage("page-last");
      return;
    }
    revealIndex += 1;
    setReveal(revealIndex);
  });
}
