import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MagnoliowaView from '../views/MagnoliowaView.vue'
import SnMFirstView from "@/views/SnMViews/SnMFirstView.vue";
import StartComponent from '@/components/StartComponent.vue'
import SnMSecondView from "@/views/SnMViews/SnMSecondView.vue";
import SnMThirdView from "@/views/SnMViews/SnMThirdView.vue";
import SnMFourthView from "@/views/SnMViews/SnMFourthView.vue";
import SnMFifthView from "@/views/SnMViews/SnMFifthView.vue";
import SnMSixthView from "@/views/SnMViews/SnMSixthView.vue";
import globalState from "@/globalState";
import ZS6View from "@/views/ZS6View.vue";
import ZS6FisrtView from "@/views/ZS6Views/ZS6FisrtView.vue";
import ZS6SecondView from "@/views/ZS6Views/ZS6SecondView.vue";
import ZS6ThirdView from "@/views/ZS6Views/ZS6ThirdView.vue";
import SnDView from "@/views/SnDView.vue";
import SnDFirstView from "@/views/SnDViews/SnDFirstView.vue";
import SnDSecondView from "@/views/SnDViews/SnDSecondView.vue";
import SnDThirdView from "@/views/SnDViews/SnDThirdView.vue";
import SnDFourthView from "@/views/SnDViews/SnDFourthView.vue";
import SnDFifthView from "@/views/SnDViews/SnDFifthView.vue";

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
      path: '/zs6',
      name: 'Zespół Szkół nr 6',
      component: ZS6View
    },
    {
      path: '/snd',
      name: 'Zespół Szkół przy ulicy Długosza',
      component: SnDView
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
      path: '/magnoliowa/1969',
      name: '1959-1969 - Technikum Chemiczne',
      component: SnMThirdView
    },
    {
      path: '/magnoliowa/1971',
      name: '1971-1998 - Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechaniczno-Energetycznych',
      component: SnMFourthView
    },
    {
      path: '/magnoliowa/1998',
      name: '1998-2014 - Lubelskie Centrum Edukacji Zawodowej"',
      component: SnMFifthView
    },
    {
      path: '/magnoliowa/2014',
      name: 'od 2014 - Lubelskie Centrum Kszta\u0142cenia Zawodowego i Ustawicznego',
      component: SnMSixthView
    },
    {
      path: '/zs6/1959',
      name: '1959-2002 Zesp\u00f3\u0142 Szk\u00f3\u0142 Zawodowych nr 1',
      component: ZS6FisrtView
    },
    {
      path: '/zs6/1983',
      name: '1983-2002 Zesp\u00f3\u0142 Szk\u00f3\u0142 nr 2',
      component: ZS6SecondView
    },
    {
      path: '/zs6/2002',
      name: '2002-2019 Zesp\u00f3\u0142 Szk\u00f3\u0142 nr 6',
      component: ZS6ThirdView
    },
    {
      path: '/snd/1949',
      name: '1949 - 1973 Zasadnicza Szko\u0142a Zawodowa (Metalowa) nr 1',
      component: SnDFirstView
    },
    {
      path: '/snd/1973',
      name: '1973 - 1975 Zesp\u00f3\u0142 Szk\u00f3\u0142 Zawodowych',
      component: SnDSecondView
    },
    {
      path: '/snd/1975',
      name: '1975 - 1985 Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechanicznych',
      component: SnDThirdView
    },
    {
      path: '/snd/1985',
      name: '1985 - 1993 Zawodowe Centrum Kszta\u0142cenia Ustawicznego',
      component: SnDFourthView
    },
    {
      path: '/snd/1993',
      name: '1993 - 2005 Zesp\u00f3\u0142 Szk\u00f3\u0142 Mechanicznych',
      component: SnDFifthView
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
