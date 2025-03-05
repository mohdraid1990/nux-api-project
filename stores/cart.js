export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isOpen: false
  }),
  
  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2)
  },
  
  actions: {
    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
      this.isOpen = true;
    },
    
    removeItem(productId) {
      const index = this.items.findIndex(item => item.id === productId);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    
    toggleCart() {
      this.isOpen = !this.isOpen;
    }
  }
});