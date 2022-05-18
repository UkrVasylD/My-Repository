<template>
  <div class="container">
    <div>
      <slot name="header"><h2>Яна кондитер</h2></slot>
    </div>
    <div class="navigation-bar">
      <slot name="navigationBar">
        <navigation-bar />
      </slot>
    </div>
    <div><slot name="kontent">No kontent </slot></div>
    <div>
      <slot name="bottom">
        <div class="bottom-container">
          <p>Contacts</p>
          <p>phone:0501111111</p>
          <p>adres: City Uzgorod</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
export default {
  name: "mainMasterPage",

  components: { NavigationBar },
};
</script>

<style lang="css" scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  background-color: rgb(244, 233, 220);
}
.navigation-bar-item {
  margin: 5%;
  color: brown;
}
.bottom-container {
  background-color: rgb(162, 191, 245);
  /* max-width: 400px; */
  margin: 0 auto;
  font-size: 80%;
}
</style>
