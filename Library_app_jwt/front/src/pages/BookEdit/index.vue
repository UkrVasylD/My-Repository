<template>
  <div>
    <div>
      <label>
        Title
        <input type="text" v-model="book.title" />
      </label>
    </div>
    <div>
      <label>
        Price
        <input type="number" v-model="book.price" />
      </label>
    </div>
    <div>
      <label>
        Owner
        <select v-model="book.owner">
          <option v-for="user in usersList" :key="user._id" :value="user._id">
            {{ user.name }}
          </option>
        </select>
      </label>
    </div>
    <div>
      <label>
        Photo
        <input type="file" @input="createLogoImage" />
      </label>
      <img id="img" :src="photoSrc" alt="" />
    </div>

    <button @click="onSave">{{ btnLabel }}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Book',

  data() {
    return {
      book: {},
      rawPhotoData: null,
    }
  },

  computed: {
    ...mapGetters('auth', ['usersList']),
    photoSrc() {
      return this.rawPhotoData || this.book.photo
    },
    receivedBookId() {
      return this.$route.params.id
    },
    btnLabel() {
      return this.receivedBookId ? 'Update' : 'Add'
    },
  },

  methods: {
    ...mapActions('books', ['getBookById', 'addBook', 'updateBook']),
    ...mapActions('auth', ['loadUsers']),

    createLogoImage(event) {
      const file = event.target.files[0]
      let reader = new FileReader()
      const self = this
      reader.onload = (e) => {
        self.rawPhotoData = e.target.result
        self.book.photo = e.target.result
        console.log('self.book.photo')
        console.log(self.book.photo)
      }
      reader.readAsDataURL(file)
    },

    async onSave() {
      try {
        if (!this.receivedBookId) await this.addBook(this.book)
        else await this.updateBook(this.book)
        this.$router.push({ name: 'books' })
      } catch (err) {
        console.log(err)
      }
    },
  },

  async mounted() {
    if (this.receivedBookId) {
      try {
        this.book = await this.getBookById(this.receivedBookId)
        console.log('this.book')
        console.log(this.book)
      } catch (err) {
        console.log(err)
      }
    }
    this.loadUsers()
  },
}
</script>

<style lang="scss" scoped></style>
