<script>

export default {
  name: 'card',
  data() {
    return {
      
    }
  },
  
  props: {
    info: Object,
    title: String,
    originalTitle: String,
    lang: String,
    vote: ''
  }
}
</script>

<template>
    <div> 
        <p>{{ title }}</p>
        <p>{{ originalTitle }}</p>
        <p>{{ lang }}</p>
        <p>{{ vote }}</p>
    </div>
</template>

<style scoped>

</style>