<script setup lang="ts">
import type { Banner, DjRadio, Playlist, Tag } from "~/type";
definePageMeta({
  keepalive: true,
});

// console.log("banners", banners);

const bannersData = ref<Banner[]>([]);

getBanner().then((res) => {
  bannersData.value = res.banners;
});

const bannerIndex = ref(0);
function handleChange(index: number) {
  bannerIndex.value = index;
}

const list = ref<Tag[]>();
getPlayListHot().then((res) => {
  console.log(res);
  list.value = res.tags;
});

const recommandActive = ref(0);

const recommandListData = ref<Playlist[]>();
async function getRecommandCat() {
  if (list.value && list.value.length) {
    const res = await getTopPlayList(
      list.value[recommandActive.value].name,
      12,
    );
    console.log(res.playlists);
    recommandListData.value = res.playlists;
  }
}

watchEffect(() => {
  getRecommandCat();
});

// 热门radio

const hotradioList = ref<DjRadio[]>();

async function getHotRadio() {
  const res = await getDjHot(0, 12);
  console.log(res);
  hotradioList.value = res.djRadios;
}
getHotRadio();
</script>

<template>
  <div
    class="relative w-full shadow duration-200 sm:px-16 sm:pb-2 sm:pt-8"
    :style="{ backgroundImage: `url(${bannersData[bannerIndex]?.imageUrl})` }"
  >
    <div class="absolute inset-0 z-0 h-full w-full backdrop-blur-2xl"></div>
    <el-carousel
      :interval="2500"
      motion-blur
      loop
      @change="handleChange"
      indicator-position="none"
      class="w-full"
    >
      <el-carousel-item v-for="item in bannersData" :key="item.imageUrl">
        <img
          class="block h-[200px] w-full object-contain"
          :src="item.imageUrl"
          alt=""
        />
      </el-carousel-item>
    </el-carousel>
  </div>
  <recommand title="歌单推荐" :list="list" v-model:active="recommandActive">
    <div
      class="mx-auto grid w-full grid-cols-4 justify-items-center gap-x-2 gap-y-4 py-2 xl:grid-cols-6 xl:gap-x-6"
    >
      <album
        v-for="(item, index) in recommandListData"
        :key="index"
        :item="item"
      ></album>
    </div>
  </recommand>

  <recommand title="热门电台">
    <div
      class="grid grid-cols-4 gap-x-2 gap-y-4 py-2 xl:grid-cols-6 xl:gap-x-6"
    >
      <div
        v-for="(item, index) in hotradioList"
        :key="index"
        class="rounded-xl border p-2 shadow duration-200 hover:scale-105"
      >
        <img :src="item.picUrl" class="object-cover" alt="" />
        <div
          class="w-full overflow-hidden text-ellipsis text-nowrap text-sm text-gray-500"
        >
          {{ item.name }}
        </div>
        <div
          class="w-full overflow-hidden text-ellipsis text-nowrap text-xs text-gray-400"
        >
          {{ item.dj.nickname }}
        </div>
      </div>
    </div>
  </recommand>
</template>

<style>
.el-carousel {
  &__container {
    height: 200px;
  }
}
</style>
