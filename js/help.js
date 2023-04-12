export const help = (block = '.modal__spendtime', time = '.00') => {

  const modalElem = document.querySelector(block);
  modalElem.textContent = `Time: ${time}`;


  const cleaningNameInput = document.querySelector('.user__name');  // Очистка инпута
  cleaningNameInput.addEventListener('input', () => {
    cleaningNameInput.value = cleaningNameInput.value.replace(/[а-яА-ЯіІїЇєЄ]/g, '').trim();
  });

  const cleaningNicknameInput = document.querySelector('.user__nickname');  // Очистка инпута
  cleaningNicknameInput.addEventListener('input', () => {
    cleaningNicknameInput.value = cleaningNicknameInput.value.replace(/[а-яА-ЯіІїЇєЄ]/g, '').trim();
  });

  document.querySelector('.registration-form').addEventListener('submit', (event) => {
    event.preventDefault();
  });

  const returnHomeBtn = document.querySelectorAll('.modal__page');
  returnHomeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      location.reload();
    });
  });

}
