<template>
  <div class="home">
    <ol>
      <li v-for="user in getUsersList" :key="user.id">
        {{ user.name }}
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "About",

  computed: {
    ...mapGetters("users", ["getUsersList"]),
  },
};
</script>
