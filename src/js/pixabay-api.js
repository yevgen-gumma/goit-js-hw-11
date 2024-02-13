import { renderImages } from './render-functions';

export async function submitSearch() {
  const searchInput = document.querySelector('.searchInput');
  const query = searchInput.value.trim();
  const loader = document.querySelector('.loader');
  const galleryContainer = document.querySelector('.gallery');

  if (query === '') {
    iziToast.show({
      title: 'Hey',
      message: 'What would you like to add?',
    });
    return Promise.reject('Empty query');
  }

  const apiKey = '42324270-89622daef349524aeb531ebd1';
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  galleryContainer.innerHTML = '';
  // loader.style.display = 'inline-block';

  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      loader.style.display = 'none';
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderImages(data.hits);
      }
    })
    .catch(error => {
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error!',
        message: `An error occurred while fetching data: ${error.message}. Please try again later.`,
      });
    });
  hideLoader();
}
