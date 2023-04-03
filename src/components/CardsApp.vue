<script>
import CountryFlag from 'vue-country-flag-next'
import { store } from '../store'


export default {
  name: 'card',
  data() {
    return {
      store
    }
  },

  components: {
    CountryFlag,
    
  },
  
  props: {
    info: Object
    
  },
  computed: {
    getLanguage() {
      switch(this.info.original_language) {
        case 'en':
          return 'gb';

        case 'ko':
          return 'kor';

        case 'ja':
          return 'jpn';

        
          default: 
          return this.info.original_language;
      }
    }
  },
  methods: {
   
    filmRank() {
      return Math.ceil(this.info.vote_average/2)
      
    }
  }
}
</script>

<template>
  <div class="card"> 
    <div class="poster">
      <img alertMissPic :src='this.store.baseUrlPic + this.store.picSize + info.poster_path' alt="film poster">
    </div>

    <div class="info">
      <div>Titolo: {{ info.title || info.name }}</div>
      <div>Titolo originale: {{ info.original_title || info.original_name }}</div>
      <!-- <p>{{ getLanguage }}</p> -->
      <div>
        Voto: 
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in filmRank()"/>

        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-filmRank()"/>
      </div>
      <!-- <country-flag :country= getLanguage size='big'/> -->
      <div>Trama: {{ info.overview }}</div>
    </div>      
  </div>
</template>

<style lang='scss' scoped>
.card {
  width: 100%;
  height: 513px;
  overflow-y: hidden;
  .poster {
    
  }
  .poster:hover {
    display: none;
  }
  
  
  .info {
    margin-top: 30px;
    padding: 0 5px;
    
    
    div {
      margin-top: 15px;
    }
    
  }

  


}
</style>