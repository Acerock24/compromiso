// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bgMusic');
  bgMusic.volume = 0.3;    // ajusta el volumen
  bgMusic.pause();         // asegúrate de que no intente arrancar antes

  const startBtn = document.getElementById('startGame');
  startBtn.addEventListener('click', () => {
    // Aquí hay interacción: el navegador permitirá la reproducción
    bgMusic.play().catch(() => {/* si falla, no pasa nada */});
    // Ahora sí navegamos
    window.location.href = 'intro.html';
  });
});
