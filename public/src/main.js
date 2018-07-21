var Vue = require('vue/dist/vue.js')
var App = require('./App.vue');

Vue.component('fortuneTeller', require('./components/fortuneTeller.vue'));

const app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
