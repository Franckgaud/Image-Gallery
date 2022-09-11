<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ImageGallery />
  </div>
</template>

<script>
import ImageGallery from '@/components/ImageGallery.vue'


export default {
  name: 'HomeView',
  components: {
    ImageGallery
  }
}
</script>
