<template>
  <div class="twelve wide column" id="column_2">
    <div class="ui segment">
        <!-- for image and text box  -->
        <div class="ui two column vertically stackable ui grid">
          <div class="two column row">
            <div class="column">
              <div class="ui segment">
                <img class="ui small image" src="/src/assets/logo2.png">
              </div>
            </div>
            <div class="column">
              <div class="ui segment">
                <h3 class="ui dividing header">Problem</h3>
                <div class="Seven wide column">
                  <div class="field">
                    <p>No one place for software developers to plan and develop their career path.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <h3 class="ui dividing header">Solution</h3>
          <p>An web and mobile app that provides career growth tools for software developers</p>
        </div>
        <br>

        <div class="field">
          <h3 class="ui dividing header">Benefits</h3>
          <p>1. Tools to plan for next career step</p>
          <p>2. Bug market place to save time on fixing bugs while learning</p>
          <p>3. Ability to connect and advise startups</p>
        </div>
        <br>

        <div class="field">
          <h3 class="ui dividing header">
            Customer Personas &emsp;
            <button class="ui circular teal icon button">
              <i class="plus icon"></i>
            </button>
          </h3>
          <p>
            Customer 1 &emsp; &emsp;
            <button class="ui button">Invite</button>
          </p>
          <p>
            Customer 2 &emsp; &emsp;
            <button class="ui button">Invite</button>
          </p>
        </div>
        <br>

        <div class="field">
          <h3 class="ui dividing header">
            MVP &emsp; &emsp;
            <button class="ui circular teal icon button">
              <i class="plus icon"></i>
            </button>
          </h3>
          <p>Feature 1 &emsp; &emsp;</p>
          <p>Feature 2 &emsp; &emsp;</p>
        </div>
        <br>

        <div class="field">
          <h3 class="ui dividing header">Prototype</h3>
          <p>Prototype weblink</p>
          <p>Prototype iPhone link</p>
          <p>Prototype Android link</p>
        </div>
        <br>
        <div class="field">
          <h3 class="ui dividing header">Validation</h3>
          <p>Customer 1 logged in</p>
          <p>Customer 1 feedback</p>
        </div>

        <!-- <button class="ui button primary">Save</button>
        <button class="ui button primary">Publish</button>-->
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
  padding-left: 2%;
  width: 60%;
}
</style>