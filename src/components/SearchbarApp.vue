<script >
import { store } from '../store'
import axios from 'axios';
import CountryFlag from 'vue-country-flag-next'

import CardsApp from './CardsApp.vue';

export default {
    name: 'searchApp',
    components: {
        CardsApp,
        CountryFlag
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
            console.log(store.apiKey)
            console.log(this.store.searchKey)
            axios.get(this.store.apiUrl, {
                params: {
                    api_key:this.store.apiKey,
                    query: this.store.searchKey
                }
            }).then(response => {
                console.log('chiamata effettuata film')
                this.store.filteredMovies = response.data.results
                console.log(response)
                console.log(this.store.filteredMovies)
            })


            axios.get(this.store.apiUrlSeries, {
                params: {
                    api_key:this.store.apiKey,
                    query: this.store.searchKey
                }
            }).then(response => {
                console.log('chiamata effettuata serie')
                this.store.filteredSeries = response.data.results
                console.log(response)
                console.log(this.store.filteredSeries)
                console.log(this.finSearch)
                console.log('qui sotto la lista unita')
                console.log(this.listaCompleta)
                
            })
 
        },
        listaCompleta() {
            return this.finSearch = [...this.store.filteredMovies, ...this.store.filteredSeries]
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
        <li v-for="(film,index) in listaCompleta">
            <CardsApp :info="film"/>
        </li>
    
    </ul>
</template>

<style lang='scss' scoped>
ul {
    
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    
    li {
        border: 1px solid green;
        width: 17%;
    }
}
</style>
