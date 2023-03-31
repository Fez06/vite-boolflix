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
    CountryFlag
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
    alertMissPic() {
      if (src === null) {
        return alt='immagine non disponibile'
      }
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
    <p>{{ info.vote_average }}</p>
    <country-flag :country= getLanguage size='big'/>
        
  </div>
</template>

<style scoped>

</style>