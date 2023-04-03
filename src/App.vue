<script>
import {store} from './store'
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
  }
}
</script>

<template>
<div class="bg">
  <header>
    <div class="container">
      <h2>BOOLFLIX</h2>
      <SearchbarApp/>
    </div>
    
  </header>

  <MainApp/>
</div>
</template>

<style lang= "scss" scoped>

.bg {
  background-color: rgb(79, 74, 74);
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  header {
    
    .container {
      margin: auto;
      width: 80%;
      
    }
  }
}
  
</style>
