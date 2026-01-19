let currentPage = 1;

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  currentPage++;
  document.getElementById(`page${currentPage}`).classList.add("active");
}


document.querySelectorAll('.photo-stack img').forEach(img => {
  img.addEventListener('click', () => {
    document.querySelectorAll('.photo-stack img').forEach(i => {
      i.style.zIndex = 1;
      i.style.transform = i.classList.contains('left')
        ? 'translateX(-60%) rotate(-8deg)'
        : i.classList.contains('right')
        ? 'translateX(-40%) rotate(8deg)'
        : 'translateX(-50%) rotate(0deg)';
    });

    img.style.zIndex = 5;
    img.style.transform = 'translateX(-50%) rotate(0deg) scale(1.05)';
  });
});
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  heart.style.fontSize = (16 + Math.random() * 20) + "px";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

// create hearts continuously
setInterval(createHeart, 500);
function celebrate() {
  const container = document.querySelector(".confetti-container");
  const yesButton = document.querySelector(".yes");
  const text = document.getElementById("celebrateText");

  // Animate YES button
  yesButton.classList.add("bounce");

  // Show message
  text.innerText = "ilysm ur the best teleport here rn";
  text.style.opacity = 1;

  // Generate confetti
  const colors = ["#FF3B6C", "#FFB800", "#FF6EC7", "#FF8C42", "#F50057"];
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.width = confetti.style.height = (5 + Math.random() * 10) + "px";
    confetti.style.animationDuration = (2 + Math.random() * 2) + "s";
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

