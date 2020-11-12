<template>
    <div class="body">
      <div class="content">
        to delete de permission click
        <span class="badge badge-secondary">YES</span>
      </div>
      <div class="actions">
        <button type="button" class="btn btn-secondary" @click="hidePopUp">
          No
        </button>
        <button type="button" class="btn btn-primary">Yes</button>
      </div>
    </div>

</template>

<script>

export default {
  name: "PopUp",
  methods: {
    hidePopUp() {
      this.$emit("onHide");
    },
  },
  // components: {
  //   BackDrop,
  // },
};
</script>

<style scoped>

.body {
  display: grid;
  grid-template: "content" "actions";
  grid-template-rows: 3rem 3rem;
  width: 20vw;
  height: 20vh;
  box-shadow: 1px 1px 1px black;
  position: fixed;
  margin: auto;
  background-color: white;
  padding: 2rem;
  z-index: 5;
  right: 40%;
}

.header {
  grid-area: header;
}

.content {
  grid-area: content;
}

.actions {
  grid-area: actions;
  display: flex;
  justify-content: space-between;
}

button {
  width: 100px;
  height: 40px;
}
</style>