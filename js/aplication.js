(function() {
  const canvas = document.getElementById("particlesCanvas");
  const ctx = canvas.getContext("2d");
  const particleCount = 50;
  const particles = [];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 4 + 1;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.color = this.color = 'rgba(200, 188, 92, 0.8)';
    }

    move() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function createParticles() {
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
      particle.move();
      particle.draw();
    });
    requestAnimationFrame(animate);
  }

  createParticles();
  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles.length = 0;
    createParticles();
  });
})();


function previewImage(event) {
  const file = event.target.files[0];
  const previewContainer = document.querySelector('.image-preview');
  const imgElement = document.getElementById('preview-img');
  const removeBtn = document.getElementById('remove-img-btn');

  // Показываем контейнер с изображением
  previewContainer.classList.remove('hidden');

  // Скрываем кнопку "Удалить изображение" по умолчанию
  removeBtn.classList.remove('hidden');

  // Создаем URL объекта для отображения изображения
  const reader = new FileReader();

  reader.onload = function(e) {
    imgElement.src = e.target.result; // Загружаем изображение в элемент
  }

  // Читаем файл как Data URL
  reader.readAsDataURL(file);

  // Обработчик для удаления изображения
  removeBtn.onclick = function() {
    imgElement.src = ''; // Очищаем источник изображения
    previewContainer.classList.add('hidden'); // Прячем превью
    removeBtn.classList.add('hidden'); // Скрываем кнопку удаления
    document.querySelector('.file-input').value = ''; // Очищаем поле ввода файла
  }
}
