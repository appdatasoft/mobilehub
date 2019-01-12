<template>
<div class="ui six column grid" >
 <div class="column" id="side_bar">   
   <v-menuleft/>
</div>  
 <!-- column -2 -->
 
<div class="column" id="column_2">
<!-- <div class="ui compact segment" id="column_2_segment"> -->
  <div class="ui stackable grid container ">
    <div class="fourteen wide column">
     
          <!-- bread crum -->
          <div class="ui four steps">
  <a href="/Job_Posts" class="active step">
    <i class="paste icon"></i>
    
    <div class="content">
      <div class="title">Job Posts</div>
      <div class="description">Job related posts</div>
    </div>
  </a>
  <a href="/Candidates" class="active  step">
    <i class="user  icon"></i>
    <div class="content">
      <div class="title">Candidates</div>
      <div class="description">Enter billing information</div>
    </div>
  </a>
  <a class=" active  step">
    <i class="hourglass start icon"></i>
               <div class="content">
           <div class="title">Interview Hackathon</div>
         <div class="description">Verify order details</div>
       </div>
     </a>
     <a href="/hiring" class="active step">
    <i class="handshake icon"></i>
               <div class="content">
           <div class="title">Hiring</div>
         <div class="description">Verify order details</div>
       </div>
     </a>
  </div>
    <!--end bread crum -->
      <div class="ui segment">
        <h2 class="ui dividing header">Hackathon Details</h2>
        <form class="ui form error">
          <div class=" required field">
            <label>Hackathon Title</label>
            <input type="text" minlength="5" maxlength="50" v-model="title"  id="title1" placeholder="Enter Title" required >
            <!-- title validations -->
 <span v-if="errors.length && !this.title">
    <div class="ui basic red pointing prompt label transition visible"> Tittle value is missing</div>
    
 </span>
 <span v-if="errors1.length && this.title.length < 5 && this.title.length > 0">
    <div class="ui basic red pointing prompt label transition visible">Title value requires 5 characters</div>
  </span>
          
                <!-- title validation ends here -->
          </div>
          <div class="required field" >
            <label>Company Name</label>
            <input type="text"  minlength="5" maxlength="50" v-model="companyname" placeholder="Enter Company Name"  required>
           <!-- companyname validations -->
          <span v-if="errors.length && !this.companyname ">
           <div class="ui basic red pointing prompt label transition visible">Company Name value is missing</div>
         </span>  
          <span v-if="errors1.length && this.companyname.length < 5 && this.companyname.length > 0">
            <div class="ui basic red pointing prompt label transition visible">Company Name value requires 5 characters</div>
          </span>
          </div>
          <span class="required field" >
            <label>Hackathon is for what job openings?</label>
            <!-- <input type="text" name="username"  v-validate="'required'"> -->
            <!-- multitag -->
  <multiselect               
                :searchable="false"
                 v-model="jobfor"
                 label="joblist"               
                 :options="jobList"                  
                 :multiple="true"  
                 open-direction="bottom"
                 :close-on-select="false"
                 track-by="joblist" 
                 :taggable="true"
                 tag-placeholder="Add this as new tag" 
                 :preselect-first="true"
                 placeholder="Select Job opening">

</multiselect>
<p>{{jobfor}}</p>
 <!-- <pre class="language-json"><code>{{ jobfor  }}</code></pre> -->
<div v-if="errors.length && this.jobfor == 0 ">
           <div class="ui basic red pointing prompt label transition visible">Select atleat one value</div>
 </div>
 <br/>
          </span>
      <!-- date AND time -->
  <div class="ui form">
    <div class="three fields">
      <div class="required field">
        <label>Hackathon Start Date and Start Time</label>
        <div class="ui calendar" id="example1">
         <div class="ui input left icon">
            <i class="calendar alternate outline icon"></i>
              <input type="date" v-model="startdate"  placeholder="Date" required>
            
          </div>  
            <span v-if="errors.length && !this.startdate  ">
           <div class="ui basic red pointing prompt label transition visible">Start Date value is missing</div>
         </span>        
        </div>
      </div>
<br/>
<div class="field" >
        <label>&emsp;</label>      
        <!-- <br/> -->
         <!-- <div class="ui input left icon">             -->
              <input type="time" v-model="starttime" placeholder="Date" required>
              <span v-if="errors.length && !this.starttime ">
           <div class="ui basic red pointing prompt label transition visible">Start Time value is missing</div>
         </span>
          <!-- </div>           -->       
</div>   
    </div>
  </div>
