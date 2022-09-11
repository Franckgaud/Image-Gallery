<template >
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

    const closeModal = () => {
        store.dispatch("setModalActive");
    }
</script>

<style scoped>
.modal{
    position:sticky;
    top:20%;
    padding:50px;
    width:50%;
    background-color:white;
    margin-left:25%;
    border: 1px solid grey;
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
}
.close-button{
    padding:5px;
    float:right;
}
</style>