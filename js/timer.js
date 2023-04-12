import { showInfo } from './showInfo.js';

export const timer = () => {
  const timeHtmlBlock = document.querySelector('.container__time');


  const endTime = new Date();
  endTime.setMinutes(endTime.getMinutes() + 1); // например, игра длится 1 минут

  const updateTimer = () => {
    const currentTime = new Date();
    const timeDiff = endTime - currentTime;
    let seconds = Math.floor(timeDiff / 1000);
    seconds = seconds % 60;
    timeHtmlBlock.textContent = (`seconds:${seconds}`);
    if (seconds < 1) {
      clearInterval(timerInterval); // остановить интервал, чтобы перестать обновлять таймер
      endGame(); // вызвать функцию, которая завершает игру
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);

  const endGame = () => {
    showInfo('none', '.container__scoreboard');
    showInfo('block', '.modal__loss', true);
  }
};

// ! добавить сколько клтков сделал пользовател  в конце
//! 1 сколько потраченно таймер
//! 2 аргуметы в function
//! 3 git hub
//! 4 нейминг перемених

// const betweenTime = (finish - start) / 1000;
  // const minutes = Math.floor(betweenTime / 60);
  // const seconds = Math.floor(betweenTime % 60);