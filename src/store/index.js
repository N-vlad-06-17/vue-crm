import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      error : null
  },
  mutations: {
      setError(state, error){
          state.error = error
      },
      clearError(state){
          state.error = null
      }
  },
  getters:{        
      error: s => s.error
    },
  actions: {
  },
  modules: {
      auth,info,category
  },
  actions: {
      async fetchCurrency() {
          const res = await fetch(`http://data.fixer.io/api/latest?access_key=a161438c8e9fefa89caed54cd71e9deb&symbols=USD,EUR,RUB`)
          return await res.json()
      }
  }
})
