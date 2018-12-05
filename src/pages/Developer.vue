<template>
<div class="Hiring">
  <div class="ui stackable grid container ">
    <div class="ten wide column">
      <div class="ui segment">
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
   name: 'developer',
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