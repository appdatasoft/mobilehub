<template>
 <b-container> 
<b-row class="justify-content-center">
  <div class="hiring">
    <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
      <b-form class="form_hiring">
         <b-card >
           <h3 class="Hp">Give details of your business automation requirements</h3>
           <b-form-group id="exampleInputGroup2"
                    label="Full Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      required
                      placeholder="Enter Full name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup2"
                    label="UserName:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      required
                      placeholder="Enter Username">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
        <b-form-group id="exampleInputGroup4"
                    label="Bio"
                    label-for="exampleInput4">
        <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
        </b-form-textarea>
      </b-form-group>
<b-form-group id="exampleInputGroup3"
                    label="Location:"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="foods"
                      required
                     >
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Website Url:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      
    
      <b-button type="submit" variant="primary">Submit</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
       </b-card>
    </b-form>
   
  </div>
  </b-row>
   </b-container> 
</template>
 


<script>
import { mapState } from 'vuex'

export default {
   name: 'hiring',
    computed: {
        ...mapState({
            user: state => state.auth.user,
        })
    }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
/* .row{
border: 
} */
.Hp{
border-bottom:1px solid rgba(34,36,38,.15);
}
.form_hiring{
  /* padding: 20px; */
  width: 650px;
}
.hiring{
  padding:50px;
}
.taskButton {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #2196F3;
  border: none;
  color: white;
  outline: none;
}
.input {
  width: 100%;
  padding: 8px;
  font-size: 18px;
  border: none;
  border-bottom: 2px solid #2196F3;
  outline: none;
}
.button {
  cursor: pointer;
}
.button:hover {
  opacity: 0.5
}
.text {
  margin-top: 4px;
  margin-bottom: 0px;
}
.delete {
  color: #2196F3;
}
.task {
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  padding-top: 8px;
  padding-bottom: 9px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
     color: #42b983;
}
</style>