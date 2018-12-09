<template>
  <div class="ui stackable six column grid">
    <div class="ui two wide column">
      <v-menuleft/>
    </div>

    <!-- First Steps -->
    <div class="column" id="column_2">
      <div class="ui ten wide column">
        <div class="ui tiny six steps">
          <div class="step">
            <i class="bug icon"></i>
            <div class="content">
              <div  class="title">Problem</div>
              <div href="/Solution" class="description">Solution</div>
            </div>
          </div>
          <div class="active step">
            <i class="paint brush icon"></i>
            <div class="content">
              <div  class="title">Customer</div>
              <div href="personas" class="description">Personas</div>
            </div>
          </div>
          <div class="active step">
            <i class="id badge outline icon"></i>
            <div class="content">
              <div  class="title">Customer</div>
              <div href="/cd" class="description">Development</div>
            </div>
          </div>
          <div class="active step">
            <i class="flask icon"></i>
            <div class="content">
              <div class="title">Prototype</div>
              <div href="MVP" class="description">MVP</div>
            </div>
          </div>
          <div class="active step">
            <i class="binoculars icon"></i>
            <div class="content">
              <div class="title">Validate</div>
              <div href="Validate" class="description">Viable</div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Steps -->
      <div class="twelve wide column">
        <div class="ui segment">
          <div class="ui two column vertically stackable ui grid">
            <h2 class="header">Solution</h2>
            <div class="two column row">
              <div class="column">
                <div class="ui segment">
                  <div class="ui cube shape">
                    <div class="sides">
                      <div class="active side">
                        <div class="content">
                          <div class="center">
                            <i class="user circle icon"></i>
                            <a href>Upload Your Image</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                     <p>Current Title:</p> <br>
                      <p>Current Company:</p>

              </div>
            </div>
          </div>
        </div>

        <!--    Form Filling      -->
        <div class="ui segment">
          <form class="ui form">
            <div class="field">
              <label>Companies you would like to work for:</label>
              <input type="text">
            </div>
            <div class="field">
              <label>Projects you would like to work for:</label>
              <input type="text">
            </div>

            <div class="field">
              <label>Title /position you are working towards:</label>
              <input type="text">
            </div>

            <div class="field">
              <label>2 year salary goal:</label>
              <input type="text">
            </div>

            <div class="field">
              <label>5 year salary goal:</label>
              <input type="text">
            </div>

            
            <div class="field">
              <label>Job posting URL:</label>
              <input type="text">
            </div>

            

            <button class="ui button primary">Update profile</button>
          </form>
        </div>
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

#column_1 {
  padding-top: 20px;
}

#column_2 {
  padding-top: 1.5%;
  padding-left: 8%;
  width: 60%;
}
</style>