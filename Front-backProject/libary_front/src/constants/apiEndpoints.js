export default {
  books: {
    readList: `${process.env.VUE_APP_API_URL}/books`,
    add: `${process.env.VUE_APP_API_URL}/books`,
    update: `${process.env.VUE_APP_API_URL}/books`,
    getBookById: (id) => `${process.env.VUE_APP_API_URL}/books/${id}`,
    delete: `${process.env.VUE_APP_API_URL}/books`,
  },
}
