<template>
<div class="body">
  <div class="header">
    <NavBar/>
  </div>
  <div id="app" class="content">
    <router-view></router-view>
    <!-- <PermissionReport/> -->
  </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
html{
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
body{
  margin: 0;
}

.body{
  display: grid;
  grid-template: 'header' 'content';
  width: 100%;
  height: 100%;
  grid-template-rows: 4rem auto ;
}

.header{
  grid-area: header;
  margin: 0;
  padding: 0;
}

.content{
  grid-area: content;
}


</style>
