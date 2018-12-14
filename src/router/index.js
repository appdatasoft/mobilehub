import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import HiringHome from '@/pages/HiringHome.vue'
import StartupsHome from '@/pages/StartupsHome.vue'
import SMBHome from '@/pages/SMBHome.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Developer from '@/pages/Developer.vue'
import Hiring from '@/pages/Hiring.vue'
import Startups from '@/pages/Startups.vue'
import SMB from '@/pages/SMB.vue'
import SignIn from '@/pages/auth/SignIn.vue'
import SignUp from '@/pages/auth/SignUp.vue'
import SignOut from '@/pages/auth/SignOut.vue'
import ConfirmSignUp from '@/pages/auth/ConfirmSignUp.vue'
import PasswordReset from '@/pages/auth/PasswordReset.vue'
import ChangePassword from '@/pages/auth/ChangePassword.vue'
import ConfirmPasswordReset from '@/pages/auth/ConfirmPasswordReset.vue'
import Tasks from '@/components/Tasks'
import Pricing from '@/pages/Pricing'
import Privacy from '@/pages/Privacy.vue'
import Timeline from '@/pages/Feed_page.vue'
import CD from '@/components/startups/cd.vue'
import Problem from '@/components/startups/Problem.vue'
import Job_Posts from '@/components/Hiring/Job_Posts.vue'
import Int_Hackathon from '@/components/Hiring/Interview_Hackathon.vue'
import Candidates from '@/components/Hiring/Candidates.vue'
import Dream_Job from '@/components/developer/Dream_Job.vue'
import Daily_Build from '@/components/developer/Daily_Build.vue'
import Bugfix_Market from '@/components/developer/Bugfix_Market.vue'
import Bug from '@/components/developer/Bug.vue'
import Startups_Developer from '@/components/developer/Startups_Developer.vue'
import MVP from '@/components/startups/MVP.vue'
import cp from '@/components/startups/cp.vue'
//import prototype from '@/components/startups/prototype.vue'
import Solution from '@/components/startups/Solution.vue'
import Validate from '@/components/startups/Validate.vue'
import MarketResearch from '@/components/startups/MarketResearch.vue'
import AllPosts from '@/components/startups/Allposts.vue'
//import Feed from '@/components/feed.vue'
import Bug_Title from '@/components/developer/Bug_Title.vue'
import Job_Allposts from '@/components/Hiring/Job_Allposts.vue'  //for all posts
import ItemProfile from '@/components/Hiring/itemprofile.vue'  //it is for dynamic pages
import Bug_Item from '@/components/developer/Bug_Item.vue'
import problem_allposts from '@/components/startups/problem_allposts.vue'



import store from '@/store'

Vue.use(Router)

