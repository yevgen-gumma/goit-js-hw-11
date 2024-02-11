// Отримання елементів форми та текстового поля
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const galleryContaner = document.querySelector('.gallery');

// Додавання прослуховувача подій для форми
searchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Перевірка наявності тексту у текстовому полі
  if (searchInput.value.trim() === '') {
    // Виведення повідомлення про помилку чи виконання інших дій
    alert('Please enter a search term');
  } else {
    // Виконання інших дій, наприклад, відправка запиту або обробка даних
    // Тут ви можете викликати функцію, яка обробляє непорожній введений текст
    // Наприклад: submitSearch(searchInput.value);}
  }
});
