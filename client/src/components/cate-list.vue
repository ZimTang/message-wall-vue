<template>
  <div class="cate-list">
    <div
      class="cate-item"
      :class="{ active: item.isActive }"
      v-for="(item, index) in props.list"
      :key="item"
    >
      <a href="#" @click="changeCate(index, item.id, $event)">{{
        item.text
      }}</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});
const emits = defineEmits(['changeCate']);
const changeCate = (index, id, e) => {
  e.preventDefault();
  emits('changeCate', index, id);
};
</script>

<style lang="scss" scoped>
/* .cate-list {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  .cate-item {
    width: 5.6rem;
    height: 2.8rem;
    line-height: 2.8rem;
    text-align: center;
    margin-right: 2rem;
    a {
      font-size: 1.2rem;
      color: #5b5b5b;
    }
  }
  .active {
    border: 1px solid rgba(32, 32, 32, 1);
    border-radius: 14px;
    color: black;
    font-weight: 600;
  }
} */
</style>
