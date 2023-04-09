export const displayModal = (display = 'none', levelNumber = 1) => {
  const modal = document.querySelector('.modal');
  modal.style.display = display;
  const level = modal.querySelector('.modal__levels');
  level.textContent = `LEVEL: ${levelNumber}`;
}