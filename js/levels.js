import { animated } from './animated.js';
import { changeBackground } from './changeBackground.js';
import { showInfo } from './showInfo.js';

export const levels = () => {
  let currentLevel = 1;
  const levelTargets = [10, 20, 30, 40, 50];
  const container = document.querySelector('.container');

  showInfo('none', '.registration-form');
  showInfo('flex', '.container__scoreboard');

  changeBackground(currentLevel);

  const counterShots = () => {
    let count = 0;
    const htmlContainerTotal = document.querySelector('.container__total');
    container.addEventListener('click', (event) => {
      animated();
      const element = event.target.dataset.choose;
      if (element == 'true') {
        count++;
        htmlContainerTotal.textContent = `total: ${count}`;
        if (levelTargets.includes(count)) {
          currentLevel++;
          changeBackground(currentLevel);
        }
      }
    });
  }
  counterShots();
} 
