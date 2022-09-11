<template>
    <section>
        <h1>Image Gallery</h1>
        <ImageModal></ImageModal>

        <div class="image-list--container">
            <div class="image-list" v-for="image in images " :key=image.id v-on:click="clickHandler(image)">
                <img :src="image.url_n" :alt="image.alt" />
            </div>
        </div>
    </section>
</template>
<script setup>
    import { ref, onMounted, computed } from 'vue';
    import {useStore} from 'vuex'
    import ImageModal from './imageModal.vue';

    const store = useStore();


    const images = computed(() => {
      return store.state.images
    })
    const clickHandler = (e) =>{
        store.dispatch("setNewClickedImage", e);

    }
    onMounted(() => {
    // dispatch the fetchImages action which commits a mutation to update the state
      store.dispatch("fetchImages");
    })
</script>

<style scoped>
.image-list--container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>