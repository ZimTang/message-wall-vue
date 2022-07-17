<template>
  <div class="page-nav">
    <div class="left">
      <div class="logo">
        <img src="https://vuejs.org/images/logo.png" alt="" />
      </div>
      <div class="site">一刻时光</div>
    </div>
    <div class="center">
      <router-link to="message">留言墙</router-link>
      <router-link to="picture">照片墙</router-link>
    </div>
    <div class="none"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
/* .page-nav {
  display: flex;
  padding: 0 2rem;
  height: 5.2rem;
  font-size: 1.6rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 4px 0px;
  background: rgba(255, 255, 255, 0.8);
  .left {
    width: 20%;
    display: flex;
    .logo img {
      margin-top: 0.5rem;
      height: 4.2rem;
    }
    .site {
      margin-left: 0.5rem;
      margin-top: 2rem;
    }
  }

  .center {
    width: 12%;
    display: flex;
    justify-content: space-between;
  }
  .center a {
    display: inline-block;
    font-size: 1.3rem;
    width: 8.2rem;
    height: 3.6rem;
    text-align: center;
    line-height: 3.6rem;
    color: white;
    background-color: #3b73f0;
    border-radius: 2rem;
  }

  .none {
    width: 20%;
  }
} */
</style>
