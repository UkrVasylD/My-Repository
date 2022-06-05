<template>
  <div class="container">
    <div class="order">
      <p>
        Замовлення приймаються за телефоном <br />
        067 409 72 77 з 9.00 до 18.00
      </p>
      <p>
        Зробіть Ваше замовлення завчасно, за 2-3 дні до бажаної дати отримання.
      </p>
    </div>
    <div class="about">
      <h3>ПРО BAKERSTREET:</h3>
      <p>ІНФОРМАЦІЯ ПРО КОМПАНІЮ</p>
      <p>ПОЛІТИКА КОМПАНІЇ</p>
      <p>ОФЕРТА</p>
    </div>
    <div class="buyers">
      <h3>ПОКУПЦЯМ:</h3>
      <p>КОНТАКТИ</p>
      <p>ЗАПИТАННЯ</p>
      <p>ЗВОРОТНІЙ ЗВ"ЯЗОК</p>
    </div>

    <div class="social">
      <h3>Social</h3>
      <div class="flex-container">
        <div class="logo-images-container">
          <!-- <img
            :src="require('@/assets/images/social-logo/fb-logo.png')"
            alt="No photo"
          /> -->
        </div>
        <div class="logo-images-container">
          <!-- <img
            :src="require('@/assets/images/social-logo/instagram-logo.jpeg')"
            alt="No photo"
          /> -->
        </div>
        <div class="logo-images-container">
          <!-- <img
            :src="require('@/assets/images/social-logo/telegram-logo.png')"
            alt="No photo"
          /> -->
        </div>
      </div>
    </div>

    <div class="about">
      Підписатись на новини
      <br />
      <label>
        <input type="text" placeholder="Enter your email adress" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "myFooter",
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(208, 208, 187);
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
}
</style>
