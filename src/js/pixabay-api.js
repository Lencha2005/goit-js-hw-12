import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export const formSearchEl = document.querySelector('.js-form-search');
export const galleryList = document.querySelector('.list-gallery');
export const loader = document.querySelector('.js-loader');

export function fetchPhotos(inputValue, page) {
    
    formSearchEl.reset();
    loader.classList.remove('is-hidden');

    const axiosOptions = {
        params: {
        key:'45478018-6810a6814d3c626f27e622ce2',
        q: inputValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
        },
    };

return axios.get('', axiosOptions);
}
