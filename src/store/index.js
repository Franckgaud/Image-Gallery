import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    contactTitle : "This is the Contact Page of the create store page",
    images: [],
    selectedImage:""
  },
  mutations: {
    SET_IMAGES(state, images) {
      state.images = images
  }
  },
  
  actions: {
    //This will get all the images of the gallery on page load.
    async fetchImages({ commit }) {
      try {
          const data = await axios({
          method: 'get',
          url: 'https://api.flickr.com/services/rest',
          params: {
            method: 'flickr.photos.getRecent',
            api_key: "d9373efda2b6ccaefe547db9e483da8c",
            extras: 'url_n, owner_name, date_taken, views',
            page: 1,
            format: 'json',
            nojsoncallback: 1,
            per_page: 30,
          }
        })
        console.log(data.data.photos.photo)
        commit("SET_IMAGES", data.data.photos.photo)
      }
      catch (error) {
        alert(error)
      }
    },
  },
  modules: {
  }
})
