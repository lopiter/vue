import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  gThing: ''
}

const mutations = {
  changeGThing (state , {newThing}) {
    state.gThing = newThing
  }
}

const actions = {
  changeGThing: ({ commit } , newThing) => commit('changeGThing' , newThing),
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})