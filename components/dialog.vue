<script setup lang="ts" name="Dialog">
const props = defineProps({
  title: String,
  onOk: Function,
  onCancel: Function,
  okText: String,
  cancelText: String,
  width: String,
  okType: String,
  icon: String,
  iconColor: String,
  iconSize: String,
  iconPrefix: String,
  closeIcon: String,
  closeIconColor: String,
  maskClose: String,
});

const visible = ref(false);

function changeVisible() {
  visible.value = !visible.value;
}
function maskClick(e: MouseEvent | TouchEvent) {
  console.log(props.maskClose);
  if (hasAttr("maskClose")) {
    changeVisible();
  }
}

function hasAttr(attr: String): Boolean {
  return props[attr as keyof typeof props] !== undefined;
}

defineExpose({ changeVisible });
</script>

<template>
  <div
    class="fixed inset-0 z-40 bg-black/40 duration-200"
    :class="{ invisible: !visible, 'opacity-0': !visible }"
    @click.self="maskClick"
  >
    <div
      class="dialog absolute left-1/2 top-1/2 min-w-64 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white opacity-100 shadow duration-200"
      :class="{ '-translate-y-2/3': !visible, '-translate-y-1/2': visible }"
    >
      <slot name="title">
        <h1
          class="relative rounded-t-md px-4 py-2 text-center font-semibold leading-4 text-slate-600"
        >
          {{ title || "标题" }}
        </h1>
      </slot>
      <span class="absolute right-4 top-1" @click="changeVisible()">X</span>
      <slot>
        <p class="px-4 py-2 text-sm text-gray-500">弹窗内容</p>
      </slot>
    </div>
  </div>
</template>

<style></style>
