import { animated } from './animated.js';
import { changeBackground } from './changeBackground.js';
import { showInfo } from './showInfo.js';

export const levels = () => {

  const htmlContainer = document.querySelector('.container__scoreboard');
  htmlContainer.style.backgroundImage = '../images/bgbody.jpg';

  let currentLevel = 1;
  const levelTargets = [10, 20, 30, 40, 50];
  const container = document.querySelector('.container');

  const changeBlockLevel = (currentLevel = 0) => {
    const blockLevel = document.querySelector('.container__level');
    blockLevel.textContent = `Level: ${currentLevel}`;
  }

  const changeBlockTotalClick = (currentSumClicks = 0) => {
    const blockTotalClick = document.querySelector('.container__total');
    blockTotalClick.textContent = `Total: ${currentSumClicks}`;
  }


  showInfo('none', '.registration-form');
  showInfo('block', '.container__scoreboard');

  changeBackground(currentLevel);
  const counterShots = () => {
    let count = 0;
    container.addEventListener('click', (event) => {
      animated();
      if (event.target.className === 'container__images') {
        count++;
        count < 51 ? changeBlockTotalClick(count) : changeBlockTotalClick(50);
        if (levelTargets.includes(count)) {
          currentLevel++;
          changeBackground(currentLevel);
          currentLevel <= 5 ? changeBlockLevel(currentLevel) : changeBlockLevel(5);
        }
      }
    });
  }
  counterShots();
} 
