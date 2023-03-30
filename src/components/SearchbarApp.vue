<script >
import { store } from '../store'
import axios from 'axios';

import CardsApp from './CardsApp.vue';

export default {
    name: 'searchApp',
    components: {
        CardsApp
    },
    data() {
        return {
            store,
            

        }
    },
    methods: {
        debug() {
            console.log(this.store.searchKey);
        }
        
    },
    computed: {
        search() {
            //console.log(store.apiKey)
            console.log(store.searchKey)
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: store.apiKey,
                    query: store.searchKey
                }
            }).then(response => {
                console.log('chiamata effettuata')
                this.store.filteredMovies = response.data.results
                console.log(response)
                console.log(store.filteredMovies)
            })
        }
    }
}

</script>

<template>
    <div>
        <input type="text" placeholder="cerca un film o una serie" v-model="store.searchKey">
        <button @click="search">search</button>
    </div>
    <div v-for="movie in filteredMovies">
        <CardsApp/>
    </div>
</template>

<style scoped>
</style>
