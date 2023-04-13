export const animated = () => {
  const modalBloodEfect = document.querySelector('.modal__blood');
  modalBloodEfect.style.display = 'block';
  setTimeout(() => {
    modalBloodEfect.style.display = 'none';
  }, 300);
};
