export const levels = () => {
  const container = document.querySelector('.container');
  let currentLevel = 1;
  const levelTargets = [10, 20, 30, 40, 50];

  const deleteForm = () => {
    const form = document.querySelector('.registration-form ');
    form.style.display = 'none';
  }
  deleteForm();

  const addScoreboard = (dislay) => {
    const scoreboard = document.querySelector('.container__scoreboard');
    scoreboard.style.display = dislay;
  }
  addScoreboard('flex');

  const changeBackground = (level) => {
    let path = '';
    switch (level) {
      case 1:
        path = "url('images/level1.jpg')";
        break;
      case 2:
        path = "url('images/level2.jpg')";
        break;
      case 3:
        path = "url('images/level3.jpg')";
        break;
      case 4:
        path = "url('images/level4.jpg')";
        break;
      case 5:
        path = "url('images/level5.jpg')";
        break;
      default:
        path = "url('images/king.jpg')";
        break;
    }
    container.style.backgroundImage = path;
    container.style.backgroundSize = 'contain';
  }
  changeBackground(currentLevel);

  const counterShots = () => {
    let count = 0;
    const htmlContainerTotal = document.querySelector('.container__total');
    container.addEventListener('click', (event) => {
      event.preventDefault();
      const element = event.target.dataset.choose;
      console.log(element)
      if (element == 'true' ) {
      count++;
      htmlContainerTotal.textContent = `total: ${count}`;
      if (levelTargets.includes(count)) {
        currentLevel++;
        changeBackground(currentLevel);
      } else if (count > 50) {
        alert('win!!!');
        addScoreboard('none');
      }
      }
    });
  }
  counterShots();

} 
