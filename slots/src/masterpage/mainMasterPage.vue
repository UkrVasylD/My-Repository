<template>
  <div>
    <div>
      <slot name="header"> Заголовок головної сторінки </slot>
    </div>
    <h2>Мій тестовий сайт</h2>
    <div>
      <slot name="kontent1">
        <p>Список задач</p>
        <ol>
          <li>drinc coffe</li>
          <li>run computer</li>
          <li>computer off</li>
        </ol>
      </slot>
    </div>
    <div>
      <slot name="kontent2"> Головна мета життя - жити і радіти життю </slot>
    </div>
    <div>
      <slot name="bottom"> Мої контакти: планета Земля </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainMasterPage",
};
</script>

<style lang="scss" scoped></style>
