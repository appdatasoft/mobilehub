<template>
  <div class="ui five wide grid">
    <div class="ui three wide column" id="column_2">
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
      <!--    Form Filling and Image upload  -->
      <div class="ui segment">
        <div class="twelve wide column">
          <h2 class="ui dividing header">Give details of your idea</h2>
        <form class="ui form" >
          <div class="field">
            <label>Full Name</label>
            <input type="text" name="name"  v-validate="'required'">
            <span  class="is-danger"></span>
          </div>
          <div class="field" >
            <label>Username</label>
            <input type="text" name="username"  v-validate="'required'">
            <!-- <span v-show="errors.has('username')" class="is-danger">{{ errors.first('username') }}</span> -->
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" name="email"  v-validate="'required|email'" placeholder="Email">
            <!-- <span v-show="errors.has('email')" class="is-danger">{{ errors.first('email') }}</span> -->
          </div>

          <div class="field">
            <label>Bio</label>
            <textarea  rows="5" placeholder="A breif bio of you"></textarea>
          </div>
          <div class="field">
            <label>Location</label>
            <input type="text"  placeholder="Your location">
          </div>
          <div class="field">
            <label>Website URL</label>
            <input type="url"  placeholder="Website URL">
          </div>
          <button class="ui button primary">Update profile</button>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
   name: 'startups',
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
.Hiring{
  padding-left:30% ;
  margin-top:20px;

}

</style>