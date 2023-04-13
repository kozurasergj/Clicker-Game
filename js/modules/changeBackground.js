import { timer } from './timer.js';
import { changeModalDispay } from './changeModalDispay.js';
export const changeBackground = (currentLevel) => {

  const nextAudio = new Audio('../music/next.mp3');
  const scaryAudio = new Audio('../music/scary.mp3');
  const winAudio = new Audio('../music/win.mp3');
  scaryAudio.loop = true;

  const setLevelModal = (display = 'none', levelNumber = 1) => {
    const modal = document.querySelector('.modal');
    modal.style.display = display;
    const level = modal.querySelector('.modal__levels');
    level.textContent = `LEVEL: ${levelNumber}`;
  }

  const changeDisplaySvg = (number = 0) => {
    const allHtmlSvg = document.querySelectorAll('svg');
    allHtmlSvg.forEach((svg) => {
      svg.style.display = 'none';
    });
    allHtmlSvg[number].style.display = 'block';
  };

  switch (currentLevel) {
    case 1:
      changeDisplaySvg(0);
      setLevelModal('block', 1);
      timer();
      scaryAudio.play();
      nextAudio.play();
      break;
    case 2:
      changeDisplaySvg(1);
      setLevelModal('block', 2);
      nextAudio.play();
      break;
    case 3:
      changeDisplaySvg(2);
      setLevelModal('block', 3);
      nextAudio.play();
      break;
    case 4:
      changeDisplaySvg(3);
      setLevelModal('block', 4);
      nextAudio.play();
      break;
    case 5:
      changeDisplaySvg(4);
      setLevelModal('block', 5);
      nextAudio.play();
      break;
    case 6:
      changeDisplaySvg(4);
      scaryAudio.pause();
      nextAudio.play();
      winAudio.play();
      changeModalDispay('block', '.modal__result', true)
      changeModalDispay('none', '.container__scoreboard');
      break;
  }

  setTimeout(() => {
    setLevelModal('none', '.container__scoreboard');
  }, 2500);
}
