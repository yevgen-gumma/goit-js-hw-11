import { renderImages } from './render-functions';

export async function submitSearch() {
  const searchInput = document.querySelector('.searchInput');
  const query = searchInput.value.trim();

  if (query === '') {
    iziToast.show({
      title: 'Hey',
      message: 'What would you like to add?',
    });
    return;
  }

  const apiKey = '42324270-89622daef349524aeb531ebd1';
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderImages(data.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error!',
      message: 'An error occurred while fetching data. Please try again later.',
    });
  }
}