<div class="ui form">
    <div class="three fields">
    <div class="required field">
        <label>Hackathon End Date and End Time</label>
       <div class="ui calendar" id="example1">
         <div class="ui input left icon">
          <i class="calendar alternate outline icon"></i>
          <input  type="date" v-model ="enddate" placeholder="Date" required>
     
         </div>
        </div>
  <span v-if="((this.startdate) > (this.enddate) )&& (this.startdate && this.enddate)">
    <div class="ui basic red pointing prompt label transition visible">End Date must be greater or equal  to start date </div>
 </span>
  <span v-if="errors.length &&  !this.enddate ">
           <div class="ui basic red pointing prompt label transition visible">End Date value is missing</div>
         </span> 
      </div>
  <div class="field" >
        <label>&emsp;</label>                     
             <input type="time" v-model ="endtime" placeholder="Date" required> 
              <span v-if="errors.length && !this.endtime ">
           <div class="ui basic red pointing prompt label transition visible">endtime value is missing</div>
         </span>             
      </div>  
    </div>
</div>

             <!-- end date and  time -->
             <br/>

          <div class="required field">
            <label>Hackathon Address</label>
          <div class="field">
            <input type="text" v-model="address1" minlength="5" maxlength="100" placeholder="Address Line1" required>
    <span v-if="errors.length && !this.address1 ">
           <div class="ui basic red pointing prompt label transition visible">Address value is missing</div>
         </span>
         <span v-if="errors1.length && this.address1.length < 30 && this.address1.length > 0">
    <div class="ui basic red pointing prompt label transition visible">Address value requires 30 characters</div>
  </span>
    
          </div>
            
          <div class="field">
            <input type="text" minlength="5" v-model="address2" maxlength="100" placeholder="Address Line2" required>
          </div>

         <div class="two fields">
          <div class="field">
            <input type="text" minlength="5" maxlength="50" v-model="city" placeholder="City" required>
         
          <span v-if="errors.length && !this.city ">
           <div class="ui basic red pointing prompt label transition visible">City value is missing</div>
            
         </span>
      
         <span v-if="errors1.length && this.city.length < 3 && this.city.length > 0">
    <div class="ui basic red pointing prompt label transition visible">City value requires 3 characters</div>
  </span> 
           
          </div>          
          <div class="field">
            <input type="text" minlength="5" maxlength="30" v-model="state" placeholder="State" required>
        <span v-if="errors.length && !this.state ">
           <div class="ui basic red pointing prompt label transition visible">State value is missing</div>
         </span>
         <span v-if="errors1.length && this.state.length < 3 && this.state.length > 0">
            <div class="ui basic red pointing prompt label transition visible">State value requires 3 characters</div>
        </span>
          </div>
            
           <div class="field">
            <input type="number" v-model="zip" min="1" max="999999"  placeholder="Zip" required>
            <span v-if="errors.length && !this.zip ">
           <div class="ui basic red pointing prompt label transition visible">zip value is missing</div>
         </span>
      

         <span v-if="errors1.length && this.zip.length < 4 && this.zip.length > 0">
    <div class="ui basic red pointing prompt label transition visible">Zip value requires 4 characters</div>
  </span>
           </div>           
          </div>
          </div>
          <div align="center"><br/>
          <button @click="save"   class="ui submit button primary">Save</button>&emsp;
          <button class="ui button primary">Publish</button>&emsp;
          <button class="ui button primary">Cancel</button>&emsp;
        
        <span v-if="save">
          <button class="ui button primary">
                <router-link :to="`/hackathonprofile`">       
            profile</router-link></button>
        </span>
        
         </div>
 
 <div v-if="errors.length">
    <b>Please correct the following error(s):</b>
    
    <div class="ui red message"> 
   <div v-for="error in errors" :key="error">
     <ul>
     <li>{{ error }}</li>
     </ul>
      </div>

    <div v-for="error1 in errors1" :key="error1">
    <ul>
      <li>{{ error1 }}</li>
      </ul>
    </div>
    </div>    
  </div>
    </form>         
              </div>
          </div>
       </div>      
    </div>
  </div>
  
<!-- </div> -->
</template>
<script>

import { mapState } from 'vuex'
import Multiselect from 'vue-multiselect'
import CreateHackathon from "../../mutations/CreateHackathon"
import ListHackatons from "../../queries/ListHackatons"
import ListHackathonjoblists from "../../queries/ListHackathonjoblists"

import uuidV4 from "uuid/v4"

