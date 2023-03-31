<script>
import CountryFlag from 'vue-country-flag-next'

export default {
  name: 'card',
  data() {
    return {
      
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
    },
    getSeriesName() {
      switch(this.info.title) {
        case info.name:
          return 'title';

        
          default: 
          return this.info.title;
      }
    }
  }
}
</script>

<template>
    <div> 
        <p>{{ info.title }}</p>
        <p>{{ info.original_title }}</p>
        <p>{{ getLanguage }}</p>
        <p>{{ info.vote_average }}</p>
        <country-flag :country= getLanguage size='big'/>
    </div>
</template>

<style scoped>

</style>