<script>

export default {
  data() {
    return {
      
    }
  },
  
  props: {
    title: String,
    originalTitle: String,
    lang: String,
    vote: String
  }
}
</script>

<template>
    <div> merda
        <p>{{ title }}</p>
        <p>{{ originalTitle }}</p>
        <p>{{ lang }}</p>
        <p>{{ vote }}</p>
    </div>
</template>

<style scoped>

</style>