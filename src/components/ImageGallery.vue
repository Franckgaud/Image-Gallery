<template>
    <section>
        <h1>Image Gallery</h1>
        <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
        </ul>
    </section>
</template>
<script setup>
    import { ref, onMounted, computed } from 'vue';
    //import the global store object from Vuex
    import {useStore} from 'vuex'
    // declare the store variable
    const store = useStore();
    
    const msg = ref("Welcome to my Vuex Store");
    
    const getImages = computed(() => {
      return store.getters.getImages
    })
    
    const images = computed(() => {
      return store.state.images
    })
    
    onMounted(() => {
    // dispatch the fetchUsers action which commits a mutation to update the state
      store.dispatch("fetchImages");
    })
    </script>