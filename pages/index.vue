<script setup lang="ts">
import { HomeIcon, ListBulletIcon } from "@heroicons/vue/16/solid";

const route = useRoute();
const activePath = computed(() => route.path);
console.log(route);
</script>

<template>
  <div class="container flex min-h-screen min-w-full flex-col">
    <div
      class="nav flex bg-gradient-to-r from-blue-500 to-blue-300 px-2 py-2 shadow-md"
    >
      <ul class="nav_list flex text-white">
        <li class="nav_list_item min-w-8">1</li>
        <li class="nav_list_item min-w-8">2</li>
        <li class="nav_list_item min-w-8">3</li>
        <li class="nav_list_item min-w-8">4</li>
      </ul>
      <search class="mx-auto"></search>
    </div>
    <div
      class="content mx-auto grid w-full grid-cols-12 border-l border-r xl:max-w-5xl"
    >
      <ul
        class="left col-span-2 border-r px-2 py-4 text-base font-semibold *:rounded-full *:py-2"
      >
        <li
          class="px-4 hover:bg-sky-500 hover:text-white"
          :class="{ 'bg-sky-400': activePath === '/mainpage' }"
        >
          <NuxtLink to="/mainpage" class="flex items-center"
            ><HomeIcon class="mr-2" /> Home</NuxtLink
          >
        </li>
        <li class="px-4 hover:bg-sky-500 hover:text-white">
          <NuxtLink to="/catList" class="flex items-center">
            <ListBulletIcon class="mr-2" /> CatList</NuxtLink
          >
        </li>
      </ul>
      <div class="right col-span-10">
        <KeepAlive>
          <NuxtPage />
        </KeepAlive>
      </div>
    </div>
  </div>
  <player></player>
</template>

<style></style>
