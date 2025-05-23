// js/find_kindred.js

document.addEventListener('DOMContentLoaded', () => {
  const grid        = document.getElementById('puppyGrid');
  const imgs        = grid.querySelectorAll('img');
  const feedbackDiv = document.getElementById('feedback');
  const confirmBtn  = document.getElementById('confirmBtn');

  // desbloqueo de audio en móviles
  const music = document.getElementById('puppiesMusic');
  music.volume = 0.3;
  document.addEventListener('click', () => music.play().catch(() => {}), { once: true });

  // Mensajes para cachorros equivocados
  const hints = [
    '¡Es hermoso!',
    '¡Huele a lechita!',
    '¡Qué orejas tan bellas!'
  ];

  imgs.forEach(img => {
    img.addEventListener('click', () => {
      const correct = img.dataset.correct === 'true';

      if (correct) {
        // resaltamos la imagen correcta
        img.style.borderColor = '#00c853';
        feedbackDiv.textContent = '¡Podemos quedarnos con ella?';
        confirmBtn.classList.remove('hidden');
      } else {
        // efecto visual y hint aleatorio
        img.style.borderColor = '#d50000';
        const hint = hints[Math.floor(Math.random() * hints.length)];
        feedbackDiv.textContent = hint;
        // resetear borde tras breve tiempo
        setTimeout(() => img.style.borderColor = 'transparent', 600);
      }
    });
  });

  confirmBtn.addEventListener('click', () => {
    window.location.href = 'hangman2.html';
  });
});
