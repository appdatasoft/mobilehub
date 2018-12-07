<template>
<div >
  <div class="ui centered grid ">
    <div class="eight wide column" >
      <div class="ui segment">
        <div class="tasks">
          <p class="ui left floated"><strong>Timeline</strong>
            <button class="ui right floated active button">
              <i class="user icon"></i>
                Follow
            </button>
          </p>
            <ul>
              <li
                class="task"
                v-for="(task, index) in userTasks" :key="index"
              >
               <p class="text">{{ task.name }} created by username  {{ task.username }}.</p>         
               
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  computed: {
        ...mapState({
            user: state => state.auth.user,
        }),
    },
  name: 'FeedFace' 
}
</script>
 