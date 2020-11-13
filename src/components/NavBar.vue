<template>
  <nav class="navbar navbar-dark bg-dark" >
    <router-link class="navbar-brand hvr-sweep-to-top" to="/" active-class="active" exact>Report</router-link>
    <router-link class="navbar-brand hvr-sweep-to-top" to="/create-permission" active-class="active" exact>New Request</router-link>
  </nav>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
nav{
    padding: 0;
    height: 4rem;
    display: flex;
    justify-content:left;
}

nav> a{
  height: 100%;
  padding: 1rem;
  margin: 0;
}
.active{
    background: #2098D1;;
    color: white;
}

.hvr-sweep-to-top {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-sweep-to-top:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #2098D1;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-sweep-to-top:hover, .hvr-sweep-to-top:focus, .hvr-sweep-to-top:active {
  color: white;
}
.hvr-sweep-to-top:hover:before, .hvr-sweep-to-top:focus:before, .hvr-sweep-to-top:active:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}

</style>