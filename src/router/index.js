import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import PostDetails from '../components/PostDetails.vue'
import LoginForm from '../components/Auth/LoginForm.vue'
import Register from '../components/Auth/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/:id',
      name:'PostDetails',
      component: PostDetails,
      props:true
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:catchAll(.*)',
      name:'NotFound',
      component:NotFound
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginForm
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

export default router
