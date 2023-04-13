import { animated } from './animated.js';
import { changeBackground } from './changeBackground.js';
import { changeModalDispay } from './changeModalDispay.js';
export const levels = () => {
  const hurtAudio = new Audio('../music/hurt.mp3');
  const htmlContainer = document.querySelector('.container__scoreboard');
  htmlContainer.style.backgroundImage = '../images/bgbody.jpg';
  const svgHtml = document.querySelectorAll('svg');

  let count = 0;
  let currentLevel = 1;
  const levelTargets = [10, 20, 30, 40, 50];

  const changeBlockLevel = (currentLevel = 0) => {
    const blockLevel = document.querySelector('.container__level');
    blockLevel.textContent = `Level: ${currentLevel}`;
  }

  const changeBlockTotalClick = (currentSumClicks = 0) => {
    const blockTotalClick = document.querySelector('.container__total');
    blockTotalClick.textContent = `Total: ${currentSumClicks}`;
  }

  changeModalDispay('none', '.registration-form');
  changeModalDispay('block', '.container__scoreboard');
  changeBackground(currentLevel);

  svgHtml.forEach(svg => {
    svg.addEventListener('click', (event) => {
      if (event.target.classList.contains('svg')) {
        animated();
        hurtAudio.play();
        count++;
        changeBlockTotalClick(count < 50 ? count : 50);
        if (levelTargets.includes(count)) {
          currentLevel++;
          changeBackground(currentLevel);
          changeBlockLevel(currentLevel <= 5 ? currentLevel : 5);
        }
      }
    });
  });
} 
