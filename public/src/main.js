var Vue = require('vue/dist/vue.js') //used dist so templates could be used in .vue files (default is runtime-only build)
var App = require('./App.vue');

Vue.component('fortuneTeller', require('./components/fortuneTeller.vue'));

const app = new Vue({
  el: '#app', // Vue is mounted using id in layout.jade
  components: { App },
  template: '<App/>',
});
