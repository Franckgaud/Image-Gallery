import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    images: [],
    clickedImage:"nothing",
    modalActive: false,
  },
  //Those mutations will handle the change of the 3 states accross the app
  mutations: {
    SET_IMAGES(state, images) {
      state.images = images
    },
    SET_CLICKED_IMAGE(state, clickedImage) {
    state.clickedImage = clickedImage
    },
    SET_MODAL_ACTIVE(state) {
      state.modalActive = !state.modalActive
    }
  },
  
  actions: {
    //Get all the images of the gallery.
    async fetchImages({ commit }) {
      try {
          const data = await axios({
          method: 'get',
          url: 'https://api.flickr.com/services/rest',
          params: {
            method: 'flickr.photos.getRecent',
            api_key: process.env.VUE_APP_API_KEY,
            extras: 'url_n, owner_name, date_taken, views',
            page: 1,
            format: 'json',
            nojsoncallback: 1,
            per_page: 30,
          }
        })
        commit("SET_IMAGES", data.data.photos.photo)
      }
      catch (error) {
        alert(error)
      }
    },
    //handles the mutation of the image currently clicked
    setNewClickedImage ({commit}, clickedImage){
      commit("SET_CLICKED_IMAGE", clickedImage)
    },
    //handles the opening adn closing of the modal
    setModalActive ({commit}){
      commit("SET_MODAL_ACTIVE")
    }
  },
})
