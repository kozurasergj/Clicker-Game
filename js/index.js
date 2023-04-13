import { form } from './modules/form.js';
import { levels } from './modules/levels.js';
import { helper } from './modules/helper.js';

window.addEventListener('DOMContentLoaded', () => {
  helper();

  const startGameBtn = document.querySelector('.start__game');
  startGameBtn.addEventListener('click', () => {
    form() && levels();
  });
});
