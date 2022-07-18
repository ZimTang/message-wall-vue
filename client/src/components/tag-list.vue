<template>
  <div class="flex justify-center  text-sm mb-5">
    <div class="flex justify-around w-3/4">
      <div
        :class="{ active: item.isActive }"
        v-for="(item, index) in props.list"
        :key="item"
      >
        <a href="#" @click="changeTag(index, item, $event)">{{
          item.name
        }}</a>
      </div>
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
const emits = defineEmits(['changeTag']);
const changeTag = (index, item, e) => {
  e.preventDefault();
  emits('changeTag', index, item);
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
