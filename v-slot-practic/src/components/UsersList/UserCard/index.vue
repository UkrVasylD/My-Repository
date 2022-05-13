<template>
  <div class="userListWraper">
    <div>
      <img :src="user.photoSrc" />
    </div>
    <div class="userRow">
      <div>
        {{ fullName }}
        <button @click="$emit('show-info')">Info</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",

  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    fullName() {
      return `${this.user.name} ${this.user.secondName}`;
    },
  },
};
</script>

<style lang="css" scoped>
.userListWraper {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
.userRow {
  /* display: flex; */
  border: solid 2px red;
  background-color: blanchedalmond;
}
button {
  margin-left: 30px;
}
</style>
