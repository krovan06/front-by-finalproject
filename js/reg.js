document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const loginInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const password2Input = document.getElementById('password2');

  const submitButton = document.getElementById('submit-btn');

  const emailError = document.getElementById('email-error');
  const loginError = document.getElementById('username-error');
  const phoneError = document.getElementById('phone-error');
  const passwordError = document.getElementById('password-error');
  const password2Error = document.getElementById('password2-error');
  const agreementCheckbox = document.getElementById('agreement-checkbox');
  const checkboxError = document.getElementById('checkbox-error');

  // Устанавливаем маску для телефона
  $(phoneInput).inputmask('+7 (999) 999-99-99');

  // Функция для добавления эффекта тряски
  const shakeElement = (element) => {
    element.classList.add('shake');
    setTimeout(() => {
      element.classList.remove('shake');
    }, 300); // Длительность анимации
  };

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let valid = true;

    // Проверка логина
    if (!loginInput.value.trim()) {
      loginError.textContent = 'Поле "Логин" обязательно для заполнения.';
      loginError.style.display = 'block';
      shakeElement(loginInput);
      valid = false;
    } else if (/\s/.test(loginInput.value)) {
      loginError.textContent = 'Логин не должен содержать пробелов.';
      loginError.style.display = 'block';
      shakeElement(loginInput);
      valid = false;
    } else {
      loginError.style.display = 'none';
    }

    // Проверка Email
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Поле "Почта" обязательно для заполнения.';
      emailError.style.display = 'block';
      shakeElement(emailInput);
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailError.textContent = 'Введите корректный Email.';
      emailError.style.display = 'block';
      shakeElement(emailInput);
      valid = false;
    } else {
      emailError.style.display = 'none';
    }

    // Проверка телефона
    if (phoneInput.value.trim() && !/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phoneInput.value)) {
      phoneError.textContent = 'Введите корректный номер телефона.';
      phoneError.style.display = 'block';
      shakeElement(phoneInput);
      valid = false;
    } else {
      phoneError.style.display = 'none';
    }

    // Проверка пароля
    if (!passwordInput.value.trim()) {
      passwordError.textContent = 'Поле "Пароль" обязательно для заполнения.';
      passwordError.style.display = 'block';
      shakeElement(passwordInput);
      valid = false;
    } else if (passwordInput.value.length < 6) {
      passwordError.textContent = 'Пароль должен содержать минимум 6 символов.';
      passwordError.style.display = 'block';
      shakeElement(passwordInput);
      valid = false;
    } else if (!/\d/.test(passwordInput.value)) {
      passwordError.textContent = 'Пароль должен содержать хотя бы одну цифру.';
      passwordError.style.display = 'block';
      shakeElement(passwordInput);
      valid = false;
    } else {
      passwordError.style.display = 'none';
    }

    // Проверка совпадения паролей
    if (password2Input.value !== passwordInput.value) {
      password2Error.textContent = 'Пароли должны совпадать.';
      password2Error.style.display = 'block';
      shakeElement(password2Input);
      valid = false;
    } else {
      password2Error.style.display = 'none';
    }

    // Проверка пользовательского соглашения
    if (!agreementCheckbox.checked) {
      checkboxError.textContent = 'Вы должны согласиться с пользовательским соглашением.';
      checkboxError.style.display = 'block';
      shakeElement(agreementCheckbox);
      valid = false;
    } else {
      checkboxError.style.display = 'none';
    }

    if (valid) {
      alert('Форма успешно отправлена!');
    }
  });
});
