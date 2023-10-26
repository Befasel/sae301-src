<script>
export default {
  name: "PanierView"
}
</script>

<template>
  <div class="container">
    <div class="cart-message">
      Votre panier TaVue est vide...
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.cart-message {
  padding-left: 300px;
  padding-right: 300px;
  padding-top: 200px;
  padding-bottom: 200px;
  border: 1px solid #1d1e56;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #1d1e56;
}

</style>
