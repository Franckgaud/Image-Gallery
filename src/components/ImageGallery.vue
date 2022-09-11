<template>
    <section>
        <h1>Image Gallery</h1>
    <img v-for="image in images" :key=image.id :src="image.url_n" :alt="image.alt" />

    </section>
</template>
<script setup>
    import { ref, onMounted, computed } from 'vue';
    //import the global store object from Vuex
    import {useStore} from 'vuex'
    // declare the store variable
    const store = useStore();
    

    
    const images = computed(() => {
      return store.state.images
    })
    
    onMounted(() => {
    // dispatch the fetchUsers action which commits a mutation to update the state
      store.dispatch("fetchImages");
    })
    </script>