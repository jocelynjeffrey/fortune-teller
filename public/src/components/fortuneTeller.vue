<template>
  <div class="wrapper">
    <h1>{{ main }}</h1>
    <div>
      <img src="./src/assets/imgs/crystal_ball.png">
      <transition name="fade">
        <fortune-text
          class="fortune-text"
          v-if="showFortune"
          v-bind:fortuneNumber="this.fortuneVariable">
        </fortune-text>
      </transition>
      <!-- <button v-if="!showFortune" @click="setFortuneValue">click me</button> -->
    </div>
    <h2>{{ question }}</h2>
  </div>
</template>

<script>
const axios = require('axios');
var FortuneText = require('./fortuneText.vue');

module.exports = {
  name: 'Home',
  components: {
    fortuneText: FortuneText
  },
  data() {
    return {
      main: 'Ask Zandar',
      question: 'What will your fortune reveal?',
      showFortune: false,
      fortuneVariable: null,
    };
  },
  methods: {
    loadData() {
      axios.get('/fortune')
      .then(res => {
        if (res.data === 'MOTION') { this.setFortuneValue() }
      })
      .catch(error => console.log('error from server'));
    },
    setFortuneValue() {
      if(!this.showFortune) {
        this.showFortune = true;
        this.fortuneVariable = Math.round((Math.random() * 100));
        setTimeout(() => {
          this.showFortune = false;
        }, 1000);
      }
    },
  },
  // will ONLY be executed on the client
  // side effects (like setInterval) need to live in mounted()
  // because destroy hooks are not called in SSR
  // ...which means they will live forever
  // which would be bad
  mounted() {
    setInterval(() => {
      this.loadData();
    }, 2000);
 },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
  }

// transitions
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: rotateX(50deg);
  }
  .fade-enter-to,
  .fade-leave {
    opacity: 1;
    transform: rotateX(0deg);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s, transform 1200ms ease-out;
  }
</style>
