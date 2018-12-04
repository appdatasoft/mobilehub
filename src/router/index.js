import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import HiringHome from '@/pages/HiringHome.vue'
import StartupsHome from '@/pages/StartupsHome.vue'
import SMBHome from '@/pages/SMBHome.vue'
import Dashboard from '@/pages/Dashboard.vue'
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
        path: '/SMB_home', name: 'SMB_home', component: SMBHome, meta: { title: 'SMB Home', auth: false }
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
        path: '/hiring', name: 'hiring', component: Hiring, meta: { title: 'Hiring', auth: false }
    },
    {
        path: '/startups', name: 'startups', component: Startups, meta: { title: 'Startups', auth: false }
    },
    {
        path: '/smb', name: 'smb', component: SMB, meta: { title: 'SMB', auth: false }
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
            router.push({ name: 'dashboard' })
            return
        }
        next() // route normally
        return
    }
    next() // route normally
    return
})

export default router