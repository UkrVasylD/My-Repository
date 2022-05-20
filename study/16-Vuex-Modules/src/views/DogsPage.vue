<template>
  <div class="home">
    <div v-for="dog in getDogsList" :key="dog.id">
      <img :src="dog.src" alt="" />
    </div>
    <div v-if="isLoading">Loading .....</div>
    <div v-if="getError">Errrorrrr !</div>
    <button @click="loadDog">Load dog</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "DogsPage",

  computed: {
    ...mapGetters("dogs", ["getDogsList", "getError", "isLoading"]),
  },

  methods: {
    ...mapActions("dogs", ["loadDog"]),
  },
};
</script>
