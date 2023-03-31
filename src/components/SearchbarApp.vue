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

            // for (url in this.store.allUrl) {
            //     axios.get(url, {
            //     params: {
            //         api_key:this.store.apiKey,
            //         query: this.store.searchKey
            //     }
            // }).then(response => {
            //     console.log('chiamata effettuata')
            //     this.store.filteredMovies += response
            //     console.log(response)
            //     console.log(this.store.filteredMovies)
            // })
            // };

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

                //return this.finSearch
            })

            // let finSearch = [this.store.filteredMovies.concat(this.store.filteredSeries)]
            // return [finSearch]

            
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
        <li v-for="(film,index) in this.store.filteredSeries">
            <CardsApp :info="film"/>
        </li>
    </ul>
</template>

<style lang='scss' scoped>
ul {
    list-style: none;
    li {
        border: 1px solid green;
        width: 250px;
        padding: 10px;
        margin: 10px;
    }
}
</style>
