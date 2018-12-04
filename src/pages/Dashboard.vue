<template>
  
  <div >
    
    <b-row class="justify-content-center" pa>
      <b-card>
    <b-form id="card-position">
      <b-form-group id="exampleInputGroup1"
                    label="Full Name"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      required
                      placeholder="Enter Full Name">
      </b-form-input>
      </b-form-group>
      
      <b-form-group id="exampleInputGroup2"
                    label="User Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      required
                      placeholder="Enter User Name">
      </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup3"
                    label="Email address:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
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

      <b-form-group id="exampleInputGroup5"
                    label="Location:"
                    label-for="exampleInput5">
        <b-form-input id="exampleInput5"
                      type="text"
                      required
                      placeholder="Enter Location">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup6"
                    label="Website URL:"
                    label-for="exampleInput6">
        <b-form-input id="exampleInput6"
                      type="URL"
                      required
                      placeholder="Enter Website URL">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
    </b-card>
    </b-row >
    
  </div>

</template>
<style>
#card-position{
    width: 550px
}
</style>



<script>
export default {
  name: "dashboard"
};
</script>