<template>
  <div>
    <TheHeader />
    <NuxtPage />
    <CartSidebar />
  </div>
  <footer>
    <h1>Brand Name</h1>
    <span
      >Разработчик
      <a href=""> Иванов Сергей</a>
    </span>
  </footer>
</template>

<style scoped>

footer {
  width: 100%;
  padding: 40px;
  background-color: black;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h1 {
  font-family: Inter;
  font-weight: 700;
  font-size: 32px;
  line-height: 38.73px;
  letter-spacing: 0%;
  color: #ffffff;
}
a,
span {
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.94px;
  letter-spacing: 0%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 800px) {
  h1 {
    font-size: 18px;
  }
}
</style>
