<script setup lang="ts">
import { dayjs } from "element-plus";
import { useMyStore } from "~/store/global";

const store = useMyStore();

const audio = ref<HTMLAudioElement>();

const playing = ref(false);

const playTime = reactive({
  currentTime: 0,
  duration: 0,
});

const openList = ref(false);

async function ended(audioEl?: HTMLAudioElement) {
  if (!audioEl) return;
  console.log("ended");
  playing.value = false;

  store.playNext();
}

async function play(audioEl?: HTMLAudioElement) {
  if (!audioEl) return;
  playing.value = true;
  console.log("play");
  console.log(store.currentItem);
  console.log(timeLine.value);
}

async function pause(audioEl?: HTMLAudioElement) {
  if (!audioEl) return;
  playing.value = false;
  console.log("pause");
}

const timeLine = computed(() => {
  const lyric = {};
  console.log(store.currentLrc);
  Object.keys(store.currentLrc).map((keys) => {
    const minites = keys.split(":")[0];
    const seconds = keys.split(":")[1];
    const totalSeconds = parseInt(minites) * 60 + parseFloat(seconds);
    // @ts-ignore
    lyric[totalSeconds] = store.currentLrc[keys];
  });

  return lyric;
});
const currentLyric = ref("");
async function timeupdate(audioEl?: HTMLAudioElement) {
  if (!audioEl) return;
  playTime.currentTime = audioEl.currentTime * 1000;
  playTime.duration = audioEl.duration * 1000;
  const target = Object.keys(timeLine.value).find((item, idx) => {
    return (
      parseFloat(item) >= audioEl.currentTime &&
      parseFloat(item) - audioEl.currentTime <= 0.35
    );
  });
  if (target) {
    //@ts-ignore
    currentLyric.value = timeLine.value[target];
  }
  // console.log(target, audioEl.currentTime);
}
</script>

<template>
  <div
    class="fixed bottom-0 left-0 h-[64px] w-full border-t bg-white px-48 py-2 shadow-2xl"
  >
    <audio
      ref="audio"
      :src="store.url"
      autoplay
      @pause="pause(audio)"
      @ended="ended(audio)"
      @play="play(audio)"
      @timeupdate="timeupdate(audio)"
    ></audio>
    <div class="control relative flex h-full items-center">
      <div class="flex h-[42px] select-none items-center *:cursor-pointer">
        <img
          src="/img/上一曲.png"
          width="36"
          height="36"
          alt="prev"
          @click="store.playPrev"
        />
        <img
          class="mx-2"
          :src="playing ? '/img/播放中.png' : '/img/暂停.png'"
          width="36"
          height="36"
          alt="play"
          @click="() => (playing ? audio?.pause() : audio?.play())"
        />
        <img
          src="/img/下一曲.png"
          width="36"
          height="36"
          alt="next"
          @click="store.playNext"
        />
      </div>
      <img
        class="relative -top-1 ml-4 object-cover shadow-md"
        :class="{
          'opacity-0': !store.currentItem?.al.picUrl,
          'opacity-100': store.currentItem?.al.picUrl,
        }"
        width="65"
        height="65"
        :src="`${store.currentItem?.al.picUrl}?param=130y130`"
        alt="album"
      />
      <div class="ml-6 mr-24 w-96">
        <a
          class="name mb-1 block w-full overflow-hidden text-ellipsis text-nowrap px-2 text-sm leading-4 text-gray-500"
          :title="`${store?.currentItem?.name}${store?.currentItem?.ar.map((item) => item.name).join('/')}`"
        >
          {{ store?.currentItem?.name || "--" }}
          <span class="text-xs text-gray-400">{{
            store?.currentItem?.ar.map((item) => item.name).join("/")
          }}</span>
        </a>
        <div
          class="relative h-3 w-full rounded-full bg-gray-50 p-0.5 shadow-inner shadow-gray-300"
        >
          <div
            class="relative h-2 rounded-full bg-gradient-to-tr from-green-300 to-sky-500 duration-75"
            :style="{
              width: `${(playTime.currentTime / playTime.duration || 0) * 100}%`,
            }"
          >
            <div
              class="absolute -top-0.5 right-0 hidden h-3 w-3 rounded-full bg-gradient-to-r from-sky-500 to-green-300"
            ></div>
          </div>
          <span
            class="absolute -right-24 top-0 block w-20 text-xs text-gray-500"
          >
            {{ dayjs.duration(playTime.currentTime).format("mm:ss")
            }}<span class="text-gray-400"
              >/{{ dayjs.duration(playTime.duration).format("mm:ss") }}</span
            >
          </span>
        </div>
        <div class="mt-1 px-2 text-xs leading-4">
          {{ currentLyric || "..." }}
        </div>
      </div>
      <img
        class="block cursor-pointer object-contain"
        src="/img/播放列表.png"
        width="36"
        height="36"
        alt="list"
        @click="() => (openList = !openList)"
      />
    </div>
    <div
      :class="{
        visible: openList,
        invisible: !openList,
        'bottom-full': openList,
        'bottom-8': !openList,
        'opacity-100': openList,
        'opacity-0': !openList,
      }"
      class="absolute right-1/4 max-h-96 min-h-48 w-96 rounded-md bg-white py-2 pl-4 pr-2 shadow duration-200"
    >
      <h1 class="mb-2 mr-2 border-b px-2 font-semibold">播放列表</h1>
      <ul class="block h-80 w-full overflow-y-auto">
        <li
          class="block w-full cursor-pointer overflow-hidden text-ellipsis text-nowrap border-b py-2 text-sm text-gray-500 last:border-b-0"
          :class="item.id === store.currentId ? 'bg-gray-200' : ''"
          v-for="(item, index) in store.list"
          :key="index"
          @click="store.getUrl(item.id)"
        >
          {{ item.name }}
          <span v-if="item.alia && item.alia.length">
            ({{ item.alia.join("/") }})</span
          >
          <span class="text-xs text-gray-400">
            - {{ item.ar.map((ar) => ar.name).join("/") }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
