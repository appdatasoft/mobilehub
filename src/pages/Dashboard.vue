<template>
  <b-container>
    <div class="b-main-content">
      <h2>Start building your dreams.</h2>
      <div class="tasks">
      <p>{{ user.username }}, What is your dream job?.</p>
      <input v-model="taskname" placeholder="Enter your dream job" class="input">
    <button
      @click="createTask()"
      class="taskButton"
    >Save</button>
    </div>
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

<style scoped>
* {
  box-sizing: border-box;
}
.taskButton {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #2196F3;
  border: none;
  color: white;
  outline: none;
}
.input {
  width: 100%;
  padding: 8px;
  font-size: 18px;
  border: none;
  border-bottom: 2px solid #2196F3;
  outline: none;
}
.button {
  cursor: pointer;
}
.button:hover {
  opacity: 0.5
}
.text {
  margin-top: 4px;
  margin-bottom: 0px;
}
.delete {
  color: #2196F3;
}
.task {
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  padding-top: 8px;
  padding-bottom: 9px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
     color: #42b983;
}
</style>