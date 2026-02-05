import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PioneerList from '../views/PioneerList.vue'
import RedBlackList from '../views/RedBlackList.vue'
import QuotesList from '../views/QuotesList.vue'
import StoriesList from '../views/StoriesList.vue'

const router = createRouter({
  history: createWebHashHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/', component: HomeView },
  { path: '/pioneer', component: PioneerList },
  { path: '/redblack', component: RedBlackList },
  { path: '/quotes', component: QuotesList },
  { path: '/stories', component: StoriesList },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
