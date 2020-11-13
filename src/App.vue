<template>
  <div class="body">
    <div class="header">
      <NavBar />
    </div>
    <div id="app" class="content">
      <transition name="pg">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
html {
  width: 100vw;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  background-image: url('./assets/images/requestWallpeaper.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.body {
  display: grid;
  grid-template: "header" "content";
  width: 100%;
  height: 100%;
  grid-template-rows: 4rem auto;
}

.header {
  grid-area: header;
  margin: 0;
  padding: 0;
}

.content {
  grid-area: content;
}

.pg-enter-active {
  animation: page-in 1s ease-out forwards;
}

.pg-leave {
  animation: page-out 1s ease-out forwards;
}


@keyframes page-in {
  from {
    transform: translateX(-50px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes page-out {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-50px);
  }
}
</style>
