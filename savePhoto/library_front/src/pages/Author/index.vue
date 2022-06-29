<template>
  <div>
    <div v-if="isEmpty">The library is empty</div>
    <div v-else>
      <div v-for="author in authors" :key="author._id" class="container">
        <div>{{ author.name }}</div>
        <div>{{ author.genere }}</div>
        <div>{{ author.year }}</div>

        <img :src="book.photo" alt="" />
        <button @click="onDelete(author._id)">Delete</button>
        <button @click="onEdit(author._id)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Books",

  computed: {
    ...mapGetters(["authors"]),

    isEmpty() {
      return !this.authors.length;
    },
  },

  methods: {
    ...mapActions(["loadAuthor", "deleteBook"]),

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
