<template>
  <div id="nav">
  </div>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/all";

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-image: "/assets/images/background.png";
}

body {
  background-color: #EEEEEE;
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}

* {
  margin: 0;
  padding: 0;
}
</style>
