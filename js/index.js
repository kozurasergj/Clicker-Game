import { form } from './form.js';
import { levels } from './levels.js';
import { help } from './help.js';

window.addEventListener('DOMContentLoaded', () => {
  help();

  const StartGameButton = document.querySelector('.start__game');
  StartGameButton.addEventListener('click', () => {
    form() && levels();
  });

});
