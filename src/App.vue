<script>
import {store} from './store'
import SearchbarApp from './components/SearchbarApp.vue';


export default {
  data() {
    return {
      store,
    }
  },
  components: {
    SearchbarApp
  }
}
</script>

<template>
  <SearchbarApp/>
</template>

<style scoped>

</style>
