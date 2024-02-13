import { renderImages } from './render-functions';

export async function submitSearch() {
  const searchInput = document.querySelector('.searchInput');
  const query = searchInput.value.trim();
  const loader = document.querySelector('.loader');
  const galleryContainer = document.querySelector('.gallery');

  if (query === '') {
    iziToast.show({
      message: 'Please enter a keyword',
      backgroundColor: 'yellow',
    });
    return Promise.reject('Empty query');
  }

  const apiKey = '42324270-89622daef349524aeb531ebd1';
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  galleryContainer.innerHTML = '';

  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          color: '#fafafb',
          backgroundColor: '#ef4040',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderImages(data.hits);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error!',
        message: `An error occurred while fetching data: ${error.message}. Please try again later.`,
      });
    });
}
