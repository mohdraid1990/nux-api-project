export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchProducts() {
      this.loading = true
      try {
        const response = await fetch('/api/products')
        this.products = await response.json()
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    }
  }
})