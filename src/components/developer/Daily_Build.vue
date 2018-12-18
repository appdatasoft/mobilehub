<template>
          <!-- using Semantic Class -->
    <div class="ui stackable six column grid">
       <v-menuleft/>
      <!--    End of Left Menu     -->
  
  
      <!--    Main Menu & text box      -->
      <div class="column" id="column_2">
        <div class="ui stackable grid container"></div>
        <div class="fourteen wide column">
          
          <div class="ui tiny four steps">
            
            <a href="/Dream_Job" class="active step">
              <i class="paper plane icon"></i>
                <div class="content">
                  <div class="title">Dream job</div>
                  <div class="description">Choose your dream job</div>
                </div>
            </a>
            <a class="active step">
              <i class="edit outline icon"></i>
                <div class="content">
                  <div class="title">Daily build</div>
                  <div class="description">Choose your daily build options</div>
                </div>
            </a>
            <a href="/Bugfix_Market" class="active step">
              <i class="bug icon"></i>
                <div class="content">
                  <div class="title">Bug fix market</div>
                  <div class="description">Choose bug fixing market options</div>
                </div>
            </a>
            <a class="active step">
              <i class="building icon"></i>
                <div class="content">
                  <div class="title">Startups</div>
                  <div class="description">Choose your startups options</div>
                </div>
            </a>
          </div>

            <!---                  form                 -->
            <div class="ui segment">
                <form class="ui form">
                    <div class="ui grid">
                        <div class="five wide column">
                    <p class="ui header">Build Daily</p>

                            <div class="column">
                                <!-- <i class="file massive image icon"></i> -->
                                <img class="ui medium image" src="https://semantic-ui.com/images/wireframe/image.png">
                            </div>
                        </div>
                        
                        <div class="nine wide column">
                          <p class="ui header">Title</p>
                            <div class="column">
                                <textarea v-model="title" rows="10" placeholder="Describe what you built today"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="field"><br/>
                <label><i class=" align justify icon"> </i>Code Snippet </label>               
                <textarea rows="6" v-model="code" placeholder="code snippet"></textarea>
                    </div>

                    <div class="field">
                <label>Language</label>
                <input v-model="language" type="text">
                   </div>

              <div class="field">
                <label>Problems faced</label>
                <textarea v-model="problem" rows="6" ></textarea>
              </div>


           <div class="field">
                <label>Solutions to problems
                </label>
                <textarea v-model="solution" rows="6" ></textarea>                
              </div>


              <div class="field">
                <label>Price
                </label>
                <input v-model="price" type="text">
              </div>              


             <button @click="createdailybuild()" class="ui submit button">Save</button>
              <button class="ui submit button primary">Publish</button>
                </form>
          <!--    Form Filling      -->   
           <ul>
      <li v-for="(JobPost, index) in JobPosts" :key="index">
        <p class="text">{{ JobPost.title }}  
        </p>
        <p class="text">{{ JobPost.price }}  
        </p>
        <p class="text">{{ JobPost.problem }}  
        </p>
        <p class="text">{{ JobPost.solution }}  
        </p>
         <p class="text">{{ JobPost.code }}  
        </p>
        <p class="text">{{ JobPost.language}}  
        </p>
         </li>
    </ul>       
        </div>
      </div>
  </div>
   </div>
    <!-- </div> -->
  
</template>
<script>
import ListJobPosts from '../../queries/ListAllDaily_Build'
import CreateJobPost from '../../mutations/CreateDaily_Build'
// import ListTitleJobPosts from '../../queries/ListAllDaily_Build'
import uuidV4 from 'uuid/v4'
import { mapState } from 'vuex'
export default {
   name: 'jobPosts',
    computed: {
        ...mapState({
            user: state => state.auth.user,
        })
    },
    methods: {
      createdailybuild() {

      const title = this.title
      const code = this.code
      const problem = this.problem
      const solution = this.solution
      const language = this.language
      const price = this.price
      const username = this.user.username  
     
      if ((title) === '' || (code === '') || (problem === '') || (solution === '') || (language === '') ||(price === '') ) {
        alert('please enter all fields')
        return
      }
      this.title = ''
      this.code = ''
      this.problem = ''
      this.solution = ''
      this.language = ''
      this.price = ''
      const id = uuidV4()
      const JobPost = {
        username:username,
        title:title,
        code:code,
        id,
        problem :problem,
        solution:solution,
        language:language,
        price:price
      }
      this.$apollo.mutate({
        mutation: CreateJobPost,
        variables: JobPost,
        update: (store, { data: { createDaily_Build } }) => {
          const data = store.readQuery({ query: ListJobPosts })
          data.listDaily_Builds.items.push(createDaily_Build)
          store.writeQuery({ query: ListJobPosts, data })
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createJobPost: {
            __typename: 'Daily_build',
            ...JobPost
          }
        },
      })
      .then(data => console.log(data))
      .catch(error => console.error("error!!!:", error))
    },
  },
  data () {
    return {
          title:'',
          code:'',
          problem:'',
          solution:'',
          language:'',
          price :'',
          username:'',
          JobPosts: [],

    }
  },
     apollo: {
    JobPosts: {
      query: () => ListJobPosts,
      update: data => data.listDaily_Builds.items
    },
    
  }
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  
  #column_1 {
    padding-top: 20px;
  }
  
  #column_2 {
    padding-top: 50px;
    padding-left: 3%;
    width: 60%;
  }
</style>