<template>
  <header>
    <nav class="nav-container">
      <NuxtLink to="/" class="logo"> Brand Name </NuxtLink>
      <button class="cart-button" @click="store.toggleCart()">
        <div class="cart-icon-wrapper">
          <img src="../assets/cart.svg" alt="cart" />
        </div>
        <span v-if="store.totalItems" class="cart-count">{{
          store.totalItems
        }}</span>
        <span class="cart-text">{{ getItemText(store.totalItems) }}</span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  setup() {
    const store = useCartStore();

    const getItemText = (count) => {
      if (count % 10 === 1 && count % 100 !== 11) {
        return "товар";
      } else if (
        [2, 3, 4].includes(count % 10) &&
        ![12, 13, 14].includes(count % 100)
      ) {
        return "товара";
      } else {
        return "товаров";
      }
    };

    return { store, getItemText };
  },
};
</script>

<style lang="scss">

@import "~/assets/styles/_variables";

header {
  background: #ffffff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.1);
  height: 92px;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-container {
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-family: Inter;
      font-weight: 700;
      font-size: 32px;
      line-height: 38.73px;
      letter-spacing: 0%;
      color: #000000;
      text-decoration: none;
    }

    .cart-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: $spacing-sm;
      color: $text-color;
      position: relative;
      display: flex;
      align-items: center;
      gap: 5px;

      .cart-icon-wrapper {
        position: relative;
        display: inline-block;
      }

      .cart-count,
      .cart-text {
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.94px;
        letter-spacing: 0%;
        color: #000000;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  header {
    .nav-container {
      .logo {
        font-size: 18px;
      }
    }
  }
}
</style>
