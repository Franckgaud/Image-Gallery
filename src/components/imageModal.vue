<template>
    <section class="modal" v-if="$store.state.modalActive">

        <button class="close-button" ref="closeButton" v-on:click="closeModal">X</button>
        
        <h1>{{$store.state.clickedImage.title}}</h1>
        <img :src=$store.state.clickedImage.url_n>
        <h6>By {{$store.state.clickedImage.ownername}}</h6>
        <h6>Created on {{$store.state.clickedImage.datetaken}}</h6>

    </section>
</template>

<script setup>
    import {useStore} from 'vuex'
    const store = useStore();

    // Will handle closing the modal when the button is clicked
    const closeModal = () => {
        store.dispatch("setModalActive");
    }
</script>

<style scoped>
.modal{
    padding:50px;
    background-color:white;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid grey;
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
}

.close-button{
    padding:5px;
    float:right;
}
</style>