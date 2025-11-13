// Music controls
const music = document.getElementById('music');
const musicBtn = document.getElementById('musicBtn');
musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play().catch(() => {}); // autoplay safety
    musicBtn.textContent = '⏸ Pause';
  } else {
    music.pause();
    musicBtn.textContent = '🎵 Play';
  }
});

// Reveal message
const msg = document.querySelector('.message');
document.getElementById('revealBtn').addEventListener('click', () => {
  msg.classList.add('revealed');
  burstConfetti(180);
});

// Candle interaction
const flame = document.querySelector('.flame');
flame.addEventListener('click', () => {
  flame.style.animationDuration = '80ms';
  flame.style.filter = 'drop-shadow(0 0 18px #ffd36b)';
  burstConfetti(120);
  setTimeout(() => {
    flame.style.animationDuration = '120ms';
    flame.style.filter = 'drop-shadow(0 0 12px #ffb347)';
  }, 800);
});

// Minimal confetti using DOM (no library)
const confettiContainer = document.getElementById('confetti');
function burstConfetti(count = 60) {
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    const size = Math.random() * 6 + 4;
    piece.style.position = 'absolute';
    piece.style.width = size + 'px';
    piece.style.height = size * 0.4 + 'px';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.top = '-10px';
    piece.style.background = randomColor();
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.borderRadius = '2px';
    piece.style.opacity = '0.9';
    piece.style.transition = 'transform 0.9s ease-out, top 1.6s ease-out, opacity 1.6s ease-out';

    confettiContainer.appendChild(piece);

    const drift = (Math.random() - 0.5) * 120;
    requestAnimationFrame(() => {
      piece.style.top = '110vh';
      piece.style.transform = `translateX(${drift}px) rotate(${360 + Math.random() * 120}deg)`;
      piece.style.opacity = '0.2';
    });

    setTimeout(() => piece.remove(), 1800);
  }
}
function randomColor() {
  const palette = ['#ff6fb3', '#7cf0ff', '#ffe066', '#9dff9d', '#b79aff'];
  return palette[Math.floor(Math.random() * palette.length)];
}