import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarcup = createMarkupGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarcup);

function createMarkupGallery(galleryItems) {

    return galleryItems
        .map(({ original, preview, description }) => 
     `<li class = "gallery__item">
  <a class = "gallery__link"  href = "${original}">
    <img
      class="gallery__image"
      src = "${preview}"
      alt = "${description}"
    />
  </a>
</li >`
 ).join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionDelay: 250,
});

