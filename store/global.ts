import { defineStore } from "pinia";
import type { Playlist, Track } from "~/type";

export const useMyStore = defineStore({
  id: "myStore",
  state: () => ({
    cmsToken: "",
    username: "",
    list: [] as Track[],
    currentId: <string | number>"",
    url: "",
    lrc: "",
    cat: <string | null>"",
    pageIndex: 1,
    klyric: "",
    romalrc: "",
    tlyric: "",
  }),
  getters: {
    currentItem: (state) =>
      state.list.find((item: Track) => item.id === state.currentId),
    currentLrc: (state) =>
      state.lrc.split("\n").reduce((last, current, index) => {
        const startIdx = current.indexOf("[");
        const endIdx = current.indexOf("]");
        const key = current.slice(startIdx, endIdx);
        if (!key) return last;
        // @ts-ignore
        last[key.replace(/\[|\]/g, "")] = current.slice(endIdx + 1);
        return last;
      }, {}),
  },
  actions: {
    async getUrl(id: string | number) {
      this.getLyric(id);
      const res = await getSongUrl(id);
      this.currentId = id;
      this.url = "";
      this.url = res.data[0].url;
      if (this.currentItem) {
        document.title = `${this.currentItem.name} (${this.currentItem.alia?.join("/")}) - ${this.currentItem.ar.map((item) => item.name).join("/")}`;
      } else {
        document.title = "Nekomo";
      }
      console.log(this.url);
    },
    async getLyric(id: string | number) {
      const res = await getSongLyric(id);
      console.log(res);
      const { lrc, klyric, romalrc, tlyric } = res;
      this.lrc = lrc.lyric;
      this.klyric = klyric.lyric;
      this.romalrc = romalrc.lyric;
      this.tlyric = tlyric.lyric;
    },
    async playNext() {
      const index = this.list.findIndex((item) => item.id === this.currentId);
      if (index === this.list.length - 1) {
        this.currentId = this.list[0].id;
      } else {
        this.currentId = this.list[index + 1].id;
      }
      this.getUrl(this.currentId);
    },
    async playPrev() {
      const index = this.list.findIndex((item) => item.id === this.currentId);
      if (index === 0) {
        this.currentId = this.list[this.list.length - 1].id;
      } else {
        this.currentId = this.list[index - 1].id;
      }
      this.getUrl(this.currentId);
    },
  },
});
