export const form = () => {
  let startGame = false;
  // Функция для проверки правильности email
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  // Функция для проверки правильности name
  const validateName = (name) => {
    const regex = /^[a-zA-Z0-9]+$/;
    if (name.trim() !== '' && regex.test(name) && name.length > 4 ) {
      return true;
    }
    return false;
  };
  // Функция для проверки ввода имени и email в форме регистрации
  const checkForm = () => {
    const nameUserInput = document.querySelector('.user__name').value;
    const emailUserInput = document.querySelector('.user__email').value;
    const nicknameUserInput = document.querySelector('.user__nickname').value;
    // Проверка на пустые поля и правильность email
    if (validateName(nameUserInput) && isValidEmail(emailUserInput) && validateName(nicknameUserInput)) {
      localStorage.setItem("nickname", nicknameUserInput);
      startGame = true;
    }
  }
  checkForm();
  return startGame;
}
