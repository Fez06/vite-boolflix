<script>
import { store } from '../store';
import CardsApp from './CardsApp.vue'


export default {
    name: 'mainApp',
    data() {
        return {
            store
        }
    },
    components: {
        CardsApp
    },

    methods: {
        
        
    },
    computed: {
        listaCompleta() {
            return this.finSearch = [...this.store.filteredMovies, ...this.store.filteredSeries]
        }
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
</style>