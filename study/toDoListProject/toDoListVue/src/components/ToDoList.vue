<template>
  <div>
    <div v-if="isEmpty">The library is empty</div>
    <div v-else>
      <div v-for="task in toDoList" :key="task._id" class="container">
        <div>{{ task.title }}</div>
        <div>{{ task.discription }}</div>
        <!-- <img :src="getImgSrc(book.photo)" alt="" /> -->
        <button @click="onDelete(book._id)">Delete</button>
        <button @click="onEdit(book._id)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ToDoList",

  computed: {
    ...mapGetters(["toDoList"]),

    isEmpty() {
      return !this.toDoList.length;
    },
  },

  methods: {
    ...mapActions(["loadToDoList", "addTask"]),

    // getImgSrc(photo) {
    //   let binary = Buffer.from(photo.data);
    //   let imgData = new Blob([binary.buffer], {
    //     type: "application/octet-stream",
    //   });
    //   let link = URL.createObjectURL(imgData);
    //   return link;
    // },
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
