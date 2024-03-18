<script setup lang="ts">
const keyWords = ref("");
</script>

<template>
  <input
    type="text"
    v-model="keyWords"
    placeholder="请输入关键字"
    class="w-72 rounded-2xl bg-white py-1 indent-2 text-sm shadow-inner outline-none"
  />
</template>

<style></style>
