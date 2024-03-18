<script setup lang="ts">
import { useMyStore } from "~/store/global";
import type { Playlist, Track } from "~/type";

const store = useMyStore();

const { id } = useRoute().params;

const detailContainer = ref<HTMLElement | null>(null);
const labelH = ref(36);
const listH = ref(480);
onMounted(() => {
  if (detailContainer.value) {
    const { h: containerH } = useComputedStyle(detailContainer.value);
    const { h: headH } = useComputedStyle(
      detailContainer.value.firstChild?.firstChild as HTMLElement,
    );
    listH.value = containerH - headH - labelH.value - 1;
  }
});

const data = await getPlayListDetail(id as string);
const { playlist } = data;
const { name, creator, createTime, description, tags, tracks, coverImgUrl } =
  playlist;
</script>
<template>
  <div
    ref="detailContainer"
    class="flex-1 overflow-hidden bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url(${creator.backgroundUrl})` }"
  >
    <div
      class="relative bg-gradient-to-bl from-transparent to-slate-50 to-80% backdrop-blur"
    >
      <div class="flex w-full bg-slate-400 bg-opacity-40 px-8 py-12">
        <img
          :src="coverImgUrl"
          width="208"
          height="208"
          class="block border-4 object-contain shadow shadow-white"
          style="width: 208px; height: 208px"
          alt=""
        />
        <div class="flex-col pl-4 text-white">
          <div class="text-lg font-semibold">
            {{ name }}
          </div>
          <div class="mt-2 flex items-center text-base">
            <img
              class="rounded-full"
              :src="creator.avatarUrl"
              width="48"
              height="48"
            />
            <span class="pl-2">
              {{ creator.nickname }}
              <span class="text-sm text-gray-50 underline">
                {{
                  new Date(createTime).toLocaleDateString().replace(/\//g, "-")
                }}
                创建
              </span>
            </span>
          </div>
          <div
            class="mt-8 w-full overflow-hidden text-ellipsis text-sm text-gray-50"
          >
            {{ description }}
          </div>
          <div class="flex flex-wrap py-4">
            <span v-if="tags.length">标签：</span>
            <span
              class="ml-2 rounded-3xl bg-gradient-to-bl from-sky-300 to-sky-500 px-4 py-1 text-sm leading-4 shadow first:ml-0"
              v-for="(item, index) in tags"
              :key="index"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
      <div
        class="flex w-full bg-slate-300 bg-opacity-40 px-16 text-gray-500"
        :style="{ height: `${labelH}px`, lineHeight: `${labelH}px` }"
      >
        <div class="ml-2 w-96">歌曲标题</div>
        <div class="w-64">歌曲时长</div>
        <div class="w-80 indent-2">歌手</div>
        <div class="w-80 indent-2">收录专辑</div>
      </div>
      <div
        class="overflow-y-auto px-6 py-8 pt-0 backdrop-opacity-90 duration-200"
        :style="{ height: `${listH}px` }"
      >
        <div
          class="flex bg-gradient-to-r from-slate-100 to-transparent py-2 text-sm even:from-transparent hover:from-white"
          v-for="(item, index) in tracks"
          :data-id="item.id"
          :key="index"
          @click="
            () => {
              store.getUrl(item.id);
              store.list = tracks || [];
            }
          "
        >
          <div class="block min-w-12 indent-2 text-gray-500">
            {{ index + 1 }}
          </div>
          <a
            class="block w-96 overflow-hidden text-ellipsis text-nowrap"
            :class="{ 'text-red-500': item.id === store.currentId }"
            :title="
              item.name +
              (item.tns ? '-' + item.tns.join('、') : '') +
              (item.alia && item.alia.length ? '-' + item.alia.join('、') : '')
            "
          >
            {{ item.name }}
            <span v-if="item.tns && item.tns.length" class="text-gray-500">
              - ( {{ item.tns.join("、") }} )
            </span>
            <span v-if="item.alia && item.alia.length" class="text-gray-400">
              - ({{ item.alia.join("、") }})
            </span>
          </a>
          <div class="w-64">
            {{ $dayjs.duration(item.dt).format("mm:ss") }}
          </div>
          <div class="w-80 overflow-hidden text-ellipsis text-nowrap pl-2">
            {{ item.ar.map((ar) => ar.name).join("/") }}
          </div>
          <div class="w-80 overflow-hidden text-ellipsis text-nowrap pl-2">
            {{ item.al.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
