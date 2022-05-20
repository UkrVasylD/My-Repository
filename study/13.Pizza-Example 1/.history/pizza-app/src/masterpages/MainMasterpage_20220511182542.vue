<template>
  <div>
    <div>
      <slot name="header"> Моя піцерія </slot>
    </div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="footer">
        <h1>Контакти</h1>
        <ul>
          <li>Тел.:0501111111</li>
          <li>Адреса: м.Ужгород, вул.Харчова 12</li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMasterPage",
};
</script>

<style lang="scss" scoped>
</style>