<template>
  <div>
    <div v-if="isEmpty">The library is empty</div>
    <div v-else>
      <div v-for="book in books" :key="book._id" class="container">
        <div>{{ book.title }}</div>
        <div>{{ book.price }}</div>
        <img :src="getImgSrc(book.photo)" alt="" />
        <button @click="onDelete(book._id)">Delete</button>
        <button @click="onEdit(book._id)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Books",

  computed: {
    ...mapGetters("book", ["books"]),

    isEmpty() {
      return !this.books.length;
    },
  },

  methods: {
    ...mapActions("book", ["loadBooks", "deleteBook"]),

    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },
    onDelete(id) {
      this.deleteBook(id);
    },
    onEdit(id) {
      this.$router.push({ name: "bookEdit", params: { id } });
    },
  },

  mounted() {
    this.loadBooks();
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  > * {
    margin: 20px;
  }
  img {
    width: 70px;
  }
}
</style>
