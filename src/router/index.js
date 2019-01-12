import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import StoriesHome from '@/pages/StoriesHome.vue'
import HiringHome from '@/pages/HiringHome.vue'
import StartupsHome from '@/pages/StartupsHome.vue'
import SMBHome from '@/pages/SMBHome.vue'
import TechTank from '@/pages/TechTank.vue'
import GrowthHack from '@/pages/GrowthHack.vue'
import SkillSetFit from '@/pages/SkillSetFit.vue'
import CultureFit from '@/pages/CultureFit.vue'


//import CustomerDevelopment from '@/pages/CustomerDevelopment.vue'

import ConnectDevelopers from '@/pages/home/ConnectDevelopers.vue'
import ConnectDecisionMakers from '@/pages/home/ConnectDecisionMakers.vue'
import ConnectHiringManagers from '@/pages/home/ConnectHiringManagers.vue'
import ConnectStartups from '@/pages/home/ConnectStartups.vue'

//import DreamJob from '@/pages/developer/DreamJob.vue'
import Dream_Job from '@/components/developer/Dream_Job'

import DailyBuild from '@/pages/developer/DailyBuild.vue'
import BugFixMarket from '@/pages/developer/BugFixMarket.vue'
import StartupConnect from '@/pages/developer/StartupConnect.vue'

import InterviewHackathon from '@/pages/InterviewHackathon.vue'
import JobPost from '@/pages/hiring/JobPost.vue'
import OnBoarding from '@/pages/hiring/OnBoarding.vue'
import EmployeeTraining from '@/pages/hiring/EmployeeTraining.vue'

import CustomerDevelopment from '@/pages/startups/CustomerDevelopment.vue'
import Idea from '@/pages/startups/Idea.vue'
import MVP from '@/pages/startups/MVP.vue'
import Prototype from '@/pages/startups/Prototype.vue'

import BusinessProcess from '@/pages/SMB/BusinessProcess.vue'
import Mapping from '@/pages/SMB/Mapping.vue'
import Implementation from '@/pages/SMB/Implementation.vue'
import Training from '@/pages/SMB/Training.vue'


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
import Daily_Build from '@/components/developer/Daily_Build.vue'
import Bugfix_Market from '@/components/developer/Bugfix_Market.vue'
import Bug from '@/components/developer/Bug.vue'
import Startups_Developer from '@/components/developer/Startups_Developer.vue'
//import MVP from '@/components/startups/MVP.vue'
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
import UserLists from '@/components/UserLists.vue'
import FirstPage from '@/pages/FirstPage.vue'
import UserProfile from '@/components/UserProfile.vue'




import store from '@/store'

Vue.use(Router)

const routes = [
    {
        path: '/', name: 'home', component: Home, meta: { title: 'Home', auth: false }
    },
    {
        path: '/growthHack', name: 'growthHack', component: GrowthHack, meta: { title: 'Growth Hack', auth: false }
    },
    {
        path: '/skillsetFit', name: 'skillset fit', component: SkillSetFit, meta: { title: 'Skill Set Fit', auth: false }
    },
    {
        path: '/cultureFit', name: 'culture fit', component: CultureFit, meta: { title: 'Culture Fit', auth: false }
    },
    {
        path: '/storiesHome', name: 'developer_home', component: StoriesHome, meta: { title: 'Developer Home', auth: false }
    },
    ,
    {
        path: '/techTank', name: 'techTank', component: TechTank, meta: { title: 'Tech Tank', auth: false }
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
        path: '/connectDevelopers', name: 'connect-developers', component: ConnectDevelopers, meta: { title: 'Connect Developers', auth:false }
    },
    {
        path: '/connectDecisionMakers', name: 'connect-decision-makers', component: ConnectDevelopers, meta: { title: 'Connect Decision Makers', auth:false }
    },
    {
        path: '/connectStartups', name: 'connect-startups', component: ConnectDevelopers, meta: { title: 'Connect Startups', auth:false }
    },
    {
        path: '/connectHiringManagers', name: 'connect-hiring-managers', component: ConnectDevelopers, meta: { title: 'Connect Hiring Managers', auth:false }
    },
    {
        path: '/dailyBuild', name: 'daily-build', component: DailyBuild, meta: { title: 'Daily Build', auth:false }
    },
    //{
     //   path: '/dreamJob', name: 'dream-job', component: DreamJob, meta: { title: 'Dream Job', auth:false }
    //},
    {
        path:'/dreamJob' ,name: 'Dream_Job',component:Dream_Job,meta:{title:'Dream_Job',auth:true }
    },
    {
        path: '/startupConnect', name: 'startup-connect', component: StartupConnect, meta: { title: 'Startup Connect', auth:false }
    },
    {
        path: '/jobPost', name: 'job-post', component: JobPost, meta: { title: 'Job Post', auth:false }
    },
    {
        path: '/interviewHackathon', name: 'Interview Hackathon', component: InterviewHackathon, meta: { title: 'Interview Hackathon', auth:false }
    },
    {
        path: '/onBoarding', name: 'onboarding', component: OnBoarding, meta: { title: 'OnBoarding', auth:false }
    },
    {
        path: '/employeeTraining', name: 'employee-training', component: EmployeeTraining, meta: { title: 'Employee Training', auth:false }
    },
    {
        path: '/Idea', name: 'idea', component: Idea, meta: { title: 'Idea', auth:false }
    },
    {
        path: '/customerDevelopment', name: 'customerDevelopment', component: CustomerDevelopment, meta: { title: 'Customer Development', auth:false }
    },
    {
        path: '/MVP', name: 'MVP', component: MVP, meta: { title: 'MVP', auth:false }
    },
    {
        path: '/prototype', name: 'prototype', component: Prototype, meta: { title: 'Prototype', auth:false }
    },
    {
        path: '/businessProcess', name: 'Business Process', component: BusinessProcess, meta: { title: 'Business Process', auth:false }
    },
    {
        path: '/mapping', name: 'Mapping', component: Mapping, meta: { title: 'Mapping', auth:false }
    },
    {
        path: '/implementation', name: 'implementation', component: Implementation, meta: { title: 'implementation', auth:false }
    },
    {
        path: '/Training', name: 'training', component: Training, meta: { title: 'Training', auth:false }
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
        path:'/timeline' ,name: 'Timeline',component :Timeline, meta: { title: 'Timeline', auth:true }
    },
    {
        path:'/FirstPage' ,name: 'FirstPage',component:FirstPage, meta:{title:'FirstPage',auth:true }
    },
    {
        path:'/feed' ,name: 'Feed',component:Timeline,meta:{title:'Feed',auth:true }
    },
    {
        path:'/userlists/:username', name:'UserLists',component:UserLists,meta:{title:'UserLists',auth:true}
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
    {
        path:'/Job_Allposts/:title', name: 'ItemProfile',component:ItemProfile,meta:{title:'ItemProfile',auth:true}   
     },
     {
         path:'/bugfixMarket/:error', name:'Bug_Item',component:Bug_Item,meta:{title:'Bug_Item',auth:true}
      },
     {
         path:'/Problem/:title' ,name: 'problem_allposts',component:problem_allposts, meta:{title:'problem_allposts',auth:true }
     },
     {
         path: '/UserProfile/:username' ,name: 'UserProfile',component:UserProfile, meta:{title:'UserProfile',auth:true }
     },
     {
        path:'/developer/dailyBuild' ,name: 'Daily_Build',component:Daily_Build,meta:{title:'Daily_Build',auth:true }
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