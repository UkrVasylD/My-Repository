<template>
  <div class="pop_up_container">
    <div>
      <button class="btn_close" @click="changePopUpVisible">
        <v-icon>mdi-close-circle-outline</v-icon>
      </button>
    </div>
    <h2>Заповніть заявку</h2>
    <form class="form_container" action="#">
      <label>Name:<input type="text" placeholder="Iput your name" /></label>
      <label
        >Phone:<input type="tel" placeholder="Iput your phone number"
      /></label>
      <label>Email:<input type="email" placeholder="Iput your email" /></label>
      <label>Adress:<input type="text" placeholder="Iput your adress" /></label>
    </form>
    <div class="popUp_text">Ми вам зателефонуємо на протязі 30хв.</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "popUp",

  methods: {
    ...mapActions("popUp", ["changePopUpVisible"]),
  },
};
</script>

<style lang="scss" scoped>
.pop_up_container {
  position: fixed;
  z-index: 1;
  width: 500px;
  //   height: 300px;
  top: 30vh;
  left: 50vw;
  background-color: rgba(128, 125, 129, 0.8);
  box-shadow: 0px 0px 10px 1px #6e9c9f;

  .form_container {
    font-size: 150%;
    padding: 20px;
    display: grid;
    grid-auto-flow: row;
    row-gap: 10px;

    input {
      font-family: inherit;
      width: 80%;
      border: none;
      border-bottom: 2px solid #9b9b9b;
      outline: 0;
      font-size: 17px;
      color: #9b9b9b;
      padding: 20px 0 0 10px;
      background: transparent;
      transition: border-color 0.2s;
    }
  }

  h2 {
    text-align: center;
    color: rgb(24, 92, 7);
    font-weight: bold;
  }

  .btn_close {
    position: absolute;
    right: 0;
    top: 0;
  }
  .popUp_text {
    text-align: center;
    color: rgb(13, 32, 25);
  }
}
</style>
