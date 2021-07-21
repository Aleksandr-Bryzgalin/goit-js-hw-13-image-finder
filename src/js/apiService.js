export default class NewApiService {

    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    
    fetchImages() {
        const KEY = '22591505-08ad6f7bc84dba0c40d28b137';
        const BASE_URL = 'https://pixabay.com/api';

        return fetch(`${BASE_URL}/?key=${KEY}&image_type=photo&orientation=horizontal&q=${this.searchQuery}&per_page=12&page=${this.page}`)
            .then(rec => rec.json())
            .then(data => {
                this.incrementPage();
                return data.hits;                
            });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery
    }
     
}