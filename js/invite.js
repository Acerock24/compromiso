// js/invite.js

document.addEventListener('DOMContentLoaded', () => {
  const inviteMusic = document.getElementById('inviteMusic');
  const acceptBtn   = document.getElementById('acceptBtn');
  const declineBtn  = document.getElementById('declineBtn');
  const dialogP     = document.querySelector('.dialog-box p');

  // Volumen y desbloqueo en móviles
  inviteMusic.volume = 0.3;
  document.addEventListener('click', () => {
    inviteMusic.play().catch(() => {});
  }, { once: true });

  acceptBtn.addEventListener('click', () => {
    window.location.href = 'pizza.html';
  });

  declineBtn.addEventListener('click', () => {
    dialogP.textContent = 'Kiwii: Creo que mejor después...';
    declineBtn.disabled = true;
    acceptBtn.textContent = '¡Claro, vamos!';
  });
});
