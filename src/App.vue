<script>
import { store } from './store'
import axios from 'axios';
import SearchbarApp from './components/SearchbarApp.vue';
import MainApp from './components/MainApp.vue';


export default {
  data() {
    return {
      store,
    }
  },
  components: {
    SearchbarApp,
    MainApp
  },
  computed: {
    search() {
      console.log(this.store.searchKey)
      axios.get(this.store.apiUrl, {
        params: {
          api_key: this.store.apiKey,
          query: this.store.searchKey
        }
      }).then(response => {
        console.log('chiamata effettuata film')
        this.store.filteredMovies = response.data.results
        // console.log(response)
        // console.log(this.store.filteredMovies)
      })


      axios.get(this.store.apiUrlSeries, {
        params: {
          api_key: this.store.apiKey,
          query: this.store.searchKey
        }
      }).then(response => {
        console.log('chiamata effettuata serie')
        this.store.filteredSeries = response.data.results
        // console.log(response)
        // console.log(this.store.filteredSeries)
        console.log('qui sotto la lista unita')
        console.log(this.listaCompleta)

      })

    },
    listaCompleta() {
      return this.finSearch = [...this.store.filteredMovies, ...this.store.filteredSeries]
    },
    try() {
      console.log('prova')
    }
  }
}
</script>

<template>
  <div class="bg">
    <div class="header">
      <div class="box">
        <h1>BOOLFLIX</h1>
        <SearchbarApp @ricerca="search" />
      </div>
    </div>

    <div class="container">


      <MainApp />
    </div>
  </div>
</template>

<style lang= "scss" scoped>
.bg {
  background-color: rgb(79, 74, 74);
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-image: url(../public/boolflixSfondo2.avif);
  background-repeat: no-repeat;
  background-size: cover;


  .header {
    background-color: rgb(84, 28, 119);

    .box {
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      width: 80%;
      margin: auto;
    }

    h1 {
      color: beige;
    }
  }

  .container {
    margin: auto;
    width: 80%;


  }

}</style>
