import { LRUCache } from "lru-cache";

import type {
  Banners,
  CatList,
  TopPlayList,
  PlayListDetail,
  SongUrl,
  LyricRoot,
  PlayListHot,
  DjHot,
} from "~/type";

const options = {
  max: 500,
  maxSize: 5000,
  sizeCalculation: () => 1,
  ttl: 1000 * 60 * 5,
};
const cache = new LRUCache(options);

export function getBanner(): Promise<Banners> {
  return GET<Banners>("/muc/banner");
}

export function getPlayListCatlist(): Promise<CatList> {
  return GET<CatList>("/muc/playlist/catlist");
  // return $fetch("/muc/playlist/catlist");
}

export function getTopPlayList(
  cat: string | null = "全部",
  limit: number = 45,
  offset: number = 0,
  order: string = "hot" || "new",
): Promise<TopPlayList> {
  return GET<TopPlayList>("/muc/top/playlist", {
    cat,
    order,
    limit,
    offset,
  });
}

export function getPlayListDetail(
  id: string | number,
): Promise<PlayListDetail> {
  return GET<PlayListDetail>("/muc/playlist/detail", {
    id,
  });
}

export function getSongUrl(id: string | number): Promise<SongUrl> {
  return GET<SongUrl>("/muc/song/url", {
    id,
  });
}

export function getPlayListHot(): Promise<PlayListHot> {
  return GET<PlayListHot>("/muc/playlist/hot");
}

export function getSongLyric(id: string | number): Promise<LyricRoot> {
  return GET<LyricRoot>("/muc/lyric", {
    id,
  });
}

export function getDjHot(
  offset: number = 0,
  limit: number = 8,
): Promise<DjHot> {
  return GET<DjHot>("/muc/dj/hot", {
    offset,
    limit,
  });
}

/**
 *
 * @param url
 * @param type
 * @param query
 * @param body
 */

export async function multiRequest<DataT>(
  url: string,
  type: RequestMethod | any,
  query?: any,
  body?: RequestInit["body"],
): Promise<DataT> {
  // const { data, pending, error, refresh } = await useFetch<DataT>(url, {
  //   method: type,
  //   query,
  //   body,
  //   onRequest({ request, options }) {
  //     // 设置请求头
  //     options.headers = options.headers || {};
  //   },
  //   onRequestError({ request, options, error }) {
  //     // 处理请求错误
  //   },
  //   onResponse({ request, response, options }) {
  //     // 处理响应数据
  //   },
  //   onResponseError({ request, response, options }) {
  //     // 处理响应错误
  //   },
  // });
  // console.log(data);
  // return data.value as DataT;
  const str = `${url}${JSON.stringify(query)}`;
  console.log("cached str->>", str);
  if (cache.has(str)) {
    return cache.get(str) as DataT;
  }
  cache.set(
    str,
    $fetch<DataT>(url, {
      method: type,
      query,
      body,
    }),
  );

  return cache.get(str) as DataT;
}
export function GET<DataT>(
  url: string,
  query?: any | undefined,
): Promise<DataT> {
  return multiRequest(url, "GET", query);
}
export function POST(url: string, body?: RequestInit["body"], query?: unknown) {
  return multiRequest(url, "POST", query, body);
}

type RequestMethod = "GET" | "POST" | "DELETE" | "PATCH";
