// Объект игрока
const player = {
  name: '',
  email: '',
  score: 0
};

// Очистка инпута 
const cleaningNameInput = document.querySelector('.user__name');
cleaningNameInput.addEventListener('input', () => {
  cleaningNameInput.value = cleaningNameInput.value.replace(/[а-яА-ЯіІїЇєЄ]/g, '').trim();
});

// Функция для проверки правильности email
const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Функция для проверки правильности name
const validateName = (name) => {
  const regex = /^[a-zA-Z0-9]+$/;
  if (name.trim() === '' || !regex.test(name)) {
    name = name.trim().replace(/[^a-zA-Z0-9]/g, '');
    return false;
  }
  return true;
};

// Функция для проверки ввода имени и email в форме регистрации
const checkForm = () => {
  const nameUserInput = document.querySelector('.user__name').value;
  const emailUserInput = document.querySelector('.user__email').value;
  // Проверка на пустые поля и правильность email
  if (!validateName(nameUserInput) || !isValidEmail(emailUserInput)) {
    alert('Please fill in all fields and enter a valid email address.');
  } else {
    // Запись имени и email игрока в объект player
    player.name = nameUserInput;
    player.email = emailUserInput;
    // Запускаем в игру 
    alert(`Welcome ${player.name}! Let's start the game!`);
    // nextLevel();
  }
}

const StartGameButton = document.querySelector('.start__game');
StartGameButton.addEventListener('click', (event) => {
  event.preventDefault(); // Предотвращает отправку формы по умолчанию
  checkForm();
  console.log(player); // Смотрим на обьект пользователя 
});

