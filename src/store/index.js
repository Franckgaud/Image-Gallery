import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    contactTitle : "This is the Contact Page of the create store page",
    imagesList: [],
    selectedImage:""
  },
  getters: {
    getImages: (state) => state.imagesList
  },
  mutations: {
    SET_IMAGES(state, images) {
      state.imagesList = images
  }
  },
  actions: {
    async fetchImages({ commit }) {
      try {
          const data = await axios({
          method: 'get',
          url: 'https://api.flickr.com/services/rest',
          params: {
            method: 'flickr.photos.getRecent',
            api_key: process.env.API_KEY,
            extras: 'url_n, owner_name, date_taken, views',
            page: 1,
            format: 'json',
            nojsoncallback: 1,
            per_page: 30,
          }
        })
        commit("SET_IMAGES", data.data)
      }
      catch (error) {
        alert(error)
      }
    },
  },
  modules: {
  }
})
