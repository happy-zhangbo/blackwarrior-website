import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'

import {state,mutations} from './mutations.js'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({
    menuPosition: state.menuPosition
  }),
  filter: (mutations) => (
    mutations.type === 'setMenuPosition' ||
    mutations.type === 'setArbitration'
  )
})


export default new Vuex.Store({
    state,
    mutations,
    plugins: [vuexLocal.plugin]
})
