<template>
  <b-container class="feed">
      <!-- <div class="ui card"></div> -->
    <!-- using Semantic Class -->
    <div class= "ui stackable two column centered vertically padded grid container">
      <!-- First Column  -->
      <div class="four wide column" id="column_1">
        <div class="ui segment">
          <form class="ui reply form">
            <div class="field">
              <!-- <div class="ui cube shape"> -->
                <div class="sides">
                  <div class="active side">
                    <!-- <div class="content">
                      <div class="center"><i class="user circle icon"></i></div>
                    </div> -->
                  </div>
                </div>
              <!-- </div> -->
              <textarea placeholder="Compose your tweet here"></textarea> 
            </div>
         <b-nav-item to='/tasks'>  <button class="fluid ui blue button">back to home</button>.</b-nav-item>   
          </form>
          <div class="ui pointing menu active">
            <a class="item">
              <i class="home icon"></i>
            </a>
            <a class="item">
              <i class="user setting icon"></i>
            </a>
            <a class="item">
              <i class="user circle icon"></i>
            </a>
            
            <a class="item">
              <i class="sign out alternate icon"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Middle column -->
       <div class="eight wide column">
      
            <div class="ui segment">
             <form class="ui reply form"><div class="field"><textarea placeholder="Compose your tweet here"></textarea></div></form>
    <p>welcome {{ user.username }}.  <button class="ui primary button right floated">
  Follow
</button> </p>

       <li class="task"
        v-for="(task, index) in userTasks" :key="index">
        <p class="text">  {{ task.username }}.</p>
        <p>{{ task.name }} </p>
       </li>  
       </div>
    </div>
      <!-- Third column -->
      <div class="four wide column" id="column_3">
        <div class="ui segment">
          <h2 class="ui medium dividing header">Whom To Follow</h2>
          <div class="task" v-for="(task, index) in tasks" :key="index">
            <p class="text">{{ task.username }}</p>
          </div>
        </div>
      </div>
      </div>
  </b-container>
</template>                            


<script>
import ListTasks from "../queries/ListTasks";
import ListUserTasks from "../queries/ListUserTasks";
import CreateTask from "../mutations/CreateTask";
import DeleteTask from "../mutations/DeleteTask";
import UpdateTask from "../mutations/UpdateTask";
import uuidV4 from "uuid/v4";
import { mapState } from "vuex";

export default {
  name: "feed",

  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },

  apollo: {
    tasks: {
      query: () => ListTasks,
      update: data => data.listTasks.items
    },
    userTasks: {
      query: () => ListUserTasks,
      variables() {
        return {
          username: this.user.username
        };
      },
      update: data => data.listTasks.items
    }
  }
};
</script>




<style scoped>
* {
  box-sizing: border-box;
}

.feed {
  padding-top: 40px;
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
#column_3{
    width: 100px;
}
</style>