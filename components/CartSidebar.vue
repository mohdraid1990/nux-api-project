<template>
  <div class="cart-sidebar" :class="{ 'is-open': store.isOpen }">
    <div class="cart-header">
      <h2>Корзина</h2>
      <button @click="store.toggleCart()" class="close-btn">
        <Icon name="mdi:close" />
      </button>
    </div>
    
    <div class="cart-items">
      <div v-if="store.items.length === 0" class="empty-cart">
        Корзина пуста
      </div>
      <div v-else v-for="item in store.items" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name">
        <div class="item-details">
          <h3>{{ item.name }}</h3>
          <p class="price">{{ formatPrice(item.price) }} ₽</p>
          <p class="quantity">Количество: {{ item.quantity }}</p>
        </div>
        <button @click="store.removeItem(item.id)" class="remove-btn">
          <Icon name="mdi:delete" />
        </button>
      </div>
    </div>
    
    <div v-if="store.items.length > 0" class="cart-footer">
      <div class="total">
        <span>Итого:</span>
        <span>{{ formatPrice(store.totalPrice) }} ₽</span>
      </div>
      <button class="checkout-btn">Оформить заказ</button>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    const store = useCartStore()

    const formatPrice = (price) => {
      const rubles = (parseFloat(price) * 90).toFixed(0)
      return new Intl.NumberFormat('ru-RU').format(rubles)
    }

    return { 
      store,
      formatPrice
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/_variables';

.cart-sidebar {
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  &.is-open {
    right: 0;
  }

  .cart-header {
    padding: $spacing-md;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin: 0;
      color: $text-color;
    }

    .close-btn {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 15px;
      color: $text-color;
      padding: $spacing-sm;
      
      &:hover {
        color: darken($text-color, 20%);
      }
    }
  }

  .cart-items {
    flex: 1;
    overflow-y: auto;
    padding: $spacing-md;

    .empty-cart {
      text-align: center;
      color: lighten($text-color, 20%);
      padding: $spacing-lg;
    }

    .cart-item {
      display: flex;
      align-items: center;
      padding: $spacing-md;
      border-bottom: 1px solid #eee;
      animation: slideIn 0.3s ease-out;

      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 4px;
        margin-right: $spacing-md;
      }

      .item-details {
        flex: 1;

        h3 {
          margin: 0;
          font-size: 10px;
          color: $text-color;
        }

        .price {
          color: $primary-color;
          font-weight: bold;
          margin: $spacing-sm 0 0;
        }
      }

      .remove-btn {
        background: none;
        border: none;
        color: #ff4444;
        cursor: pointer;
        padding: $spacing-sm;
        
        &:hover {
          color: darken(#ff4444, 10%);
        }
      }
    }
  }

  .cart-footer {
    padding: $spacing-md;
    border-top: 1px solid #eee;
    background: white;

    .total {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      margin-bottom: $spacing-md;
      color: $text-color;
    }

    .checkout-btn {
      width: 100%;
      padding: $spacing-md;
      background: $primary-color;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s;

      &:hover {
        background: darken($primary-color, 10%);
      }
    }
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>