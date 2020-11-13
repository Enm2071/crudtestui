<template>
  <div class="body">
    <div class="content">
      <strong
        >To delete de permission click
        <span class="badge badge-secondary">YES</span>
      </strong>
    </div>
    <div class="actions">
      <button type="button" class="btn btn-secondary" @click="hidePopUp">
        No
      </button>
      <button type="button" class="btn btn-danger" @click="deletePermission">
        Yes
      </button>
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
    deletePermission() {
      this.$emit("onDelete");
    },
  },
};
</script>

<style scoped>
.body {
  display: grid;
  grid-template: "content" "actions";
  grid-template-rows: 3rem 3rem;
  width: 25vw;
  height: 20vh;
  box-shadow:   
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  position: fixed;
  margin: auto;
  background-color: white;
  padding: 2rem;
  z-index: 5;
  right: 40%;
  border-radius: 20px 40px;
}

.header {
  grid-area: header;
}

.content {
  grid-area: content;
  font-size: 1.1rem;
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