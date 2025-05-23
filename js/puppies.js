// js/puppies.js

document.addEventListener('DOMContentLoaded', () => {
  const music   = document.getElementById('puppiesMusic');
  const viewBtn = document.getElementById('viewPuppiesBtn');

  // Ajuste de volumen y desbloqueo en móviles
  music.volume = 0.3;
  document.addEventListener('click', () => music.play().catch(() => {}), { once: true });

  // Al pulsar, vamos a la página de encontrar a Kindred
  viewBtn.addEventListener('click', () => {
    window.location.href = 'find_kindred.html';
  });
});
