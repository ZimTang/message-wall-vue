<template>
  <div class="grid grid-cols-5 gap-5">
    <div
      class="px-2 py-2 bg-opacity-40 "
      :class="[handleBgClass(item)]"
      v-for="item in props.listData"
      :key="item.name"
    >
      <div class="flex justify-between text-sm text-neutral-900 font-thin mb-2">
        <div>{{ item.createTime.substring(0, 10) }}</div>
        <div>{{ item.tag }}</div>
      </div>
      <div class="font-mono text-base text-gray-600">
        {{ item.message }}
      </div>
      <div class="bottom">
        <div class="info">
          {{ item.stars }}
        </div>
        <div class="creator">
          {{ item.creator }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  listData: Array,
});

const handleBgClass = (item) => {
  switch (item.color) {
    case 1:
      return  'bg-red-300'
    case 2:
      return  'bg-yellow-300'
    case 3:
      return  'bg-blue-300'
    case 4:
      return  'bg-green-300'
    case 5:
      return  'bg-violet-300'
    default:
      break;
  }
}

</script>

<style lang="scss" scoped></style>
