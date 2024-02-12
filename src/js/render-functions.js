import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const galleryContainer = document.querySelector('.gallery');

  galleryContainer.innerHTML = '';

  images.forEach(image => {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');

    const webformatURL = image.webformatURL;
    const largeImageURL = image.largeImageURL;
    const tags = image.tags;
    const likes = image.likes;
    const views = image.views;
    const comments = image.comments;
    const downloads = image.downloads;

    const imageElement = document.createElement('img');
    imageElement.src = image.webformatURL;
    imageElement.alt = image.tags;

    const infoElement = document.createElement('div');
    infoElement.classList.add('image-info');
    infoElement.innerHTML = `
    <p>Likes: ${likes}</p>
    <p>Views: ${views}</p>
    <p>Comments: ${comments}</p>
    <p>Downloads: ${downloads}</p>
  `;

    const linkElement = document.createElement('a');
    linkElement.href = largeImageURL;
    linkElement.classList.add('gallery-item'); // Додайте клас для посилань

    linkElement.appendChild(imageElement);
    linkElement.appendChild(infoElement);

    imageCard.appendChild(linkElement);

    galleryContainer.appendChild(imageCard);
  });

  refreshGallery();
}

function refreshGallery() {
  const gallery = new SimpleLightbox('.gallery-item');
  gallery.refresh();
}
