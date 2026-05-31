// Ждём полной загрузки HTML-страницы
document.addEventListener('DOMContentLoaded', function () {
  const imageCards = document.querySelectorAll('.image-card');
  const imageCounter = document.getElementById('image-counter');
  const totalLikesElement = document.getElementById('total-likes');
  const likeButtons = document.querySelectorAll('.like-btn');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryGrid = document.getElementById('image-gallery');
  const gridViewButton = document.getElementById('grid-view');
  const listViewButton = document.getElementById('list-view');

  let totalLikes = 0;

  // Подсчёт количества изображений
  imageCounter.textContent = imageCards.length;

  // Работа с лайками
  likeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const likeCount = button.querySelector('.like-count');
      let currentLikes = Number(likeCount.textContent);

      if (button.classList.contains('liked')) {
        currentLikes = currentLikes - 1;
        totalLikes = totalLikes - 1;
        button.classList.remove('liked');
      } else {
        currentLikes = currentLikes + 1;
        totalLikes = totalLikes + 1;
        button.classList.add('liked');
      }

      likeCount.textContent = currentLikes;
      totalLikesElement.textContent = totalLikes;
    });
  });

  // Фильтрация изображений по категориям
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const selectedCategory = button.dataset.filter;

      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });

      button.classList.add('active');

      imageCards.forEach(function (card) {
        const cardCategory = card.dataset.category;

        if (selectedCategory === 'all' || selectedCategory === cardCategory) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Переключение вида: сетка
  gridViewButton.addEventListener('click', function () {
    galleryGrid.classList.remove('list-view');
    gridViewButton.classList.add('active');
    listViewButton.classList.remove('active');
  });

  // Переключение вида: список
  listViewButton.addEventListener('click', function () {
    galleryGrid.classList.add('list-view');
    listViewButton.classList.add('active');
    gridViewButton.classList.remove('active');
  });

  console.log('Галерея загружена. JavaScript работает.');
});