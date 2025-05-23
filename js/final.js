// js/final.js

document.addEventListener('DOMContentLoaded', () => {
  const yesBtn     = document.getElementById('yesBtn');
  const dialogDiv  = document.getElementById('dialog');
  const avatarRow  = document.getElementById('avatarRow');
  const endingDiv  = document.getElementById('ending');

  yesBtn.addEventListener('click', () => {
    // Oculta avatares y diálogo
    avatarRow.style.display = 'none';
    dialogDiv.style.display  = 'none';

    // Muestra solo el logo, título y botón de "Prometidos"
    endingDiv.classList.remove('hidden');
  });
});
