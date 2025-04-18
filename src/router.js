import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import TermsAndConditions from './components/TermsAndConditions.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/terms-and-conditions',
    name: 'TermsAndConditions',
    component: TermsAndConditions
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router