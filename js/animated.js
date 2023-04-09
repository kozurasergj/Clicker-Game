export const animated = () => {
  const container = document.querySelector('.container')
  container.classList.add('modal__blood');
  setTimeout(() => {
    container.classList.remove('modal__blood');
  }, 300);
};