export default {
    components: { Multiselect },   
   name: 'hiring',
    computed: {
        ...mapState({
            user: state => state.auth.user,
        })
    },
  data(){
  return{
    job:[
        { key: 'job1', text: 'job 1', value: 'job1' },
        { key: 'job2', text: 'job 2', value: 'job2' },
        { key: 'job3', text: 'job 3', value: 'job3' },
        { key: 'job4', text: 'job 4', value: 'job4' },
    ],
    jobfor:[],
    title:'',
    jobList:[],
    companyname:'',   
    errors:[],
    errors1:[],
    zip:null,
    address1:'',
    address2:'',
    city:'',
    state:'',    
    startdate:'',
    enddate:'',
    starttime:'',
    endtime:'',    
  }
  },

  methods:{  
          save:function(e){
            this.errors = []
            this.errors1=[]
      //        if (this.title && this.companyname && this.address && this.city  && this.state && this.startdate && this.enddate && this.starttime && this.endtime) {
      //   return true;
      // }
            
            //title validation
                  if((!this.title)){
                      this.errors.push('Title field value is missing')
                   }
                   else if(this.title.length < 5){
                      this.errors1.push('Title field value requires minimum 5 characters')

                   }

                          
            //end title validation
          
          
          //  companyname validatin      
           
                if((!this.companyname)){
                  this.errors.push('Company Name field value is  missing')
                }
                else if(this.companyname.length < 5 ){
                  this.errors1.push('Company Name field value requires minimum 5 characters')
                } 
              

          //end  companyname avlidatin      
            

          //hackathon address
             if((!this.address1)){
                  this.errors.push('Address field value is  missing')
                 
             }
             if((!this.city)){
                  this.errors.push('City field value is  missing')                  
             }
           else if(this.city.length < 3){
                      this.errors1.push('City field value requires minimum 3 characters')

                   }
              if((!this.state)){
                  this.errors.push('State field value is  missing')                  
             }
              else if(this.state.length < 3){
                      this.errors1.push('State field value requires minimum 3 characters')

                   }
                     if((!this.zip)){
                  this.errors.push('zip field value is  missing')                  
                 } 
                 else if(this.zip.length < 4){
                      this.errors1.push('zip field value requires minimum 4 characters')
                   
                 } 
             
             //end hackathon address

            

            //multiple tagging validations
            if(this.jobfor == 0){
                      this.errors.push('Hackathon is for what job openings field selection is missing')
                   }
                 

            //end of multiple tagging validations

          //start date validations
            if((!this.startdate)){
                  this.errors.push('Start Date field value is  missing')                  
             }
             if((!this.starttime)){
                  this.errors.push('Start Time field value is  missing')                  
             }


          //end startdate validations
          
        // enddate validations
         if((!this.enddate)){
                  this.errors.push('End Date field value is  missing')                  
             }
             if(this.enddate == this.startdate){
                  this.errors.push('Start Date and End Date value field values are  same')                  
                  
             }
             if((!this.endtime)){
                  this.errors.push('End Time field value is  missing')                  
             }
          //end enddate validations
            e.preventDefault(); 
      const title = this.title
      const city = this.city
      const state = this.state
      const date = this.date
      const enddate = this.enddate
      const endtime = this.endtime
      const startdate = this.startdate
      const username = this.user.username
      const starttime = this.starttime
      const address1 = this.address1
      const address2 = this.address2
      const companyname = this.companyname
      const zip = this.zip


      // if ((title) === '' || (zip) ==='' || (companyname) === '' || (state) === '' || (startdate) === '' || (starttime) === '' || (enddate) === '' || (endtime) === '' || (address1) === '' || (city) === '') {
      //   alert("Please enter all details of your Hackathon!!")
      //   return
      // }
      this.title = ''
      this.city= ''
      this.state = ''
      this.enddate = ''
      this.startdate = ''
      this.starttime = ''  
     this.endtime = ''
     this.address1 = ''
     this.address2 = ''
      this.username = ''
      this.zip = ''
      this.companyname = ''
      const id = uuidV4()       
      const Hackaton = {
        title: title,
        state: state,
        startdate:startdate,
        enddate: enddate,
        starttime:starttime,
        address1: address1,
        address2: address2,        
        username:username,
         endtime: endtime,
        companyname:companyname,
        city:city,
        zip:zip,
        id,   
      }
      this.$apollo.mutate({
          mutation: CreateHackathon,
          variables: Hackaton,
          update: (store, { data: { createHackaton } }) => {
            const data = store.readQuery({ query: ListHackatons })
            data.listHackatons.items.push(createHackaton)
            store.writeQuery({ query: ListHackatons, data })
          },
          optimisticResponse: {
            __typename: 'Mutation',
            createHackaton: {
              __typename: 'Hackaton',
              ...Hackaton
            } 
          },
        })
        .then(data => console.log(data))
        .catch(error => console.error("error!!!: ", error))
    },
  },

  apollo: {

    Hackathons: {
      query: () => ListHackatons,
      update: data => data.listHackatons.items
    },
    jobList:{
      query:() => ListHackathonjoblists,
      update: data => data.listHackathonjoblists.items
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.Hiring{
  padding-left:30% ;
  margin-top:50px;

}
#column_2{
 width: 80%;
 padding-top:20px ;
}
#column_2_segment{
  width: 0%;
}
#side_bar{
  padding-top:20px ;
  padding-left:20px; 
}
</style>