import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home'
import Books from '@/pages/Books'
import BookEdit from '@/pages/BookEdit'

import Login from '@/pages/Login'
import Signup from '@/pages/Signup'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/books', component: Books, name: 'books' },
  { path: '/book/:id?', component: BookEdit, name: 'bookEdit' },

  { path: '/login', component: Login, name: 'login' },
  { path: '/signup', component: Signup, name: 'signup' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
