<template>
<b-container>
<div class="ui container" id="mainbox">
<div class="ui segment">
<div>
<div class="ui dividing header">Welcome {{ user.username }}:</div>
<p class="ui small pointing below label">Please select your role here</p>
<div class="ui dividing header">I am a</div>
<br/>
</div>
<form>
<div class="ui four cards">
<div class="Usertypes" v-for="(Usertypes, index) in allusertypes" :key="index">
 
<!-- Card 1 -->
<div class="ui cards">
<a class="green card">
<div class="content"> 
<div class="header">{{Usertypes.usertypes}}
<div class="ui right floated fitted checkbox">
<input v-model="usertypes" type="checkbox">
<label></label>
</div>
</div>
</div>
</a> 
</div>
</div>
</div>
<button @click="submit()" class="ui right floated circular primary submit button">Save</button>
<br>
<br>
</form>
</div>
<div class="ui six wide column">
<div class="ui segment">
<h1 class="ui dividing header">Current User selected Type(s):</h1>
</div> 
<div class="UserType" v-for="(UserType, index) in oneusertypes" :key="index">
<div class="ui container">
 
<h2> You are interested in following fields:</h2>
<p>
{{UserType.username}}
{{UserType.usertypes}}
{{UserType.date}} 
</p>
</div> 
</div>
</div>
</div>
</b-container>
</template> 
 
<script>
import ListUserTypes from '../queries/ListUserTypes'
import ListUserdetails from '../queries/ListUserdetails'
import CreateUserdetails from '../mutations/CreateUserdetails'
 
import uuidV4 from 'uuid/v4'
import { mapState } from 'vuex'
export default { 
name: 'firstpage',
computed: {
...mapState({
user: state => state.auth.user,
})
},
 
methods: {
submit() {
 
const usertypes = [this.usertypes]
const username = this.user.username 
// const date = "12" //this.date
// this.usertypes = ''
this.username = ''
this.date = ''
 
const id = uuidV4() 
const date = "12" //hardcoded
 
const userdetails = {
username:username,
usertypes:usertypes,
date: date,
id,
}
this.$apollo.mutate({
mutation: CreateUserdetails,
variables: userdetails,
update: (store, { data: { CreateUserdetails } }) => {
const data = store.readQuery({ query: listUserdetails })
data.listUserdetails.items.push(createUserdetails)
store.writeQuery({ query: ListUserdetails, data })
},
optimisticResponse: {
__typename: 'Mutation',
CreateUserdetails: {
__typename: 'userdetails',
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
username:'',
date:'',
usertypes: [],
userdetails:[],
 
}
},
 
apollo: {
allusertypes: {
query: () => ListUserTypes,
update: data => data.listUsertypes.items
},
oneusertypes: {
query:() => ListUserdetails,
// variables() {
// return {
// username: user.username,
// date: "21 Dec"
// }
// },
update: data => data.listUserdetails.items
}
}
}
</script>
 
<style scoped>
* {
box-sizing: border-box;
}
 
</style>