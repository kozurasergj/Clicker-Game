import { displayModal } from './displayModal.js';
import { showInfo } from './showInfo.js';
export const changeBackground = (level) => {
  const container = document.querySelector('.container');

  const nextAudio = new Audio('music/next.mp3');
  const scaryAudio = new Audio('music/scary.mp3');
  scaryAudio.loop = true;
  const winAudio = new Audio('music/win.mp3');

  let path = '';
  switch (level) {
    case 1:
      path = "url('images/level1.jpg')";
      displayModal('block', 1);
      scaryAudio.play();
      nextAudio.play();
      break;
    case 2:
      path = "url('images/level2.jpg')";
      displayModal('block', 2);
      nextAudio.play();
      break;
    case 3:
      path = "url('images/level3.jpg')";
      displayModal('block', 3);
      nextAudio.play();
      break;
    case 4:
      path = "url('images/level4.jpg')";
      displayModal('block', 4);
      nextAudio.play();
      break;
    case 5:
      path = "url('images/level5.jpg')";
      displayModal('block', 5);
      nextAudio.play();
      break;
    case 6:
      path = "url('images/king.jpg')";
      scaryAudio.pause();
      nextAudio.play();
      container.style.backgroundImage = path;
      setTimeout(() => {
        winAudio.play();
        showInfo('block', '.modal__result', true);
        showInfo('none', '.container__scoreboard');
      }, 2000);
      break;
  }
  container.style.backgroundImage = path;
  container.style.backgroundSize = 'contain';
  setTimeout(() => {
    displayModal('none', '.container__scoreboard');
  }, 3000);
}
