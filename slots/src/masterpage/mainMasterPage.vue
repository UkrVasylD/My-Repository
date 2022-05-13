<template>
  <div>
    <div>
      <slot name="header"> </slot>
    </div>
    <h2>Мій тестовий сайт</h2>
    <div>
      <slot name="kontent1"> </slot>
    </div>
    <div>
      <slot name="kontent2"> </slot>
    </div>
    <div>
      <slot name="footer"> Мої контакти: планета Земля </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainMasterPage",
};
</script>

<style lang="scss" scoped></style>
