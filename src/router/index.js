import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'



const routes = [
  {path: '/', 
   name: 'home', 
   component: HomeView
  },

  {path: '/about',
   name: 'about',
   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {path: '/contact', 
   name: 'contact',
   component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },

  {path: '/:pathMatch(.*)*',
   name: 'NotFound',
   component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
   }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'm11-active-link',
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || new Promise((resolve)=>{
      setTimeout(()=> resolve ({top:0 }), 300)
    })
  }
})

export default router
