<script setup lang="ts">
const data = await getBanner();

const { banners } = data;
// console.log("banners", banners);

const bannerIndex = ref(0);
function handleChange(index: number) {
  bannerIndex.value = index;
}
</script>

<template>
  <div
    class="relative w-full px-16 pb-2 pt-8 shadow duration-200"
    :style="{ backgroundImage: `url(${banners[bannerIndex].imageUrl})` }"
  >
    <div class="absolute inset-0 z-0 h-full w-full backdrop-blur-2xl"></div>
    <el-carousel
      :interval="2000"
      motion-blur
      loop
      @change="handleChange"
      height="200px"
      indicator-position="none"
      style="width: 540px"
    >
      <el-carousel-item
        v-for="item in banners"
        :key="item.imageUrl"
        class="bg-contain bg-no-repeat opacity-5"
        :style="{
          backgroundImage: `url(${item.imageUrl})`,
          width: '540px',
          height: '200px',
        }"
      >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style scoped>
.test {
}
</style>
