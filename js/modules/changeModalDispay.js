export const changeModalDispay = (dislay = 'none', htmlBlock, setName = false) => {
  const scoreboard = document.querySelector(htmlBlock);
  scoreboard.style.display = dislay;
  if (setName) {
    const blocksForSetName = document.querySelectorAll('.modal__username');
    blocksForSetName.forEach(block => {
      block.textContent = localStorage.getItem("nickname");
    });
  }
}
