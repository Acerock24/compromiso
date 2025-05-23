// js/pizza.js

document.addEventListener('DOMContentLoaded', () => {
  const music         = document.getElementById('pizzaMusic');
  const ingredientBtns = document.querySelectorAll('.ingredient');
  const pizzaBase      = document.getElementById('pizzaBase');
  const finishBtn      = document.getElementById('finishBtn');
  const messageEl      = document.getElementById('message');
  const MAX_TOPPINGS   = 10;
  let countToppings    = 0;
  let readyToProceed   = false;

  // Volumen y desbloqueo en móviles
  music.volume = 0.3;
  document.addEventListener('click', () => music.play().catch(() => {}), { once: true });

  // Coloca un topping
  function placeTopping(src, w, h) {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'topping';
    img.style.width  = `${w}px`;
    img.style.height = `${h}px`;

    // Centrado para queso/salsa, aleatorio para el resto
    let x, y;
    if (src.includes('queso') || src.includes('salsa')) {
      x = (pizzaBase.clientWidth  - w) / 2;
      y = (pizzaBase.clientHeight - h) / 2;
    } else {
      x = Math.random() * (pizzaBase.clientWidth  - w);
      y = Math.random() * (pizzaBase.clientHeight - h);
    }

    img.style.left = `${x}px`;
    img.style.top  = `${y}px`;
    pizzaBase.appendChild(img);

    // Actualiza contador
    countToppings++;
    messageEl.textContent = `Ingredientes: ${countToppings}/${MAX_TOPPINGS}`;

    // Cuando llegues al máximo, habilita el botón
    if (countToppings >= MAX_TOPPINGS) {
      finishBtn.disabled = false;
      finishBtn.classList.add('enabled');
      finishBtn.textContent = 'Terminar Pizza';
    }
  }

  // Vincula cada botón
  ingredientBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (readyToProceed) return;      // ya completo, no coloca más
      const w = parseInt(btn.dataset.width, 10);
      const h = parseInt(btn.dataset.height,10);
      placeTopping(btn.dataset.img, w, h);
    });
  });

  // Control del botón de terminar / siguiente misión
  finishBtn.addEventListener('click', () => {
    if (finishBtn.disabled) return;

    if (!readyToProceed) {
      // Primer clic: marca listo para avanzar
      messageEl.textContent = '¡Pizza completada! Preparando siguiente misión…';
      finishBtn.textContent = 'Siguiente misión';
      readyToProceed = true;
    } else {
      // Segundo clic: navega
      window.location.href = 'puppies.html';
    }
  });
});
