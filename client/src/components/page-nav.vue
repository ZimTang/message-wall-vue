<template>
  <div class="flex">
    <div class="flex items-center">
      <img class="w-10" src="https://vuejs.org/images/logo.png" alt="" />
      <div class="site">一刻时光</div>
    </div>
    <div class="flex flex-1 text-center justify-center items-center">
      <router-link
        to="message"
        class="mr-5 bg-blue-500 text-white w-20 h-8 leading-8 rounded"
        >留言墙</router-link
      >
      <router-link to="picture">照片墙</router-link>
    </div>
    <div class="basis-24"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
