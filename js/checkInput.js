export const checkInput = () => {
  const cleaningNameInput = document.querySelector('.user__name');  // Очистка инпута
  cleaningNameInput.addEventListener('input', () => {
    cleaningNameInput.value = cleaningNameInput.value.replace(/[а-яА-ЯіІїЇєЄ]/g, '').trim();
  });
}
