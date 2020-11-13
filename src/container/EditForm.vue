<template>
  <form class="form">
    <div class="form_header">
      <h2>Edit Request.</h2>
    </div>
    <div class="form_body">
      <div class="form-group">
        <label>Name</label>
        <input
          type="name"
          class="form-control"
          :class="{ invalid: !validation['EmployeeName'].valid }"
          v-model.trim="EmployeeName"
          @blur="validate('EmployeeName')"
        />
        <p v-if="!validation['EmployeeName'].valid">this field its required.</p>
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input
          type="lastName"
          class="form-control"
          :class="{ invalid: !validation['EmployeeLastName'].valid }"
          v-model.trim="EmployeeLastName"
          @blur="validate('EmployeeLastName')"
        />
        <p v-if="!validation['EmployeeLastName'].valid">
          this field its required.
        </p>
      </div>
      <div class="form-group">
        <label>Permission Type</label>
        <select class="form-control" v-model="permissionTypeSelected">
          <option
            :key="type.id"
            :value="type.id"
            v-for="type in permissionTypes"
          >
            {{ type.description }}
          </option>
        </select>
      </div>
    </div>
    <div class="form_actions">
      <button
        id="createPermissionBtn"
        type="button"
        @click="submitForm"
        class="btn btn-success"
        :disabled="!enableButton"
      >
        Save
      </button>
    </div>
    <BackDrop v-if="showSpiner" />
    <PulseLoader v-if="showSpiner" />
    <transition name="slide">
      <Alert v-if="showAlert" :alertType="alertType" :msg="alertMsg" />
    </transition>
  </form>
</template>

<script>
import axios from "../utilitys/axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import BackDrop from "../components/BackDrop.vue";
import Alert from "../components/Alert.vue";

export default {
  name: "Form",
  data() {
    return {
      requestId: this.$route.params.id,
      EmployeeName: "",
      EmployeeLastName: "",
      permissionTypeSelected: 1,
      showSpiner: false,
      permissionTypes: [],
      alertType: "",
      showAlert: false,
      alertMsg: "",
      validation: {
        EmployeeName: {
          valid: true,
          rule: "required",
        },
        EmployeeLastName: {
          valid: true,
          rule: "required",
        },
      },
      enableButton: true,
    };
  },
  components: {
    PulseLoader,
    BackDrop,
    Alert,
  },
  methods: {
    submitForm() {
      this.showSpiner = true;
      const permissionType = this.permissionTypes.find(
        (pt) => pt.id === this.permissionTypeSelected
      );
      const data = JSON.stringify({
        EmployeeName: this.EmployeeName,
        PermissionType: permissionType,
        EmployeeLastName: this.EmployeeLastName,
      });
      axios
        .post("/permission/update/"+this.requestId, data)
        .then((res) => {
          this.showAlert = true;
          console.log(res.data);
          if (res.data.succeed) {
            this.alertType = "alert alert-success";
            this.alertMsg = "Form updated successfully";
          } else {
            this.alertType = "alert alert-danger";
            this.alertMsg = res.data.error.detail;
          }
          this.showSpiner = false;
        })
        .catch((err) => {
          this.showAlert = true;
          this.alertType = "alert alert-danger";
          this.alertMsg = err;
          this.showSpiner = false;
          console.log(err);
        });
    },
    validate(input) {
      if (this[input] === "") {
        this.validation[input].valid = false;
      } else {
        this.validation[input].valid = true;
      }

      this.enableButton =
        this.EmployeeName !== "" && this.EmployeeLastName !== "";
    },
  },
  mounted() {
    axios
      .get("/permissionType/get/all")
      .then((res) => {
        this.permissionTypes = res.data.body;
      })
      .catch((err) => {
        console.log(err);
      });

      axios
      .get("/permission/get/" + this.requestId)
      .then((res) => {
        this.EmployeeName = res.data.body[0].employeeName;
        this.EmployeeLastName = res.data.body[0].employeeLastName;
        this.permissionTypeSelected = res.data.body[0].permissionType.id;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.form {
  width: 30vw;
  height: 57vh;
  margin: auto;
  background-color: white;
  display: grid;
  grid-template: "header" "body" "actions";
  grid-template-rows: 3rem auto 5rem;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 2px 4px;
}
.form_body {
  grid-area: body;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 1rem auto;
}

.form-control.invalid {
  border-color: red;
}

.form_header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #343a40;
  color: white;
  border-bottom: 1px solid black;
}

.form_header > h3 {
  margin: 0;
}

.form_actions {
  grid-area: actions;
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 0.3s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}

#createPermissionBtn:disabled {
  background-color: #c7c6c6;
  cursor: not-allowed;
  border: 1px solid #ccc;
  color: #383535;
}

#createPermissionBtn:not(:disabled) {
  animation: enable 0.3s linear;
}
#createPermissionBtn {
  font-size: 1.2rem;
}

@keyframes enable {
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
