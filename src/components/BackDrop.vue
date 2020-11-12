<template>
    <div class="backdrop"></div>
</template>

<script>
export default {
    name:'BackDrop'
}
</script>

<style scoped>
.backdrop{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0,0.3);
}
</style>