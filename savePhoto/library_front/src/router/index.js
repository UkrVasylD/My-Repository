import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home'
import Books from '@/pages/Books'
import BookEdit from '@/pages/BookEdit'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/books', component: Books, name: 'books' },
  { path: '/book/:id?', component: BookEdit, name: 'bookEdit' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
