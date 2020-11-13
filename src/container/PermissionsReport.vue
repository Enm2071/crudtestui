<template>
  <div class="content">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Employee Name</th>
          <th scope="col">Employee Last Name</th>
          <th scope="col">Permission</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody is="transition-group" name="appear">
        <tr v-bind:key="permission.id" v-for="permission in permissions">
          <th scope="row">{{ permission.employeeName }}</th>
          <td>{{ permission.employeeLastName }}</td>
          <td>{{ permission.permissionType.description }}</td>
          <td style="display:flex;justify-content:space-evenly">
            <button
              type="button"
              @click="show(permission.id)"
              class="btn btn-outline-danger"
            >
              Delete
            </button>
            <button
              type="button"
              @click="edit(permission.id)"
              class="btn btn-outline-info"
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <transition name="move">
      <PopUp v-if="showPopUp" @onHide="show" @onDelete="deletePermission" />
    </transition>
    <BackDrop v-if="showPopUp || showSpiner" />
    <PulseLoader v-if="showSpiner" />
  </div>
</template>

<script>
import PopUp from "../components/PopUp.vue";
import BackDrop from "../components/BackDrop";
import axios from "../utilitys/axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "PermissionReport",
  data() {
    return {
      showPopUp: false,
      id: null,
      showSpiner: false,
      permissions: [],
    };
  },
  components: {
    PopUp,
    BackDrop,
    PulseLoader,
  },
  methods: {
    show(id) {
      this.id = id;
      this.showPopUp = !this.showPopUp;
    },
    deletePermission() {
      this.showSpiner = true;
      axios
        .post("/permission/delete/" + this.id)
        .then((res) => {
          if (res.data.succeed) {
            let newPermissions = this.permissions;
            this.permissions = newPermissions.filter((p) => p.id !== this.id);
            this.showPopUp = false;
          }
          this.showSpiner = false;
        })
        .catch((err) => {
          console.log(err);
          this.showSpiner = false;
          this.showPopUp = false;
        });
    },
    edit(id){
      this.$router.push('/edit-permission/'+id);
    }
  },
  beforeMount() {
    axios
      .get("/permission/get/all")
      .then((res) => {
        this.permissions = res.data.body;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>

.content {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086);
}

tbody{
  background: white;
 
}
table{
   margin: 0;
}


.move-enter-active {
  animation: slide-in 0.5s ease-out forwards;
}

.move-leave-active {
  animation: slide-out 0.3s ease-out forwards;
}

.appear-enter {
  opacity: 0;
}

.appear-enter-active {
  transition: opacity 1s;
}

.appear-leave-active {
  transition: opacity 0.4s;
  opacity: 0;
  position: absolute;
}

.appear-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(-100px);
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
    transform: translateY(-300px);
  }
}
</style>