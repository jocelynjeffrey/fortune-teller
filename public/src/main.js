var Vue = require('vue/dist/vue.js')
var App = require('./App.vue');

Vue.component('fortuneTeller', require('./components/fortuneTeller.vue'));

const app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})

// import Vue from 'vue';
// import App from './App';

// Vue.config.productionTip = false;

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
// });
