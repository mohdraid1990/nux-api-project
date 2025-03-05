<template>
  <div class="home">
    <NuxtLink to="/products" class="btn-primary">
      Перейти в раздел каталога
    </NuxtLink>
  </div>
</template>

<style lang="scss">
@import "~/assets/styles/_variables";

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
  background-color: $background-color;



  .btn-primary {
    color: #e0119d;
    font-family: Inter;
    font-weight: 500;
    font-size: 32px;
    line-height: 38.73px;
    letter-spacing: 0%;
    text-decoration: underline;
  

 
  }
}
</style>
