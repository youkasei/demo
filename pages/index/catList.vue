<script setup lang="ts">
import { useMyStore } from "~/store/global";
import type { Playlist } from "~/type";

const store = useMyStore();

const catList = await getPlayListCatlist();
const tree = Object.values(catList.categories).reduce(
  (lastItem, currentValue, index) => {
    return {
      ...lastItem,
      [index]: {
        name: currentValue,
        sub: catList.sub.filter((item) => item.category === index),
      },
    };
  },
  {},
);

const keyWords = ref<string | null>(store.cat || catList.all.name);

const offset = ref<number>(store.pageIndex || 1);
const limit = ref<number>(45);
const total = ref<number>(0);
const loading = ref<boolean>(false);

const getPLayListData = async () => {
  const listData = await getTopPlayList(
    keyWords.value,
    limit.value,
    (offset.value - 1) * limit.value,
    "hot",
  );
  store.cat = keyWords.value;
  store.pageIndex = offset.value;
  total.value = listData.total;
  playlists.value = listData.playlists;
  loading.value = false;
};

const playlists = ref<Playlist[]>();
getPLayListData();
async function handleClick(e: Event) {
  const { target } = e;
  if (target) {
    const attr = (target as HTMLElement).getAttribute("data-name");
    if (!attr) return;
    keyWords.value = attr || keyWords.value;
    offset.value = 1;
    loading.value = true;

    await getPLayListData();
  }
}
</script>

<template>
  <div
    class="flex flex-col border-b p-4 pt-4 text-sm text-gray-500 shadow shadow-blue-200"
    @click="handleClick"
  >
    <div
      class="mb-2 ml-2 max-w-min cursor-pointer text-nowrap rounded-full px-4 py-1 shadow shadow-blue-200"
      :data-name="catList.all.name"
      :class="{ 'bg-sky-400 text-white': keyWords === catList.all.name }"
    >
      {{ catList.all.name }}
    </div>
    <div
      v-for="(item, index) in tree"
      :key="index"
      class="flex items-center px-2 py-2 first:mt-0"
    >
      <div
        class="text-nowrap rounded-e-full bg-gradient-to-l from-blue-400 to-blue-200 py-2 pl-2 pr-4 leading-4 text-white shadow shadow-blue-500"
      >
        {{ item.name }}
      </div>
      <div class="flex flex-wrap px-2">
        <div
          v-for="(sub, idx) in item.sub"
          :key="idx"
          :data-name="sub.name"
          class="ml-2 mt-1 cursor-pointer rounded-full border px-2 py-1 leading-4 shadow-inner"
          :class="{ ' bg-sky-400 text-white': keyWords === sub.name }"
        >
          {{ sub.name }}
        </div>
      </div>
    </div>
  </div>
  <div
    class="md:grid-cols- grid grid-cols-6 flex-wrap gap-x-8 gap-y-6 px-6 py-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9"
    v-loading="loading"
  >
    <div
      v-for="(item, index) in playlists"
      :key="item.id"
      class="w-[140px] max-w-max cursor-pointer border bg-opacity-80 shadow"
    >
      <div class="relative bg-white bg-opacity-20 p-0.5 pb-0">
        <img
          class="w-full object-contain"
          :src="item.coverImgUrl"
          :alt="item.name"
        />
        <router-link
          class="absolute inset-0"
          :title="item.name"
          :to="'/detail/playList-' + item.id"
        ></router-link>
      </div>
      <div class="px-1 leading-4">
        <a
          :title="item.name"
          class="block w-full overflow-hidden text-ellipsis text-nowrap text-sm text-gray-600"
        >
          {{ item.name }}
        </a>
        <div class="text-xs text-gray-400">
          <span class="block"> Collected by: </span>
          <span class="text-nowrap text-gray-500">{{
            item.creator.nickname
          }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="relative flex w-full flex-col items-center py-10">
    <el-pagination
      background
      layout="prev, pager, next"
      hide-on-single-page
      :total="total"
      v-model:page-size="limit"
      v-model:current-page="offset"
      @change="getPLayListData()"
    />
  </div>
</template>

<style></style>