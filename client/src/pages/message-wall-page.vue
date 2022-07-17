<template>
  <div class="message-wall-page">
    <p class="title">留言墙</p>
    <p class="desc">很多事情值得记录，当然也值得回味。</p>
    <p>写留言</p>
    <cate-list :list="cateListData" @change-cate="handleChangeCate" />
    <message-list :list-data="messageListData" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import CateList from '../components/cate-list.vue';
import http from '../utils/http';
import MessageList from '../components/message-list.vue';

const cateListData = ref([]);
const messageListData = ref([]);
const initData = (id) => http.get(`/message/${id}`);

const handleChangeCate = (index, id) => {
  cateListData.value.forEach((item) => {
    item.isActive = false;
  });
  cateListData.value[index].isActive = true;
  initData(id).then((res) => {
    messageListData.value = res.data;
  });
};

onMounted(() => {
  http
    .get('/category/1')
    .then((res) => {
      cateListData.value = res.list;
      cateListData.value[0].isActive = true;
      return Promise.resolve(cateListData.value[0].id);
    })
    .then((id) => http.get(`/message/${id}`))
    .then((res) => {
      messageListData.value = res.data;
    });
});
</script>

<style lang="scss" scoped>
/* .message-wall-page {
  width: 100%;
  .title {
    text-align: center;
    height: 5rem;
    font-family: PingFangSC-Semibold;
    font-size: 5.6rem;
    color: #202020;
    letter-spacing: 0;
    text-align: center;
    font-weight: 600;
  }
  .desc {
    height: 2rem;
    font-family: PingFangSC-Regular;
    font-size: 1.4rem;
    color: #5b5b5b;
    letter-spacing: 0;
    text-align: center;
    font-weight: 400;
  }
} */
</style>
