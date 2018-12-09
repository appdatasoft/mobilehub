<template>
  <div class="ui five wide  grid">
    <div class="ui three wide column " id="column_2">
      <v-menuleft/>
    </div>

    <!-- First Steps -->
      <div class="twelve wide column" id="column_2">
        <div class="ui tiny six steps">
          <a href="/Startups" class="active step">
            <i class="bug icon"></i>
            <div class="content">
              <div class="title">Startups</div>
              <div class="description">Your details</div>
            </div>
          </a>
          
          <a href="/Solution" class="active step">
            <i class="thumbs up outline icon"></i>
            <div class="content">
              <div class="title">Solution</div>
              <div class="description">Please Define Your Solution</div>
            </div>
          </a>
          
          <a href="/cp" class="active step">
            <i class="id user icon"></i>
            <div class="content">
              <div class="title">Customer Personas</div>
              <div class="description">Elaborate Your Customer Personas</div>
            </div>
          </a>
          
          <a href="/cd" class="active step">
            <i class="id handshake outline icon"></i>
            <div class="content">
              <div class="title">Customer Development</div>
              <div class="description">Elaborate Your Development</div>
            </div>
          </a>
          
          <a href="/MarketResearch" class="active step">
            <i class="flask icon"></i>
            <div class="content">
              <div class="title">MarketResearch</div>
              <div class="description">Expalain Prototype</div>
            </div>
          </a>
          
          <a href="/Validate" class="active step">
            <i class="binoculars icon"></i>
            <div class="content">
              <div class="title">Validate</div>
              <div class="description">Validate the data</div>
            </div>
          </a>
        </div>
      

      <!-- End of Steps -->
      <!--    Form Filling      -->
        <div class="ui segment">
          <h2 class="ui dividing header">Customer Personas</h2>
          <form class="ui form">
            <div class="field">
              <label>Customer name</label>
              <input type="text">
            </div>

            <div class="field">
              <label>Customer Occupation/Title</label>
              <input type="text">
            </div>

            <div class="field">
              <label>Company Name</label>
              <input type="text">
            </div>

            <div class="field">
              <label>When will this customer pay for your solution?</label>
              <input type="text">
            </div>

            <button class="ui button primary">Save</button>
            <button class="ui button primary">Publish</button>
          </form>
        </div>
      </div>
    </div>
  <!-- </div> -->
  <!-- </div> -->
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
#column_2{
  padding-top:25px; 

}
</style>