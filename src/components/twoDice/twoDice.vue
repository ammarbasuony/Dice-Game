<template>
  <div class="wrapper">
    <section>
      <div class="dice-cube first" :class="activeClassOne">
        <div class="side six">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="side five">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="side four">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="side three">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="side two">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="side one">
          <div class="dot"></div>
        </div>
      </div>

      <div class="dice-cube second" :class="activeClassTwo">
        <div class="side six">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="side five">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="side four">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="side three">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="side two">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="side one">
          <div class="dot"></div>
        </div>
      </div>

      <a href="#" class="roll-dice" @click.prevent="getRandomNumber(1, 6)">Roll Dices</a>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'oneDice',
    data: function () {
      return {
        activeClassOne: 'side-1',
        activeClassTwo: 'side-1'
      }
    },
    methods: {
      getRandomNumber(min, max) {
        var _this = this;
        this.activeClassOne = ``;
        this.activeClassTwo = ``;
        min = Math.ceil(min);
        max = Math.floor(max);
        setTimeout(function () {
          _this.activeClassOne = `side-${Math.floor(Math.random() * max) + min}`;
          _this.activeClassTwo = `side-${Math.floor(Math.random() * max) + min}`;
        }, 30);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .roll-dice {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #7c7c7c;
    color: #fff;
    text-decoration: none !important;
    padding: 8px 15px;
    border-radius: 5px;
    font-size: 16px;
    font-family: sans-serif;
    white-space: pre;
  }

  .wrapper {
    perspective: 500px;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper section {
    position: relative;
    width: 302px;
    height: 170px;
  }

  .dice-cube {
    cursor: normal !important;
  }

  .dice-cube.second {
    right: 102px;
    left: unset;
  }

  @media (max-width: 414px) {
    .dice-cube.second {
      right: 122px;
    }
    
    .dice-cube.first {
      left: 20px;
    }
  }

  @import url(../oneDice/oneDice.css);
</style>