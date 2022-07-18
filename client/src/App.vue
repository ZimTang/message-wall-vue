<script setup>
import PageNav from './components/page-nav.vue';
</script>

<template>
  <div class="container mx-auto">
    <page-nav />
    <router-view ></router-view>
  </div>
</template>

<style lang="scss" scoped></style>
