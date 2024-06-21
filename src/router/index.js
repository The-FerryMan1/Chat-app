import { createRouter, createWebHistory } from 'vue-router';
import Defaultlayout from '@/view/defaultlayout.vue'
import guestlayout from '@/view/guestlayout.vue';
import {getAuth, onAuthStateChanged } from 'firebase/auth';


const routes = [
  {
    path: '/',
    component: guestlayout,
    children : [
      {
        path: '/',
        name: 'landing-page',
        component: () => import('@/components/comps/jambatron.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: ()=> import('@/components/login/login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/components/register/register.vue')
      },
    ]
  },
  {
    path: '/',
    component: Defaultlayout,
    children: [
      {
        path: '/add-RoomID',
        name: 'add-RoomID',
        component: () => import('@/components/home/addRoomid.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/components/home/home.vue'),
        meta: { requiresAuth: true }
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not found',
    component: () => import('@/components/notfound/notfound.vue')
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

const presistentUser =()=>{
  return new Promise((resolve, reject)=>{
    const removeListerner = onAuthStateChanged(getAuth(), (user)=>{
      removeListerner()
      resolve(user)
    },
    reject
    )
  })
}



router.beforeEach(async(to, from)=>{
  if(to.meta.requiresAuth){
    if (await presistentUser()){ 
    }else{
      return {
        name: 'login',
        query: {redirect : to.fullPath}
      }
    }
  }
})

export default router
