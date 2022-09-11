<template>
    <section class="modal">
        {{$store.state.clickedImage}}
        <h1>{{$store.state.clickedImage.title}}</h1>
        <img :src=$store.state.clickedImage.url_n>
        <h6>By {{$store.state.clickedImage.ownername}}</h6>
        <h6>Created on {{$store.state.clickedImage.datetaken}}</h6>


    </section>
</template>

<style scoped>
.modal{
    position:sticky;
    top:20%;
    padding:50px;
    width:50%;
    background-color:white;
    margin-left:25%;
}
</style>