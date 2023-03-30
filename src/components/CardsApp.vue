<script>

export default {
  name: 'card',
  data() {
    return {
      
    }
  },
  
  props: {
    info: Object
    // title: String,
    // originalTitle: String,
    // lang: String,
    // vote: ''
  }
}
</script>

<template>
    <div> 
        <p>{{ info.title }}</p>
        <p>{{ info.original_title }}</p>
        <p>{{ info.original_language }}</p>
        <p>{{ info.vote_average }}</p>
    </div>
</template>

<style scoped>

</style>