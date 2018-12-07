<template>
  <b-container class="feed">
    <!-- using Semantic Class -->
    <div class="ui grid">
      <!-- First Column  -->
      <div class="four wide column" id="column_1">
        <div class="ui segment">
          <form class="ui reply form">
            <div class="field">
              <div class="ui cube shape">
                <div class="sides">
                  <div class="active side">
                    <div class="content">
                      <div class="center"><i class="user circle icon"></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <textarea placeholder="Compose your tweet here"></textarea> -->
            </div>
            <button class="fluid ui blue button">Follow</button>
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
      <div class="eight wide column" id="column_2">
        <div class="ui segment">
          <h2 class="ui medium dividing header">Timeline</h2>
          <h6 class="ui medium dividing header">
            Welcome
            <a href>{{ user.username }}</a>
          </h6>

          <div class="ui list">
            <div class="event">
              <div class="item">
                <!-- Should get AWS Timestamp -->
                <div class="date">1 Hour Ago</div>
                <div class="task" v-for="(task, index) in tasks" :key="index">
                  <a>
                    <strong>{{ task.username }}</strong>
                  </a>:
                  <br>
                  {{ task.name }}
                  <br>
                  <div class="ui dividing"></div>
                </div>
              </div>
            </div>
          </div>
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
</style>