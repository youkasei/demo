<script setup lang="ts">
import { useMyStore } from "~/store/global";
import type { Playlist, Track } from "~/type";
definePageMeta({
  keepalive: true,
});

const store = useMyStore();

const { id } = useRoute().params;

const detailContainer = ref<HTMLElement | null>(null);
const labelH = ref(36);
const listH = ref(380);
onMounted(() => {
  if (detailContainer.value) {
    const { h: containerH } = useComputedStyle(detailContainer.value);
    const { h: headH } = useComputedStyle(
      detailContainer.value.firstChild?.firstChild as HTMLElement,
    );
    listH.value = containerH - headH - labelH.value;
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
        class="grid w-full grid-cols-12 gap-2 bg-slate-300 bg-opacity-40 px-6 pr-4 text-gray-500"
        :style="{ height: `${labelH}px`, lineHeight: `${labelH}px` }"
      >
        <div class="col-span-3 pl-12">歌曲标题</div>
        <div class="col-span-1">歌曲时长</div>
        <div class="col-span-3">歌手</div>
        <div class="col-span-3">收录专辑</div>
      </div>
      <div
        class="overflow-y-auto px-6 py-8 pr-0 pt-0 backdrop-opacity-90 duration-75"
        :style="{ height: `${listH}px` }"
      >
        <div
          class="grid grid-cols-12 bg-gradient-to-r from-slate-100 to-transparent py-2 text-sm even:from-transparent hover:from-white"
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
          <a
            class="col-span-3 flex overflow-hidden text-ellipsis text-nowrap"
            :class="{ 'text-red-500': item.id === store.currentId }"
            :title="
              item.name +
              (item.tns ? '-' + item.tns.join('、') : '') +
              (item.alia && item.alia.length ? '-' + item.alia.join('、') : '')
            "
          >
            <span class="block min-w-12 px-2"> {{ index + 1 }}</span>
            {{ item.name }}
            <span v-if="item.tns && item.tns.length" class="text-gray-500">
              - ( {{ item.tns.join("、") }} )
            </span>
            <span v-if="item.alia && item.alia.length" class="text-gray-400">
              - ({{ item.alia.join("、") }})
            </span>
          </a>
          <div class="col-span-1">
            {{ $dayjs.duration(item.dt).format("mm:ss") }}
          </div>
          <div class="col-span-3 overflow-hidden text-ellipsis text-nowrap">
            {{ item.ar.map((ar) => ar.name).join("/") }}
          </div>
          <div class="col-span-3 overflow-hidden text-ellipsis text-nowrap">
            {{ item.al.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
