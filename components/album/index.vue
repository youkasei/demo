<script setup lang="ts">
import type { Playlist } from "~/type";
const props = defineProps({
  item: {
    type: Object as () => Playlist,
    required: true,
  },
});
</script>

<template>
  <div
    class="w-full max-w-max cursor-pointer border bg-opacity-80 shadow duration-200 hover:scale-105 hover:ring-1"
  >
    <div class="relative bg-white bg-opacity-20 p-0.5 pb-0">
      <img
        class="w-full object-contain"
        :src="item.coverImgUrl"
        :alt="item.name"
      />
      <NuxtLink
        class="absolute inset-0"
        :title="item.name"
        :to="'/detail/playList-' + item.id"
      />
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
        <span
          class="block overflow-hidden text-ellipsis text-nowrap text-gray-500"
          >{{ item.creator.nickname }}</span
        >
      </div>
    </div>
  </div>
</template>

<style></style>
