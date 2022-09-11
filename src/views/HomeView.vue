<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ImageGallery />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ImageGallery from '@/components/ImageGallery.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ImageGallery
  }
}
</script>
