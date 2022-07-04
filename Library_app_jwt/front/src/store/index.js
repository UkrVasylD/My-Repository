import { createStore } from 'vuex'

import books from './books'
import auth from './auth'

const store = createStore({
  modules: {
    books,
    auth,
  },
})

export default store
