<template>
  <form class="form">
    <div class="form_header">
      <h3>Formulario de captura de solicitudes</h3>
    </div>
    <div class="form_body">
      <div class="form-group">
        <label >Name</label>
        <input
          type="name"
          class="form-control"
          :class="{ invalid: nameValidity === 'invalid' }"
          v-model.trim="name"
          @blur="validateInput"
        />
        <p v-if="nameValidity === 'invalid'">this field its required.</p>
      </div>
      <div class="form-group">
          <label >Last Name</label>
        <input type="lastName" class="form-control" v-model.trim="lastName" />
      </div>
      <div class="form-group">
          <label >Permission Type</label>
        <select class="form-control" v-model="permissionType">
          <option value="1">Default select</option>
        </select>
      </div>
    </div>
    <div class="form_actions">
      <button type="button" @click="submitForm" class="btn btn-success">
        Success
      </button>
    </div>
  </form>
</template>

<script>
import axios from '../utilitys/axios';
export default {
  name: "Form",
  data() {
    return {
      name: "",
      lastName: "",
      permissionType:'',
      nameValidity: "valid",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    submitForm() {
      axios.get('/permission/get/all')
      .then(res=>{
          console.log(res.data);
      })
      .catch(err=>{
          console.log(err)
      })
    },
    validateInput() {
      if (this.name === "") {
        this.nameValidity = "invalid";
      } else {
        this.nameValidity = "valid";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  width: 30vw;
  height: 50vh;
  margin: auto;
  background-color: beige;
  display: grid;
  grid-template: "header" "body" "actions";
  grid-template-rows: 3rem auto 3rem;
  box-shadow: 3px 4px 4px 3px rgb(129, 129, 58);
  border-radius: 2px 4px;
}
.form_body {
  grid-area: body;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
}

.form-control.invalid {
  border-color: red;
}

.form_header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form_header > h3 {
  margin: 0;
}

.form_actions {
  grid-area: actions;
}
</style>
