<template>
  <div class="ui five wide grid">
    <div class="ui three wide column" id="column_2">
      <v-menuleft/>
    </div>

    <!-- Details -->
    <div class="ui twelve wide column" id="column_2">
      <div class="ui segment">
        <button class="ui circular teal icon right floated button">
          <i class="large plus icon"></i>
        </button>
        <h2 class="ui dividing header">Customer Development Market Place</h2>

        <!-- Only text  -->
        <div class="ui grid">
          <div class="four wide column">
            <p>Google Hiring Manager</p>
            <h4 class="ui grey header">Hacko hire &emsp; <i> by Bill</i></h4>
          </div>

          <div class="three wide column">
            <p></p>
          </div>

          <div class="two wide column">
            <h1>$ 10</h1>
          </div>
        </div>
         <!-- Only text  -->
      </div>
    </div>
   
  </div>
</template>



<script>
import { mapState } from "vuex";

export default {
  name: "cb",
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
#column_2 {
  padding-top: 25px;
}
</style>