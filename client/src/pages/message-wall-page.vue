<template>
  <div>
    <p class="text-center text-4xl font-bold mt-10 mb-4">留言墙</p>
    <p class="text-center text-sm font-thin m-3">
      很多事情值得记录，当然也值得回味。
    </p>
    <p class="text-center text-base m-3">写留言</p>
    <tag-list :list="tagListData" @change-tag="handleChangeTag" />
    <message-list :list-data="messageListData" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import TagList from '../components/tag-list.vue';
import MessageList from '../components/message-list.vue';
import { getAllTag } from '../apis/tag';
import { getMessageAll, getMessageByTag } from '../apis/message';

const tagListData = ref([]);
const messageListData = ref([]);

const handleChangeTag = (index, item) => {
  tagListData.value.forEach((cate) => {
    cate.isActive = false;
  });
  tagListData.value[index].isActive = true;
  if (item.name === '全部') {
    getMessageAll().then((res) => {
      messageListData.value = res.data;
    });
  } else {
    getMessageByTag(item.name).then((res) => {
      messageListData.value = res.data;
    });
  }
};

onMounted(() => {
  getAllTag()
    .then((res) => {
      tagListData.value = res.data;
      tagListData.value[0].isActive = true;
      return getMessageAll();
    })
    .then((res) => {
      messageListData.value = res.data;
    });
});
</script>

<style lang="scss" scoped></style>
