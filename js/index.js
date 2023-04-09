import { form } from './form.js';
import { levels } from './levels.js';
import { checkInput } from './checkInput.js';

window.addEventListener('DOMContentLoaded', () => {
  checkInput();

  const StartGameButton = document.querySelector('.start__game');
  StartGameButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    if (form()) {
      levels();;
    }
  });

  const returnHome = document.querySelector('.modal__page');
  returnHome.addEventListener('click', () => {
    location.reload();
  });

});
