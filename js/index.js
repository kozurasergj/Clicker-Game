import { form } from './form.js';
import { levels } from './levels.js';
import { cleaning } from './checkInput.js';

window.addEventListener('DOMContentLoaded', () => {
  cleaning();
  
  const StartGameButton = document.querySelector('.start__game');
  StartGameButton.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращает отправку формы по умолчанию
    if (form()) {
      levels();
    }
  });

});
