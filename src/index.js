import './sass/main.scss';

import imagesTpl from './templates/card-markup.hbs'

import ImagesApiService from './js/apiService.js'

document.cookie = 'samesite=Lax';

const refs = {
    searchFormRef: document.querySelector('#search-form'),
    imageslistRef: document.querySelector('.js-list-container'),
    loadMoreBtnRef: document.querySelector('[data-action="load-more"]'),
}

refs.searchFormRef.addEventListener('submit', onSearch);
refs.loadMoreBtnRef.addEventListener('click', onLoadMore);
const imagesApiService = new ImagesApiService();

function onSearch(e) {
    e.preventDefault();

    clearImagesContainer();
    imagesApiService.query = e.currentTarget.elements.query.value;

    if (imagesApiService.query === '') {
        return alert('Oh No! Nothing found');
        
    } else {
        imagesApiService.resetPage();
        imagesApiService.fetchImages().then(createImagesMarkup);
    }

            
}

function onLoadMore() {
    imagesApiService.fetchImages().then(createImagesMarkup);   
}

function createImagesMarkup(images) {
    refs.imageslistRef.insertAdjacentHTML('beforeend', imagesTpl(images))
}

function clearImagesContainer() {
    refs.imageslistRef.innerHTML = '';

}




