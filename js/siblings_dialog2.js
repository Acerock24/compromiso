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
    { speaker: 'ace',    text: 'Ace: Sabes?' },
    { speaker: 'kiwi',   text: 'Kiwi: Si?' },
    { speaker: 'ace',    text: 'Ace: ¡Mencanta verte feliz!' },
    { speaker: 'kiwi',   text: 'Kiwi: A mi, Me da pena.' },
    { speaker: 'ace',    text: 'Ace: No deberia ser asi.' },
    { speaker: 'kiwi',   text: 'Kiwi: entiendo' },
    { speaker: 'ace',    text: 'Ace: Desde aquel dia, que te conoci...' },
    { speaker: 'kiwi',   text: 'Kiwi: ah?' },
    { speaker: 'ace',    text: 'Ace: Ese dia que te vi por primera vez, me senti  flechado.' },
    { speaker: 'kiwi',   text: 'Kiwi: Ya basta  me sonrojas.' },
    { speaker: 'kiwi',   text: 'Kiwi: Pero tu tambien me flechaste.' },
    { speaker: 'ace',    text: 'Ace: Gracias por aceptar la cocacola!!!' },
    { speaker: 'ace',    text: 'Ace: Jajajaja.' },
    { speaker: 'kiwi',   text: 'Kiwi: No se ni por que la acepte! no me gusta que me inviten cosas  me da pena!' },
    { speaker: 'ace',    text: 'Ace: Fue gracias a eso que pude acercarme mas!' },
    { speaker: 'kiwi',   text: 'Kiwi: Mmmmmm, o sea, era parte de tu plan?' },
    { speaker: 'ace',    text: 'Ace: No, solo fue un detalle, pero hay algo qu nunca te pregunte! ' },
    { speaker: 'kiwi',   text: 'Kiwi: Que cosa?' },
    { speaker: 'ace',    text: 'Ace: Estaba rica la cocacola?' },
    { speaker: 'kiwi',   text: 'Kiwi: Pues! Sabia a cocacola.' },
    { speaker: 'ace',    text: 'Ace: Siempre tu! con tus elocuencias, ojala nunca cambies!' },
    { speaker: 'kiwi',   text: 'Kiwi: Por Que lo dices?' },
    { speaker: 'ace',    text: 'Ace: Pues... porque  asi me haces feliz!' },
        { speaker: 'ace',    text: 'Ace: Y quiero decirte que te amo!' },
        { speaker: 'ace',    text: 'Ace: Quisiera preguntarte algo.' },
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
      nextBtn.textContent = 'Puedes preguntarme lo que sea';
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
      window.location.href = 'final.html';
    }
  });

  // Inicia la primera línea
  updateDialog();
});
