import { showInfo } from './showInfo.js';

export const timer = () => {
  const timeHtmlBlock = document.querySelector('.container__time');

  const startTime = new Date();
  let result = 0;


  const endTime = new Date();
  endTime.setMinutes(endTime.getMinutes() + 1); // например, игра длится 1 минут

  const updateTimer = () => {
    const currentTime = new Date();
    const timeDiff = endTime - currentTime;
    let seconds = Math.floor(timeDiff / 1000);
    seconds = seconds % 60;
    result = seconds;
    timeHtmlBlock.textContent = (`seconds:${seconds}`);
    if (seconds < 1) {
      clearInterval(timerInterval); // остановить интервал, чтобы перестать обновлять таймер
      endGame(); // вызвать функцию, которая завершает игру
    }
  }

  // timeSpent = (new Date() - startTime) / 1000;

  const timerInterval = setInterval(updateTimer, 1000);

  const endGame = () => {
    showInfo('none', '.container__scoreboard');
    showInfo('block', '.modal__loss', true);
  }

  return result;
};


