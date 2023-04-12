export const showInfo = (dislay = 'none', htmlBlock, setName = false) => {
  const scoreboard = document.querySelector(htmlBlock);
  scoreboard.style.display = dislay;
  if (setName) {
    const blocksForSetName = document.querySelectorAll('.modal__username');
    blocksForSetName.forEach(block => {
      const userNickname = localStorage.getItem("nickname");
      block.textContent = userNickname;
    });
  }
}
