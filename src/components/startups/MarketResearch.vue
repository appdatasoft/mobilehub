<template>
  <div class="ui five wide grid">
    <div class="ui three wide column" id="column_2">
      <v-menuleft/>
    </div>

    <!-- First Steps -->
    <div class="twelve wide column" id="column_2">
      <!-- End of Steps -->
      <!--    Form Filling      -->
      <div class="ui segment">
        <button class="ui teal right floated button">All Posts</button>
        <h2 class="ui dividing header">Customer Development Market Place</h2>
        <form class="ui form">
          <div class="field">
            <label>Company name</label>
            <input type="text">
          </div>

          <div class="field">
            <label>Title</label>
            <input type="text">
          </div>

          
          <div class="field">
          <label>Price</label>
          <select class="ui search dropdown">
            <option value>Select</option>
            <option value>New</option>
            <option value>Old</option>
          </select>
          </div>

          <div class="field">
            <label>Price</label>
            <input type="text">
          </div>

          <button class="ui button primary">Save</button>
          <button class="ui button primary">Publish</button>
        </form>
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