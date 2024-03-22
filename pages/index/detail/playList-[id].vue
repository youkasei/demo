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
const listH = ref(280);
const listHeightStyle = ref("");
onMounted(() => {
  if (detailContainer.value && window.innerWidth > 480) {
    const containerH = window.innerHeight;
    console.log(detailContainer.value.firstChild?.firstChild);
    const { h: headH } = useComputedStyle(
      detailContainer.value.firstChild?.firstChild as HTMLElement,
    );
    listH.value = containerH - headH - labelH.value - 48 - 64;
    listHeightStyle.value = `${listH.value}px`;
  } else {
    listHeightStyle.value = "fit-content";
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
      <div
        class="hidden w-full bg-slate-400 bg-opacity-40 p-2 sm:flex sm:px-8 sm:py-12"
      >
        <img
          :src="coverImgUrl"
          width="208"
          height="208"
          class="block border-4 object-contain shadow shadow-white"
          style="width: 208px; height: 208px"
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
      <!--移动端-->
      <div
        class="h-96 w-full bg-no-repeat text-white sm:hidden"
        :style="{ backgroundImage: `url(${coverImgUrl})` }"
      >
        <div
          class="flex h-full w-full flex-col justify-end bg-gradient-to-t from-sky-500 to-transparent bg-cover"
        >
          <h2 class="px-2 text-xl font-semibold">
            {{ name }}
          </h2>

          <div class="grid grid-cols-3 p-2">
            <div class="col-span-1">
              <img
                class="rounded-full"
                :src="creator.avatarUrl"
                width="48"
                height="48"
              />
              {{ creator.nickname }}
            </div>

            <div class="col-span-2 text-right">
              <span class="text-sm text-gray-50 underline">
                {{
                  new Date(createTime).toLocaleDateString().replace(/\//g, "-")
                }}
                创建
              </span>
            </div>
          </div>
          <h2 class="p-2">
            {{ description }}
          </h2>
          <div class="p-2">
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
        class="hidden w-full grid-cols-12 gap-2 bg-slate-300 bg-opacity-40 px-6 pr-4 text-gray-500 sm:grid"
        :style="{ height: `${labelH}px`, lineHeight: `${labelH}px` }"
      >
        <div class="col-span-4 pl-12">歌曲标题</div>
        <div class="col-span-2">歌曲时长</div>
        <div class="col-span-3">歌手</div>
        <div class="col-span-3">收录专辑</div>
      </div>
      <div
        class="overflow-y-auto pb-2 pr-0 backdrop-opacity-90 duration-75 sm:px-6"
        :style="{ height: listHeightStyle }"
      >
        <div
          class="flex grid-cols-3 gap-x-2 border-b bg-white from-slate-100 to-transparent py-2 text-base even:from-transparent hover:from-white sm:grid sm:grid-cols-12 sm:bg-gradient-to-r sm:text-sm"
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
            class="col-span-2 block overflow-hidden text-ellipsis text-nowrap sm:col-span-4"
            :class="{ 'text-red-500': item.id === store.currentId }"
            :title="
              item.name +
              (item.tns ? '-' + item.tns.join('、') : '') +
              (item.alia && item.alia.length ? '-' + item.alia.join('、') : '')
            "
          >
            <span class="inline-block min-w-11 px-2 text-gray-400">
              {{ index + 1 }}</span
            >
            {{ item.name }}
            <span v-if="item.tns && item.tns.length" class="px-1 text-gray-400">
              - ( {{ item.tns.join("、") }} )
            </span>
            <span v-if="item.alia && item.alia.length" class="text-gray-300">
              - ({{ item.alia.join("、") }})
            </span>
          </a>
          <div class="col-span-2 hidden sm:block">
            {{ $dayjs.duration(item.dt).format("mm:ss") }}
          </div>
          <div
            class="col-span-3 hidden overflow-hidden text-ellipsis text-nowrap sm:block"
          >
            {{ item.ar.map((ar) => ar.name).join("/") }}
          </div>
          <div
            class="col-span-3 hidden overflow-hidden text-ellipsis text-nowrap sm:block"
          >
            {{ item.al.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