const routes = [
    {
        path: '/', name: 'home', component: Home, meta: { title: 'Home', auth: false }
    },
    {
        path: '/hiring_home', name: 'hiring_home', component: HiringHome, meta: { title: 'Hiring Home', auth: false }
    },
    {
        path: '/startups_home', name: 'startups_home', component: StartupsHome, meta: { title: 'Startups Home', auth: false }
    },
    {
        path: '/SMB_home', name: 'SMB_home', component: SMBHome, meta: { title: 'SMB Home', auth:false }
    },
    {
        path: '/tasks', name: 'tasks', component: Tasks, meta: { title: 'Tasks', auth: true }
    },
    {
        path: '/pricing', name: 'pricing', component: Pricing, meta: { title: 'Pricing', auth: false }
    },
    {
        path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { title: 'Dashboard', auth: true }
    },
    {
        path: '/developer', name: 'developer', component: Developer, meta: { title: 'Developer', auth: true }
    },
    {
        path: '/hiring', name: 'hiring', component: Hiring, meta: { title: 'Hiring', auth: true }
    },
    {
        path: '/startups', name: 'startups', component: Startups, meta: { title: 'Startups', auth: true }
    },
    {
        path: '/cd', name: 'cd', component: CD, meta: { title: 'Customer Development', auth: true }
    },
    {
        path: '/problem', name: 'problem', component: Problem, meta: { title: 'Problem', auth: true }
    },
    {
        path: '/smb', name: 'smb', component: SMB, meta: { title: 'SMB', auth: true }
    },
    {
        path: '/signIn', name: 'signIn', component: SignIn, meta: { title: 'Sign In', auth: false }
    },
    {
        path: '/signOut', name: 'signOut', component: SignOut, meta: { title: 'Sign Out', auth: true }
    },
    {
        path: '/signUp', name: 'signUp', component: SignUp, meta: { title: 'Sign Up', auth: false }
    },
    {
        path: '/confirmSignUp', name: 'confirmSignUp', component: ConfirmSignUp, meta: { title: 'Confirm SignUp', auth: false }
    },
    {
        path: '/changePassword', name: 'changePassword', component: ChangePassword, meta: { title: 'Change Password', auth: true }
    },
    {
        path: '/passwordReset', name: 'passwordReset', component: PasswordReset, meta: { title: 'Password Reset', auth: false }
    },
    {
        path: '/confirmPasswordReset', name: 'confirmPasswordReset', component: ConfirmPasswordReset, meta: { title: 'Confirm Password Reset', auth: false }
    },
    {
        path: '/privacy', name: 'privacy', component: Privacy, meta: { title: 'Privacy', auth: false } 
    },
    {
        path:'/timeline' ,name: 'Timeline',component:Timeline,meta:{title:'Timeline',auth:true }
    },
    {
        path:'/feed' ,name: 'Feed',component:Timeline,meta:{title:'Feed',auth:true }
    },
    {
        path:'/Candidates' ,name: 'candidates',component:Candidates,meta:{title:'candidates',auth:true }
    },
    {
        path:'/Int_Hackathon' ,name: 'Int_Hackathon',component:Int_Hackathon,meta:{title:'Int_Hackathon',auth:true }
    },
    {
        path:'/Job_Posts' ,name: 'Job_Posts',component:Job_Posts,meta:{title:'Job_Posts',auth:true }
    },
    {
        path:'/dreamJob' ,name: 'Dream_Job',component:Dream_Job,meta:{title:'Dream_Job',auth:true }
    },
    {
        path:'/dailyBuild' ,name: 'Daily_Build',component:Daily_Build,meta:{title:'Daily_Build',auth:true }
    },
    {
        path:'/bug_title' ,name: 'Bug_Title',component:Bug_Title,meta:{title:'Bug_Title',auth:true }
        
    },
    {
        path:'/startupsDeveloper' ,name: 'Startups_Developer',component:Startups_Developer,meta:{title:'Startups_Developer',auth:true }
    },
    {
        path:'/solution' ,name: 'Solution',component:Solution,meta:{title:'Startup Solution',auth:true }
    },
    {
        path:'/validate' ,name: 'Validate',component:Validate,meta:{title:'Idea Validation',auth:true }
    },
    {
        path:'/mr' ,name: 'MarketResearch',component:MarketResearch,meta:{title:'Market Validaion',auth:true }
    },
    {
        path:'/posts' ,name: 'AllPosts',component:AllPosts,meta:{title:'All Posts',auth:true }
    },
    {
        path:'/bug' ,name: 'Bug',component:Bug,meta:{title:'Bug',auth:true }
    },
    {
        path:'/bugfixMarket' ,name: 'Bugfix_Market',component:Bugfix_Market,meta:{title:'Bugfix_Market',auth:true }
    },
    {
        path:'/Job_Allposts' ,name: 'Job_Allposts',component:Job_Allposts,meta:{title:'Job_Allposts',auth:true}
    },
    //{
    //    path:'/:title', name: 'ItemProfile',component:ItemProfile,meta:{title:'ItemProfile',auth:true}   
    //},
    //{
    //    path:'/:error', name:'Bug_Item',component:Bug_Item,meta:{title:'Bug_Item',auth:true}
    //},
    {
        path:'/:Problem' ,name: 'problem_allposts',component:problem_allposts, meta:{title:'problem_allposts',auth:true }
    }
    
]

const router = new Router({ mode: "history", routes })

// this routine will ensure that any pages marked as `auth` in the `meta` section are
// protected from access by unauthenticated users.
router.beforeEach((to, from, next) => {
    // Use the page's router title to name the page
    if (to.meta && to.meta.title) {
        document.title = to.meta.title
    }

    // is there a meta and auth attribute?
    if (to.meta && to.meta.auth !== undefined) {

        // if the page requires auth
        if (to.meta.auth) {
            // and we are authenticated?
            if (store.getters['auth/isAuthenticated']) {
                next() // route normally
                return
            }
            // otherwise off to the sign in page
            router.push({ name: 'signIn' })
            return
        }
        // otherwise are we already authenticated?
        if (store.getters['auth/isAuthenticated']) {
            // yes we are, so off to dashboard
            // router.push({ name: 'smb' })
                 router.push({ name: 'Timeline' }) 
            return
        }
        next() // route normally
        return
    }
    next() // route normally
    return
})

export default router