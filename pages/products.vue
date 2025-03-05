<template>
  <div class="products">
    <div v-if="loading" class="loading">
      Загрузка...
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card" :data-product-id="product.id">
        <img :src="product.image" :alt="product.name">
        <h3>{{ product.name }}</h3>
        <p class="price">{{ formatPrice(product.price) }} ₽</p>
        <p class="category">{{ product.category }}</p>
        <button @click="addToCart(product)" class="add-to-cart-btn">
          <Icon name="mdi:cart-plus" /> Добавить в корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProductsStore } from '~/stores/products'
import { useCartStore } from '~/stores/cart'
import { storeToRefs } from 'pinia'
import gsap from 'gsap'


const store = useProductsStore()
const cartStore = useCartStore()


const { products, loading, error } = storeToRefs(store)


onMounted(() => {
  store.fetchProducts()
  animateProducts()
})


const animateProducts = () => {
  gsap.from('.product-card', {
    duration: 0.6,
    opacity: 0,
    y: 30,
    stagger: 0.1,
    ease: 'power2.out'
  })
}


const addToCart = (product) => {
  cartStore.addItem(product)
  gsap.to(`[data-product-id="${product.id}"]`, {
    scale: 1.05,
    duration: 0.2,
    yoyo: true,
    repeat: 1
  })
}


const formatPrice = (price) => {
  const rubles = (parseFloat(price) * 90).toFixed(0)
  return new Intl.NumberFormat('ru-RU').format(rubles)
}
</script>

<style lang="scss">
@import '~/assets/styles/_variables';

.products {
  padding: $spacing-lg;
  background-color: $background-color;

  h1 {
    text-align: center;
    margin-bottom: $spacing-lg;
    color: $text-color;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: $spacing-lg;
    max-width: 1200px;
    margin: 0 auto;
  }

  .product-card {
    background: white;
    border-radius: 8px;
    padding: $spacing-md;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
      margin-bottom: $spacing-md;
    }

    h3 {
      color: $text-color;
      margin-bottom: $spacing-sm;
    }

    .price {
      color: $primary-color;
      font-weight: bold;
      font-size: 12px;
      margin-bottom: $spacing-sm;
    }

    .category {
      color: lighten($text-color, 20%);
      font-size: 0.9em;
      margin-bottom: $spacing-md;
    }

    .add-to-cart-btn {
      width: 100%;
      padding: $spacing-md;
      background: $primary-color;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: $spacing-sm;
      transition: background-color 0.3s;

  
    }
  }

  .loading {
    text-align: center;
    padding: $spacing-lg;
    font-size: 12px;
    color: $text-color;
  }

  .error {
    text-align: center;
    padding: $spacing-lg;
    color: red;
  }
}
</style>