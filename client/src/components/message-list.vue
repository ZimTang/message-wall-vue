<template>
  <div class="message-list">
    <div
      class="list-item"
      :class="[`random-bg${util.Random(1, 4)}`]"
      v-for="item in props.listData"
      :key="item.id"
    >
      <div class="top">
        <div class="createTime">{{ item.createTime }}</div>
        {{ item.cate }}
      </div>
      <div class="content">
        {{ item.content }}
      </div>
      <div class="bottom">
        <div class="info">
          {{ item.star }}
        </div>
        <div class="creator">
          {{ item.creatorName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import util from '../utils/util';

const props = defineProps({
  listData: Array,
});
</script>

<style lang="scss" scoped>
/* .message-list {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
  .list-item {
    background: rgba(252, 175, 162, 0.3);
    margin-right: 3rem;
    height: 22rem;
    padding: 3rem 1.5rem;
    padding-bottom: 0;
    margin-bottom: 2rem;
    .top {
      display: flex;
      justify-content: space-between;
      height: 15%;
    }
    .content {
      line-height: 3rem;
      font-size: 1.3rem;
      height: 70%;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      line-height: 2rem;
      height: 20%;
    }
  }
  .random-bg1 {
    background: rgba(168, 237, 138, 0.31);
  }
  .random-bg2 {
    background: rgba(146, 230, 245, 0.3);
  }
  .random-bg3 {
    background: rgba(255, 227, 148, 0.3);
  }
  .random-bg4 {
    background: rgba(252, 175, 162, 0.3);
  }
} */
</style>
