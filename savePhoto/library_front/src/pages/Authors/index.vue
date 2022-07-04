<template>
  <div>
    <div v-if="isEmpty">The library is empty</div>
    <div v-else>
      <div v-for="author in authors" :key="author._id" class="container">
        <div>{{ author.name }}</div>
        <div>{{ author.ade }}</div>
        <div>{{ author.genre }}</div>

        <img :src="author.photo" alt="" />
        <button @click="onDelete(author._id)">Delete</button>
        <button @click="onEdit(author._id)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Authors",

  computed: {
    ...mapGetters("author", ["authors"]),

    isEmpty() {
      return !this.authors.length;
    },
  },

  methods: {
    ...mapActions("author", ["loadAuthors", "delete"]),

    onDelete(id) {
      this.delete(id);
    },
    onEdit(id) {
      this.$router.push({ name: "authorEdit", params: { id } });
    },
  },

  mounted() {
    this.loadAuthors();
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
