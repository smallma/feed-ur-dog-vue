import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import dog from './dog';

export default new Vuex.Store({
  modules: {
    dog,
  }
});
