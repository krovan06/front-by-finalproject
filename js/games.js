// Функция для проверки, полностью ли элемент видим
function isFullyVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 && // Верхняя граница выше или на уровне верхней границы экрана
    rect.bottom <= window.innerHeight // Нижняя граница ниже или на уровне нижней границы экрана
  );
}

function handleScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  elements.forEach((element) => {
    if (isFullyVisible(element)) {
      element.classList.add('Emergence-shadows-animation-UPdown'); // Добавляем анимацию
    }
  });
}


const HelloBackground = document.getElementsByClassName('hello-block-container')[0]
const ArchiveBackground = document.getElementsByClassName('main-archiv-container')[0]

function checkArchivVisibility() {
  const triger = document.getElementById("animation-triger");
  
  if (triger && isFullyVisible(triger)) {
    HelloBackground.classList.add('background-color-animationPB');
    ArchiveBackground.classList.add('background-color-animationPB');
  } 
}

const StartText = document.getElementsByClassName('triger-block')[0]
function checkStartText() {
  const text = document.getElementsByClassName('archiv-text-container')[0]

  if (text && isFullyVisible(text)) {
    StartText.classList.add('hello-text-animation')
  }
}

function checkSchelf() {
  const schelf = document.getElementsByClassName('archive-schelf')[0]

  if (schelf && isFullyVisible(schelf)) {
    schelf.classList.add('load-shelf-animation')
  }
}

// АРХИВЫ
// Добавляем обработчик события скролла

const container = document.querySelector('.container');
    const blocks = document.querySelectorAll('.block');
    const depthStep = 200; // Расстояние между уровнями глубины
    const verticalStep = 60; // Вертикальный сдвиг между блоками
    let currentDepth = 0;

    // Определяем максимальный и минимальный уровень глубины
    const minDepth = -6;
    const maxDepth = 0;

    container.addEventListener('wheel', (event) => {
      const delta = event.deltaY > 0 ? 1 : -1;

      // Ограничиваем текущую глубину
      currentDepth = Math.min(Math.max(currentDepth + delta, minDepth), maxDepth);

      blocks.forEach(block => {
        const depth = parseInt(block.dataset.depth, 10);
        const relativeDepth = depth - currentDepth;

        block.style.transform = `translate(-50%, -50%) translateZ(${relativeDepth * depthStep}px)`;
        block.style.top = `calc(50% + ${relativeDepth * verticalStep}px)`;

        // Динамическая прозрачность: дальние блоки становятся менее видимыми
        //block.style.opacity = Math.max(0, 1 - Math.abs(relativeDepth) * 0.2);

        // Эффект размытия для дальних блоков
        const blurValue = Math.max(0, Math.abs(relativeDepth) - 3); // Увеличиваем размытие для дальних блоков
        block.style.filter = `blur(${blurValue}px)`;
      });

      // Предотвращаем вертикальный скролл страницы
      event.preventDefault();
    }, { passive: false });

// Проверяем видимость на старте
handleScroll();
checkHitsVisibility();