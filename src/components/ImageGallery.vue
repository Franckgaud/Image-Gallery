<template>
    <section>
        <h1>Image Gallery</h1>
        <ImageModal></ImageModal>
        <div class="image-list--container">
            <div class="image" v-for="image in images " :key=image.id v-on:click="openModalSetData(image)">
                <img :src="image.url_n" :alt="image.alt" />
            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted, computed } from 'vue';
    import {useStore} from 'vuex'
    import ImageModal from './imageModal.vue';
    const store = useStore();

    //get all the images
    const images = computed(() => {
      return store.state.images
    })

    //Handles the dispatching of the data of the currently clicked image and the opening of the modal
    const openModalSetData = (e) =>{
        store.dispatch("setNewClickedImage", e);
        store.dispatch("setModalActive");
    }

    // get all images on page load
    onMounted(() => {
      store.dispatch("fetchImages");
    })
    
</script>

<style scoped>
.image-list--container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.image{
    width:auto;
    padding:5px;
}
</style>