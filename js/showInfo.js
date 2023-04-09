export const showInfo = (dislay = 'none', htmlBlock, setName = false) => {
  const scoreboard = document.querySelector(htmlBlock);
  scoreboard.style.display = dislay;
  if (setName) {
    const blockForSetName = document.querySelector('.modal__username');
    const userName = localStorage.getItem("name");
    blockForSetName.textContent = userName;
  }
}