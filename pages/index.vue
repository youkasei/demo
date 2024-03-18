<script setup lang="ts"></script>

<template>
  <div class="container flex min-h-screen min-w-full flex-col pb-16">
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
    <div class="content flex flex-1 flex-row flex-nowrap">
      <ul class="left min-w-40 border-r px-4 py-6 *:py-4">
        <li class=""><router-link to="/main">Home</router-link></li>
        <li class=""><router-link to="/catList">CatList</router-link></li>
      </ul>
      <div class="right flex flex-1 flex-col">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <player></player>
</template>

<style></style>
