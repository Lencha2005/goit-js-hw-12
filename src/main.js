import {creatGalleryCard} from './js/render-functions';
import {fetchPhotos, loader, galleryList, formSearchEl} from './js/pixabay-api';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const btnLoadMoreEl = document.querySelector('.js-btn-load-more');

let currentPage = 1;
let inputValue = '';
let cardHeight = 0;


async function onFormSearchSubmit(event){
    try {
        event.preventDefault();

        currentPage = 1;

        inputValue = formSearchEl.elements.user_query.value.trim();

        const response = await fetchPhotos(inputValue, currentPage);
        console.log(response.data);

        if (response.data.hits.length === 0 || inputValue === ''){
            galleryList.innerHTML = '';
            iziToast.error({
                title: 'Error',
                position: 'topRight',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            
            return;
        };

        const galleryCardsTemplate = response.data.hits
        .map(img => creatGalleryCard(img))
        .join('');

        galleryList.innerHTML = galleryCardsTemplate;

        const galleryCardEl = document.querySelector('LI');
        cardHeight = galleryCardEl.getBoundingClientRect().height;

        btnLoadMoreEl.classList.remove('is-hidden');

    lightbox.refresh();
    }  catch(err) {
        console.log(err)
    } finally {
        loader.classList.add('is-hidden');
    };
};

async function onBtnLoadMoreClick(event) {
    try{
        btnLoadMoreEl.classList.add('is-hidden')
        loader.classList.remove('is-hidden');
        currentPage++;

        const response = await fetchPhotos(inputValue, currentPage);

        const galleryCardsTemplate = response.data.hits
        .map(img => creatGalleryCard(img))
        .join('');

        galleryList.insertAdjacentHTML('beforeend', galleryCardsTemplate);

        scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth',
          });

        btnLoadMoreEl.classList.remove('is-hidden')
        loader.classList.add('is-hidden');

        const totalPages = Math.ceil(response.data.totalHits / 15);

        if (currentPage === totalPages) {
            btnLoadMoreEl.classList.add('is-hidden');
            iziToast.info({
                position: 'topRight',
                message: "We're sorry, but you've reached the end of search results.",
            });
            return;
          }

        lightbox.refresh();

    } catch (err){
        console.log(err)
    } finally {
        loader.classList.add('is-hidden');
    };
};

formSearchEl.addEventListener('submit', onFormSearchSubmit);
btnLoadMoreEl.addEventListener('click', onBtnLoadMoreClick);

const lightbox = new SimpleLightbox('.list-gallery a', { 
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.8
});