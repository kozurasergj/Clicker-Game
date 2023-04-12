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

  let path = '';
  switch (level) {
    case 1:
      // htmlContainer.style.backgroundImage = '../images/bgbody.jpg';
      path = '../images/1.svg';
      displayModal('block', 1);
      timer();
      startTime = Date.now();
      // scaryAudio.play();
      nextAudio.play();
      break;
    case 2:
      path = '../images/2.svg';
      displayModal('block', 2);
      nextAudio.play();
      break;
    case 3:
      path = '../images/3.svg';
      displayModal('block', 3);
      nextAudio.play();
      break;
    case 4:
      path = '../images/4.svg';
      displayModal('block', 4);
      nextAudio.play();
      break;
    case 5:
      path = '../images/5.svg';
      displayModal('block', 5);
      nextAudio.play();
      break;
    case 6:
      path = '../images/5.svg';
      // scaryAudio.pause();
      nextAudio.play();
      winAudio.play();
      showInfo('block', '.modal__result', true)
      showInfo('none', '.container__scoreboard');
      break;
  }
  htmlBlockCharacter.src = path;
  
  setTimeout(() => {
    displayModal('none', '.container__scoreboard');
  }, 3000);
}
