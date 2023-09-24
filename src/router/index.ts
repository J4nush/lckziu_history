import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MagnoliowaView from '../views/MagnoliowaView.vue'
import SnMFirstView from "@/views/SnMFirstView.vue";
import StartComponent from '@/components/StartComponent.vue'
import SnMSecondView from "@/views/SnMSecondView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StartComponent
    },
    {
      path: '/magnoliowa',
      name: 'Magnoliowa',
      component: MagnoliowaView
    },
    {
      path: '/magnoliowa/1953',
      name: '1953-1959 - Technikum Gospodarki Komunalnej',
      component: SnMFirstView
    },

    {
      path: '/magnoliowa/1959',
      name: '1959-1969 - Technikum Chemiczne',
      component: SnMSecondView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
