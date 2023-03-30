import { reactive } from 'vue'

export const store = reactive({
    searchKey: '',
    apiKey: '4182a37a85065a6e57d21c4bcedc88a4',
    apiUrl:'https://api.themoviedb.org/3/search/movie',
    filteredMovies: []

});