import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MagnoliowaView from '../views/MagnoliowaView.vue'
import SnMFirstView from "@/views/SnMFirstView.vue";
import StartComponent from '@/components/StartComponent.vue'
import SnMSecondView from "@/views/SnMSecondView.vue";
import globalState from "@/globalState";

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

router.beforeEach((to, form, next) => {
  globalState.value.loading = true;
  setTimeout(()=>{
    next()
  }, 500)
})
router.afterEach(()=>{
  setTimeout(()=>{
    globalState.value.loading = false;
  }, 500)
})

export default router
