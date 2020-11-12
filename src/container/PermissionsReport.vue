<template>
<div class="content">
  <div class="test">
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>
        <button type="button" @click="show" class="btn btn-secondary">delete</button>
      </td>
    </tr>
  </tbody>
</table>

<PopUp v-if="showPopUp" @onHide="show"/>
  </div>
 
<BackDrop v-if="showPopUp" />
  </div>
</template>

<script>
import PopUp from '../components/PopUp.vue';
import BackDrop from "../components/BackDrop";
export default {
  name: "PermissionReport",
  data(){
    return{
        showPopUp:false
    }
  },
  components:{
    PopUp,
    BackDrop
  },
  methods:{
    show(){
      this.showPopUp = !this.showPopUp;
    }
  }
};
</script>

<style scoped>
.test{
    display: flex;
    width: 80%;
    margin: auto;
    box-shadow: 1px 1px 1px black;
}
</style>