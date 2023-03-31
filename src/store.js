import { reactive } from 'vue'

export const store = reactive({

    //ricerca
    searchKey: '',
    apiKey: '4182a37a85065a6e57d21c4bcedc88a4',
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiUrlSeries:'https://api.themoviedb.org/3/search/tv',
    filteredMovies: [],
    filteredSeries: [],
    finSearch: [],
    allUrl: ['https://api.themoviedb.org/3/search/movie','https://api.themoviedb.org/3/search/tv'],

    //pezzi per immagini

    baseUrlPic: 'https://image.tmdb.org/t/p',
    picSize: '/w342'

});