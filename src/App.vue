<template>
  <div id="app">
    <div class="switch">
      <router-link to="/" exact>One Dice</router-link>
      <router-link to="/two-dices">Two Dices</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<style>
  body {
    background-color: #f3f3f3;
    margin: 0;
  }

  .switch {
    text-align: center;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 100px;
    z-index: 99;
    transform: translateX(-50%);
  }

  .switch a {
    margin: 0 25px;
    color: #7c7c7c;
    font-family: sans-serif;
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 5px;
    border: 1px solid;
  }

  .switch a.router-link-active {
    background: #000;
    color: #fff;
    border-color: #000;
  }

  .ammar {
    display: none;
  }
</style>