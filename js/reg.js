document.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.getElementById('phone');
  console.log("хуй тебе а не рабочий код")
  // Инициализация маски
  Inputmask({
    mask: "+7 (999) 999-99-99", // Маска для номера телефона
    placeholder: "_", // Заменяет пустые места
    clearIncomplete: true, // Очищает поле, если пользователь ввел неполный номер
    showMaskOnHover: false // Не показывать маску при наведении
  }).mask(phoneInput);
});


// Модальное окно
const modal = document.getElementById('agreement-modal');
const modalClose = document.querySelector('.close');
const agreementLink = document.getElementById('agreement-link');
const checkbox = document.getElementById('agreement-checkbox');
const confirmButton = document.getElementById('confirm-btn');

// Открытие модального окна
agreementLink.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
});

// Закрытие модального окна
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Проверка чекбокса и активация кнопки
checkbox.addEventListener('change', () => {
  confirmButton.disabled = !checkbox.checked;
});
