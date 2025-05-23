// js/hangman.js

document.addEventListener('DOMContentLoaded', () => {
  const music       = document.getElementById('hangmanMusic');
  const targetWord  = 'KINDRED';
  let correct       = Array(targetWord.length).fill('_');
  let wrongLetters  = [];

  const wordDiv     = document.getElementById('word');
  const input       = document.getElementById('letterInput');
  const guessBtn    = document.getElementById('guessBtn');
  const wrongP      = document.getElementById('wrongLetters');
  const statusP     = document.getElementById('status');
  const finishBtn   = document.getElementById('finishBtn');

  // Audio
  music.volume = 0.3;
  document.addEventListener('click', () => music.play().catch(() => {}), { once: true });

  // Render inicial del guión
  function renderWord() {
    wordDiv.innerHTML = '';
    correct.forEach(letter => {
      const span = document.createElement('span');
      span.textContent = letter;
      wordDiv.appendChild(span);
    });
  }
  renderWord();

  // Lógica de adivinar
  guessBtn.addEventListener('click', () => {
    const letter = input.value.toUpperCase();
    input.value = '';
    if (!/^[A-Z]$/.test(letter)) return;

    if (targetWord.includes(letter)) {
      [...targetWord].forEach((ch, idx) => {
        if (ch === letter) correct[idx] = letter;
      });
    } else if (!wrongLetters.includes(letter)) {
      wrongLetters.push(letter);
    }

    renderWord();
    wrongP.textContent = `Letras incorrectas: ${wrongLetters.join(' ')}`;

    // Comprueba si terminó
    if (!correct.includes('_')) {
      statusP.textContent = '¡Has nombrado a Kindred! 🐾';
      guessBtn.disabled = true;
      input.disabled    = true;
      finishBtn.classList.remove('hidden');
    }
  });

  // Continuar
  finishBtn.addEventListener('click', () => {
    window.location.href = 'siblings_dialog.html';
  });
});
