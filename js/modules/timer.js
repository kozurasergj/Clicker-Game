import { changeModalDispay } from './changeModalDispay.js';
export const timer = () => {
  const failAudio = new Audio('../music/fail.mp3');
  const timeHtmlBlock = document.querySelector('.container__time');
  const endTime = new Date();
  endTime.setMinutes(endTime.getMinutes() + 1); // например, игра длится 1 минут

  const endGame = () => {
    changeModalDispay('none', '.container__scoreboard');
    changeModalDispay('block', '.modal__loss', true);
  }

  const updateTimer = () => {
    const currentTime = new Date();
    const timeDiff = endTime - currentTime;
    let seconds = Math.floor(timeDiff / 1000);
    seconds = seconds % 60;
    timeHtmlBlock.textContent = (`seconds:${seconds}`);
    if (seconds < 1) {
      clearInterval(timerInterval); // остановить интервал, чтобы перестать обновлять таймер
      endGame(); // вызвать функцию, которая завершает игру
      failAudio.play();
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);
};
