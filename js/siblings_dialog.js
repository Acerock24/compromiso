// js/siblings_dialog.js

document.addEventListener('DOMContentLoaded', () => {
  const music       = document.getElementById('dialogMusic');
  const dialogText  = document.getElementById('dialogText');
  const nextBtn     = document.getElementById('nextBtn');
  const aceAvatar   = document.getElementById('aceAvatar');
  const kiwiAvatar  = document.getElementById('kiwiAvatar');
  const puppySelect = document.getElementById('puppySelect');

  // Secuencia de diálogos
  const script = [
    { speaker: 'kiwi',   text: 'Kiwi: Creo que Kindred está muy solita…' },
    { speaker: 'kiwi',   text: 'Kiwi: ¿podríamos buscarle un hermanito o hermanita?' },
    { speaker: 'ace',    text: 'Ace: Mmmm… ¿puedo pensarlo?' },
    { speaker: 'kiwi',   text: 'Kiwi: ¡Porfa, sí! ¡Di que sí!' },
    { speaker: 'ace',    text: 'Ace: ¡Ok, está bien, hagámoslo!' }
  ];
  let idx = 0;
 
  // Audio auto-desbloqueo
  music.volume = 0.3;
  document.addEventListener('click', () => music.play().catch(()=>{}), { once: true });

  function updateDialog() {
    // Muestra el diálogo actual
    const line = script[idx];
    dialogText.textContent = line.text;

    // Avatares
    aceAvatar.classList.add('hidden');
    kiwiAvatar.classList.add('hidden');
    if (line.speaker === 'ace')      aceAvatar.classList.remove('hidden');
    if (line.speaker === 'kiwi')     kiwiAvatar.classList.remove('hidden');

    // Si hemos llegado al final de script, transformamos el botón
    if (idx === script.length - 1) {
      nextBtn.textContent = 'Elige un hermanit@ para Kindred';
    } else {
      nextBtn.textContent = 'Siguiente';
    }

    // Avanzamos índice
    idx++;
  }

  // Al hacer click en el botón
  nextBtn.addEventListener('click', () => {
    // Si aún quedan líneas, actualizamos diálogo
    if (idx < script.length) {
      updateDialog();
    } else {
      // Ya terminamos todos los diálogos: vamos a find_yellow.html
      window.location.href = 'find_yellow.html';
    }
  });

  // Inicia la primera línea
  updateDialog();
});
