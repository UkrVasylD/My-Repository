<template>
  <div>
    <div>
      <slot name="header"><h2>My pizzary</h2></slot>
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
export default {
  name: "mainMasterPage",

  components: {},
};
</script>

<style lang="css" scoped>
.bottom-container {
  background-color: azure;
  max-width: 400px;
  margin: 0 auto;
}
</style>
