// js/intro.js

document.addEventListener('DOMContentLoaded', () => {
  const scenes = [
    "En un bosque mágico, el lobo errante Ace camina solo, buscando algo que no sabe qué es.",
    "De pronto ve un destello: ¡una luciérnaga brillante!",
    "La luciérnaga lo guía hasta un claro donde está ella...",
    "Una ovejita blanca y pura: Kiwi.",
    "Ace, tímido, quiere ofrecerle una Bebida mágica."
  ];

  let idx = 0;
  const sceneEl  = document.getElementById('scene');
  const dialogEl = document.getElementById('dialog');
  const nextBtn  = document.getElementById('nextBtn');

  function spawnFirefly() {
    // Antes de generar, eliminamos cualquier luciérnaga pendiente
    sceneEl.querySelectorAll('.firefly').forEach(f => f.remove());

    const fly = document.createElement('div');
    fly.className = 'firefly';

    // Calcular posición aleatoria
    const padX = sceneEl.clientWidth * 0.1;
    const padY = sceneEl.clientHeight * 0.1;
    const x = padX + Math.random() * (sceneEl.clientWidth - 2 * padX - 192);
    const y = padY + Math.random() * (sceneEl.clientHeight - 2 * padY - 192);

    fly.style.left = `${x}px`;
    fly.style.top  = `${y}px`;

    sceneEl.appendChild(fly);
    fly.addEventListener('click', onFireflyClick);
  }

  function onFireflyClick(e) {
    // Al hacer clic borramos esa luciérnaga y avanzamos
    e.currentTarget.remove();
    advanceScene();
  }

  function advanceScene() {
    if (idx < scenes.length) {
      dialogEl.textContent = scenes[idx++];
      if (idx < scenes.length) {
        // Generar UNA sola luciérnaga después de un breve retraso
        setTimeout(spawnFirefly, 600);
      } else {
        // Tras la última línea, mostrar botón
        nextBtn.classList.add('visible');
      }
    }
  }

  nextBtn.addEventListener('click', () => {
    window.location.href = 'cocacola.html';
  });

  // Arranca: una sola luciérnaga inicial
  spawnFirefly();
});
