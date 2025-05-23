// js/cocacola.js

document.addEventListener('DOMContentLoaded', () => {
  const coke    = document.getElementById('coke');
  const kiwii   = document.getElementById('kiwii');
  const message = document.getElementById('message');
  const nextBtn = document.getElementById('nextBtn');
  const music   = document.getElementById('cokeMusic');
  const arena   = coke.parentElement;

  let attempts   = 0;
  const MAX_TRIES = 5;
  let offsetX, offsetY, dragging = false;

  // Ajuste de audio y desbloqueo en móviles
  music.volume = 0.3;
  document.addEventListener('click', () => music.play().catch(() => {}), { once: true });

  // Calcular y aplicar posición inicial de la lata
  const arenaRect = arena.getBoundingClientRect();
  const initX = arenaRect.width * 0.12;
  const initY = arenaRect.height - coke.clientHeight - arenaRect.height * 0.1;
  coke.style.left = `${initX}px`;
  coke.style.top  = `${initY}px`;

  // Inicia drag
  coke.addEventListener('pointerdown', e => {
    dragging = true;
    coke.setPointerCapture(e.pointerId);
    const rect = coke.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    coke.classList.add('dragging');
  });

  // Mueve con drag
  coke.addEventListener('pointermove', e => {
    if (!dragging) return;
    const r = arena.getBoundingClientRect();
    let x = e.clientX - r.left - offsetX;
    let y = e.clientY - r.top  - offsetY;
    // Limitar dentro del arena
    x = Math.max(0, Math.min(r.width - coke.clientWidth, x));
    y = Math.max(0, Math.min(r.height - coke.clientHeight, y));
    coke.style.left = `${x}px`;
    coke.style.top  = `${y}px`;
  });

  // Soltar drag
  coke.addEventListener('pointerup', e => {
    dragging = false;
    coke.releasePointerCapture(e.pointerId);
    coke.classList.remove('dragging');
    checkDrop();
  });

  // Verifica colisión con Kiwii
  function checkDrop() {
    const c = coke.getBoundingClientRect();
    const k = kiwii.getBoundingClientRect();
    const centerX = c.left + c.width / 2;
    const centerY = c.top  + c.height / 2;

    if (
      centerX > k.left &&
      centerX < k.right &&
      centerY > k.top &&
      centerY < k.bottom
    ) {
      attempts++;
      if (attempts < MAX_TRIES) {
        kiwii.style.transform = 'translateY(-100px)';
        message.textContent = `Intento ${attempts}/${MAX_TRIES}: ¡Kiwi esquivó!`;
        setTimeout(() => { kiwii.style.transform = ''; }, 400);
      } else {
        message.textContent = '¡Kiwi acepta la Coca-Cola! ✅';
        nextBtn.classList.remove('hidden');
      }
    }
  }

  nextBtn.addEventListener('click', () => {
    window.location.href = 'invite.html';
  });
});
