<template>
  <b-container>
    <div class="b-main-content">
      <h2>HUB for Software Engineers.</h2>
      <p>You are logged in as {{ user.username }}.</p>
    </div>
  </b-container> 
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            user: state => state.auth.user,
        })
    }
}
</script>

