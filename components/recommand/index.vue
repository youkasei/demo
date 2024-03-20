<script setup lang="ts">
const emits = defineEmits(["update:active"]);

const props = defineProps({
  title: {
    type: String,
    defualt: "歌单",
  },
  list: {
    type: Array,
    default: () => [],
  },
  active: {
    type: Number,
    default: 0,
  },
});

function handleActive(index: Number) {
  console.log(index);
  emits("update:active", index);
}
</script>

<template>
  <div class="p-2">
    <h1 class="mb-2 px-2 text-lg font-semibold text-gray-500">
      {{ props.title }}
    </h1>
    <div
      v-if="list.length"
      class="flex w-full justify-start overflow-x-auto py-2 text-gray-400"
    >
      <span
        class="cursor-pointer text-nowrap rounded-full px-2 py-1 leading-4 hover:bg-gray-100 hover:text-gray-400"
        :class="{ 'bg-sky-500 text-white': index === active }"
        v-for="(tag, index) in list"
        :key="index"
        @click="handleActive(index)"
      >
        {{ tag.name }}
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<style></style>
