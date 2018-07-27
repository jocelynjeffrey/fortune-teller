<template>
  <div>
    <h2 class="fortune-text">{{ getFortune() }}</h2>
  </div>
</template>

<script>
  module.exports = { // required instead of export default
    name: 'FortuneText',
    props: {
      fortuneNumber: Number
      },
    methods: {
      getFortune() {
        switch (true) {
          case this.fortuneNumber <= 15:
            return 'yes!';
          case this.fortuneNumber <= 30:
            return 'definitely';
          case this.fortuneNumber <= 45:
            return 'nooooooope.';
          case this.fortuneNumber <= 60:
            return 'absolutely!';
          case this.fortuneNumber <= 75:
            return 'looks good!';
          case this.fortuneNumber <= 90:
            return 'I think not.';
          default:
            return 'hmmm...maybe?';
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .fortune-text {
    position: absolute;
    color: #FC0F71;
    text-shadow: -1px 0 #B00049, 0 1px #B00049, 1px 0 #B00049, 0 -1px #B00049;
    top: 45%;
    font-size: 6rem;
    margin: auto;
    width: 100%;
    left: 0;
  }
</style>