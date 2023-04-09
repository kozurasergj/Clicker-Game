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
      startGame = false;
    } else {
      startGame = true;
      localStorage.setItem("name", nameUserInput);
      localStorage.setItem("email", emailUserInput);
    }
  }
  checkForm();
  return startGame;
}
