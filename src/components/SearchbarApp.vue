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
            console.log(this.store.searchKey)
            axios.get(this.store.apiUrl, {
                params: {
                    api_key:this.store.apiKey,
                    query: this.store.searchKey
                }
            }).then(response => {
                console.log('chiamata effettuata')
                this.store.filteredMovies = response.data.results
                console.log(response)
                console.log(this.store.filteredMovies)
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

    <ul>
        <li v-for="(film,index) in this.store.filteredMovies">
            <CardsApp :info="film"/>
        </li>
        
    </ul>
</template>

<style scoped>
</style>
