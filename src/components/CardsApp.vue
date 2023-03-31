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
    // title: String,
    // originalTitle: String,
    // lang: String,
    // vote: ''
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
    // alertMissPic() {
    //   if (info.poster_path = null) {
    //     console.log(`${info.title || info.name} non ha un poster`)
    //   }
    // }
    filmRank() {
      return Math.ceil(this.info.vote_average/2)
      
    }
  }
}
</script>

<template>
  <div> 
    <div>
      <img alertMissPic :src='this.store.baseUrlPic + this.store.picSize + info.poster_path' alt="film poster">
    </div>

    <p>{{ info.title || info.name }}</p>
    <p>{{ info.original_title || info.original_name }}</p>
    <p>{{ getLanguage }}</p>
    <p>
      
    <font-awesome-icon icon="fa-solid fa-star" v-for="n in filmRank()"/>

    <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-filmRank()"/>

    </p>
    <country-flag :country= getLanguage size='big'/>
        
  </div>
</template>

<style scoped>

</style>