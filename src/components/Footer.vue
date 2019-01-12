<template>
  <footer class="bd-footer">
    <b-container>
      <b-row class="justify-content-md-center">
        <div class="bd-footer-copyright">© 2019 Hackohire.</div>
        <br/>
        <!-- <div class="bd-footer-copyright">Privacy</div> -->
        <!-- <div class="bd-footer-copyright">Privacy</div> -->
        <!-- <b-nav-item to="/hiring">Hiring</b-nav-item> -->
        
      </b-row>
      <!-- <b-row class="justify-content-md-center">
        <b-nav-item to="/privacy" class="bd-footer-copyright">privacy</b-nav-item>
      </b-row> -->
      <div class="justify-content-md-center">
        <b-nav-item to="/privacy">privacy</b-nav-item>
      </div>
    </b-container>
  </footer>
</template>

<script>
// import Privacy from "@/pages/Privacy.vue"
// Vue.component('v-privacy',Privacy.vue)
export default {
    
}
</script>

<style>
.bd-footer {
  margin-top: 2em;
  border-top: .2rem #f7f7f7 solid !important;
}

.bd-footer-copyright {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
