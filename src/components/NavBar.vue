<template>
  <nav class="navbar navbar-light bg-light">
    <router-link class="navbar-brand" to="/" active-class="active" exact>Permission</router-link>
    <router-link class="navbar-brand" to="/create-permission" active-class="active" exact>crear</router-link>
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
}

nav> a{
  height: 100%;
  padding: 1rem;
}
.active{
    background: black;
    color: white;
}
</style>