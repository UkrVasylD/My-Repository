<template>
  <div>
    <div>
      <slot name="header">
        Моя піцерія

        <h3>{{ owner.name }}</h3>
      </slot>
    </div>
    <div>
      <slot> Немає контенту </slot>
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

  data() {
    return {
      owner: {
        name: "Ivan",
        secondName: "Grigor",
        age: 34,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>