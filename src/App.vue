<script>
import {store} from './store.js'
import SearchbarApp from './components/SearchbarApp.vue';


export default {
  data() {
    return {
      store,
      SearchbarApp
    }
  }
}
</script>

<template>
  <SearchbarApp/>
</template>

<style scoped>

</style>
