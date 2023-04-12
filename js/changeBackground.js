import { timer } from './timer.js';
import { displayModal } from './displayModal.js';
import { showInfo } from './showInfo.js';

export const changeBackground = (level) => {

  const htmlBlockCharacter = document.querySelector('.container__images');
  const htmlContainer = document.querySelector('.container__scoreboard');


  let startTime = 0;
  let finishTime = 0;


  const nextAudio = new Audio('../music/next.mp3');
  const scaryAudio = new Audio('../music/scary.mp3');
  scaryAudio.loop = true;
  const winAudio = new Audio('../music/win.mp3');

  const changeDisplaySvg = (number = 0) => {
    const allHtmlSvg = document.querySelectorAll('svg');
    allHtmlSvg.forEach((svg) => {
      svg.style.display = 'none';
    });
    allHtmlSvg[number].style.display = 'block';
  };


  // let path = '';
  switch (level) {
    case 1:
      changeDisplaySvg(0);

      displayModal('block', 1);
      timer();
      startTime = Date.now();
      // scaryAudio.play();
      nextAudio.play();
      break;
    case 2:
      changeDisplaySvg(1);
      displayModal('block', 2);
      nextAudio.play();
      break;
    case 3:
      changeDisplaySvg(2);
      displayModal('block', 3);
      nextAudio.play();
      break;
    case 4:
      changeDisplaySvg(3);
      displayModal('block', 4);
      nextAudio.play();
      break;
    case 5:
      changeDisplaySvg(4);
      displayModal('block', 5);
      nextAudio.play();
      break;
    case 6:
      changeDisplaySvg(4);
      // scaryAudio.pause();
      nextAudio.play();
      winAudio.play();
      showInfo('block', '.modal__result', true)
      showInfo('none', '.container__scoreboard');
      break;
  }

  setTimeout(() => {
    displayModal('none', '.container__scoreboard');
  }, 3000);
}
