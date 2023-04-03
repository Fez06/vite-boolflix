<!-- <script>
import { store } from '../store';
import CardsApp from './CardsApp.vue'


export default {
    name: 'main',
    data() {
        return {
            store
        }
    },
    components: {
        CardsApp
    }

    methods: {
        // search() {
        //     console.log(store.apiKey)
        //     console.log(this.store.searchKey)
        //     axios.get(this.store.apiUrl, {
        //         params: {
        //             api_key:this.store.apiKey,
        //             query: this.store.searchKey
        //         }
        //     }).then(response => {
        //         console.log('chiamata effettuata film')
        //         this.store.filteredMovies = response.data.results
        //         console.log(response)
        //         console.log(this.store.filteredMovies)
        //     })

        //     // for (url in this.store.allUrl) {
        //     //     axios.get(url, {
        //     //     params: {
        //     //         api_key:this.store.apiKey,
        //     //         query: this.store.searchKey
        //     //     }
        //     // }).then(response => {
        //     //     console.log('chiamata effettuata')
        //     //     this.store.filteredMovies += response
        //     //     console.log(response)
        //     //     console.log(this.store.filteredMovies)
        //     // })
        //     // };

        //     axios.get(this.store.apiUrlSeries, {
        //         params: {
        //             api_key:this.store.apiKey,
        //             query: this.store.searchKey
        //         }
        //     }).then(response => {
        //         console.log('chiamata effettuata serie')
        //         this.store.filteredSeries = response.data.results
        //         console.log(response)
        //         console.log(this.store.filteredSeries)
        //         console.log(this.finSearch)
        //         console.log('qui sotto la lista unita')
        //         console.log(this.listaCompleta)
                
        //     })

        //     // let finSearch = [this.store.filteredMovies.concat(this.store.filteredSeries)]
        //     // return [finSearch]    
        // },
    }
}
</script>

<template>
    
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
        text-align: center;
    }
}
</style> -->