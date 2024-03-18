export interface Banner {
  imageUrl: string;
  targetId: number;
  adid?: any;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url?: any;
  exclusive: boolean;
  monitorImpress?: any;
  monitorClick?: any;
  monitorType?: any;
  monitorImpressList?: any;
  monitorClickList?: any;
  monitorBlackList?: any;
  extMonitor?: any;
  extMonitorInfo?: any;
  adSource?: any;
  adLocation?: any;
  adDispatchJson?: any;
  encodeId: string;
  program?: any;
  event?: any;
  video?: any;
  song?: any;
  scm: string;
  bannerBizType: string;
}

export interface Banners {
  banners: Banner[];
  code: number;
}

export interface All {
  name: string;
  resourceCount: number;
  imgId: number;
  imgUrl?: any;
  type: number;
  category: number;
  resourceType: number;
  hot: boolean;
  activity: boolean;
}

export interface Sub {
  name: string;
  resourceCount: number;
  imgId: number;
  imgUrl?: any;
  type: number;
  category: number;
  resourceType: number;
  hot: boolean;
  activity: boolean;
}

export interface Category {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}

export interface CatList {
  code: number;
  all: All;
  sub: Sub[];
  categories: Category;
}

///
export interface TreeItem {
  name: string;
  sub: Sub;
}

//

export interface RelatedVideo {}

export interface Subscriber {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
  avatarImgId_str: string;
}

export interface Creator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
  avatarImgId_str: string;
}

export interface Ar {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}

export interface Al {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}

export interface H {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface M {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface L {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface Sq {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface Hr {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface VideoInfo {
  moreThanOne: boolean;
  video?: any;
}

export interface Track {
  [x: string]: any;
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: Ar[];
  alia?: any[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt?: any;
  cf: string;
  al: Al;
  dt: number;
  h: H;
  m: M;
  l: L;
  sq: Sq;
  hr: Hr;
  a?: any;
  cd: string;
  no: number;
  rtUrl?: any;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  originSongSimpleData?: any;
  tagPicList?: any;
  resourceState: boolean;
  version: number;
  songJumpInfo?: any;
  entertainmentTags?: any;
  awardTags?: any;
  single: number;
  noCopyrightRcmd?: any;
  rtype: number;
  rurl?: any;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
  videoInfo: VideoInfo;
}

export interface TrackId {
  id: number;
  v: number;
  t: number;
  at: number;
  alg?: any;
  uid: number;
  rcmdReason: string;
  sc?: any;
  f?: any;
  sr?: any;
}

export interface Playlist {
  id: number;
  name: string;
  coverImgId: number;
  coverImgUrl: string;
  coverImgId_str: string;
  adType: number;
  userId: number;
  createTime: number;
  status: number;
  opRecommend: boolean;
  highQuality: boolean;
  newImported: boolean;
  updateTime: number;
  trackCount: number;
  specialType: number;
  privacy: number;
  trackUpdateTime: number;
  commentThreadId: string;
  playCount: number;
  trackNumberUpdateTime: number;
  subscribedCount: number;
  cloudTrackCount: number;
  ordered: boolean;
  description?: string;
  tags: any[];
  updateFrequency?: any;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  titleImageUrl?: any;
  englishTitle?: any;
  officialPlaylistType?: any;
  copied: boolean;
  relateResType?: any;
  subscribers: Subscriber[];
  subscribed?: any;
  creator: Creator;
  tracks?: Track[];
  videoIds?: any;
  videos?: any;
  trackIds: TrackId[];
  bannedTrackIds?: any;
  mvResourceInfos?: any;
  shareCount: number;
  commentCount: number;
  remixVideo?: any;
  sharedUsers?: any;
  historySharedUsers?: any;
  gradeStatus: string;
  score?: any;
  algTags?: any;
  trialMode: number;
}

export interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType?: any;
  cannotListenReason?: any;
  playReason?: any;
}

export interface ChargeInfoList {
  rate: number;
  chargeUrl?: any;
  chargeMessage?: any;
  chargeType: number;
}

export interface Privilege {
  id: number;
  fee: number;
  payed: number;
  realPayed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  pc?: any;
  toast: boolean;
  flag: number;
  paidBigBang: boolean;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  maxBrLevel: string;
  playMaxBrLevel: string;
  downloadMaxBrLevel: string;
  plLevel: string;
  dlLevel: string;
  flLevel: string;
  rscl: number;
  freeTrialPrivilege: FreeTrialPrivilege;
  rightSource: number;
  chargeInfoList: ChargeInfoList[];
}

export interface PlayList {
  playlists: {
    id: number;
    name: string;
    coverImgId: number;
    coverImgUrl: string;
    coverImgId_str: string;
    adType: number;
    userId: number;
    createTime: number;
    status: number;
    opRecommend: boolean;
    highQuality: boolean;
    newImported: boolean;
    updateTime: number;
    trackCount: number;
    specialType: number;
    privacy: number;
    trackUpdateTime: number;
    commentThreadId: string;
    playCount: number;
    trackNumberUpdateTime: number;
    subscribedCount: number;
    cloudTrackCount: number;
    ordered: boolean;
    description?: string | undefined;
    tags: any[];
    updateFrequency?: any;
    backgroundCoverId: number;
    backgroundCoverUrl?: any;
    titleImage: number;
    titleImageUrl?: any;
    englishTitle?: any;
    officialPlaylistType?: any;
    copied: boolean;
    relateResType?: any;
    subscribers: {
      defaultAvatar: boolean;
      province: number;
      authStatus: number;
      followed: boolean;
      avatarUrl: string;
      accountStatus: number;
      gender: number;
      city: number;
      birthday: number;
      userId: number;
      userType: number;
      nickname: string;
      signature: string;
      description: string;
      detailDescription: string;
      avatarImgId: number;
      backgroundImgId: number;
      backgroundUrl: string;
      authority: number;
      mutual: boolean;
      expertTags?: any;
      experts?: any;
      djStatus: number;
      vipType: number;
      remarkName?: any;
      authenticationTypes: number;
      avatarDetail?: any;
      avatarImgIdStr: string;
      backgroundImgIdStr: string;
      anchor: boolean;
      avatarImgId_str: string;
    }[];
    subscribed?: any;
    creator: {
      defaultAvatar: boolean;
      province: number;
      authStatus: number;
      followed: boolean;
      avatarUrl: string;
      accountStatus: number;
      gender: number;
      city: number;
      birthday: number;
      userId: number;
      userType: number;
      nickname: string;
      signature: string;
      description: string;
      detailDescription: string;
      avatarImgId: number;
      backgroundImgId: number;
      backgroundUrl: string;
      authority: number;
      mutual: boolean;
      expertTags?: any;
      experts?: any;
      djStatus: number;
      vipType: number;
      remarkName?: any;
      authenticationTypes: number;
      avatarDetail?: any;
      avatarImgIdStr: string;
      backgroundImgIdStr: string;
      anchor: boolean;
      avatarImgId_str: string;
    };
    tracks?:
      | {
          name: string;
          id: number;
          pst: number;
          t: number;
          ar: { id: number; name: string; tns: any[]; alias: any[] }[];
          alia?: any[] | undefined;
          pop: number;
          st: number;
          rt: string;
          fee: number;
          v: number;
          crbt?: any;
          cf: string;
          al: {
            id: number;
            name: string;
            picUrl: string;
            tns: any[];
            pic_str: string;
            pic: number;
          };
          dt: number;
          h: { br: number; fid: number; size: number; vd: number; sr: number };
          m: { br: number; fid: number; size: number; vd: number; sr: number };
          l: { br: number; fid: number; size: number; vd: number; sr: number };
          sq: { br: number; fid: number; size: number; vd: number; sr: number };
          hr: { br: number; fid: number; size: number; vd: number; sr: number };
          a?: any;
          cd: string;
          no: number;
          rtUrl?: any;
          ftype: number;
          rtUrls: any[];
          djId: number;
          copyright: number;
          s_id: number;
          mark: number;
          originCoverType: number;
          originSongSimpleData?: any;
          tagPicList?: any;
          resourceState: boolean;
          version: number;
          songJumpInfo?: any;
          entertainmentTags?: any;
          awardTags?: any;
          single: number;
          noCopyrightRcmd?: any;
          rtype: number;
          rurl?: any;
          mst: number;
          cp: number;
          mv: number;
          publishTime: number;
          videoInfo: { moreThanOne: boolean; video?: any };
        }[]
      | undefined;
    videoIds?: any;
    videos?: any;
    trackIds: {
      id: number;
      v: number;
      t: number;
      at: number;
      alg?: any;
      uid: number;
      rcmdReason: string;
      sc?: any;
      f?: any;
      sr?: any;
    }[];
    bannedTrackIds?: any;
    mvResourceInfos?: any;
    shareCount: number;
    commentCount: number;
    remixVideo?: any;
    sharedUsers?: any;
    historySharedUsers?: any;
    gradeStatus: string;
    score?: any;
    algTags?: any;
    trialMode: number;
    iconImgUrl?: any;
    totalDuration: number;
    anonimous: boolean;
    coverStatus: number;
    recommendInfo?: any;
    socialPlaylistCover?: any;
    recommendText?: any;
    coverText?: any;
    relateResId?: any;
    alg: string;
  }[];
  code: number;
  relatedVideos: RelatedVideo;
  playlist: Playlist;
  urls?: any;
  privileges: Privilege[];
  sharedPrivilege?: any;
  resEntrance?: any;
  fromUsers?: any;
  fromUserCount: number;
  songFromUsers?: any;
}

export interface Creator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  anchor: boolean;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
}

export interface Subscriber {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  anchor: boolean;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
}

export interface Playlist {
  name: string;
  id: number;
  trackNumberUpdateTime: number;
  status: number;
  userId: number;
  createTime: number;
  updateTime: number;
  subscribedCount: number;
  trackCount: number;
  cloudTrackCount: number;
  coverImgUrl: string;
  iconImgUrl?: any;
  coverImgId: number;
  description?: string;
  tags: any[];
  playCount: number;
  trackUpdateTime: number;
  specialType: number;
  totalDuration: number;
  creator: Creator;
  tracks?: Track[];
  subscribers: Subscriber[];
  subscribed?: any;
  commentThreadId: string;
  newImported: boolean;
  adType: number;
  highQuality: boolean;
  privacy: number;
  ordered: boolean;
  anonimous: boolean;
  coverStatus: number;
  recommendInfo?: any;
  socialPlaylistCover?: any;
  recommendText?: any;
  coverText?: any;
  relateResType?: any;
  relateResId?: any;
  shareCount: number;
  alg: string;
  commentCount: number;
}

export interface TopPlayList {
  playlists: Playlist[];
  total: number;
  code: number;
  more: boolean;
  cat: string;
}

//
export interface RelatedVideo {}

export interface Subscriber {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  anchor: boolean;
  backgroundImgIdStr: string;
  avatarImgIdStr: string;
  avatarImgId_str: string;
}

export interface Creator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  anchor: boolean;
  backgroundImgIdStr: string;
  avatarImgIdStr: string;
  avatarImgId_str: string;
}

export interface Ar {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}

export interface Al {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}

export interface H {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface M {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface L {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface Sq {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface Hr {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface VideoInfo {
  moreThanOne: boolean;
  video?: any;
}

export interface Track {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: Ar[];
  alia?: any[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt?: any;
  cf: string;
  al: Al;
  dt: number;
  h: H;
  m: M;
  l: L;
  sq: Sq;
  hr: Hr;
  a?: any;
  cd: string;
  no: number;
  rtUrl?: any;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  originSongSimpleData?: any;
  tagPicList?: any;
  resourceState: boolean;
  version: number;
  songJumpInfo?: any;
  entertainmentTags?: any;
  awardTags?: any;
  single: number;
  noCopyrightRcmd?: any;
  mst: number;
  cp: number;
  mv: number;
  rtype: number;
  rurl?: any;
  publishTime: number;
  videoInfo: VideoInfo;
}

export interface TrackId {
  id: number;
  v: number;
  t: number;
  at: number;
  alg?: any;
  uid: number;
  rcmdReason: string;
  sc?: any;
  f?: any;
  sr?: any;
}

export interface Playlist {
  id: number;
  name: string;
  coverImgId: number;
  coverImgUrl: string;
  coverImgId_str: string;
  adType: number;
  userId: number;
  createTime: number;
  status: number;
  opRecommend: boolean;
  highQuality: boolean;
  newImported: boolean;
  updateTime: number;
  trackCount: number;
  specialType: number;
  privacy: number;
  trackUpdateTime: number;
  commentThreadId: string;
  playCount: number;
  trackNumberUpdateTime: number;
  subscribedCount: number;
  cloudTrackCount: number;
  ordered: boolean;
  description?: string | undefined;
  tags: any[];
  updateFrequency?: any;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  titleImageUrl?: any;
  englishTitle?: any;
  officialPlaylistType?: any;
  copied: boolean;
  relateResType?: any;
  subscribers: Subscriber[];
  subscribed?: any;
  creator: Creator;
  tracks?: Track[];
  videoIds?: any;
  videos?: any;
  trackIds: TrackId[];
  bannedTrackIds?: any;
  mvResourceInfos?: any;
  shareCount: number;
  commentCount: number;
  remixVideo?: any;
  sharedUsers?: any;
  historySharedUsers?: any;
  gradeStatus: string;
  score?: any;
  algTags?: any;
  trialMode: number;
}

export interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType?: any;
  cannotListenReason?: any;
  playReason?: any;
}

export interface ChargeInfoList {
  rate: number;
  chargeUrl?: any;
  chargeMessage?: any;
  chargeType: number;
}

export interface Privilege {
  id: number;
  fee: number;
  payed: number;
  realPayed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  pc?: any;
  toast: boolean;
  flag: number;
  paidBigBang: boolean;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  maxBrLevel: string;
  playMaxBrLevel: string;
  downloadMaxBrLevel: string;
  plLevel: string;
  dlLevel: string;
  flLevel: string;
  rscl: number;
  freeTrialPrivilege: FreeTrialPrivilege;
  rightSource: number;
  chargeInfoList: ChargeInfoList[];
}

export interface PlayListDetail {
  code: number;
  relatedVideos: RelatedVideo;
  playlist: Playlist;
  urls?: any;
  privileges: Privilege[];
  sharedPrivilege?: any;
  resEntrance?: any;
  fromUsers?: any;
  fromUserCount: number;
  songFromUsers?: any;
}

export interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType?: any;
  cannotListenReason?: any;
  playReason?: any;
}

export interface FreeTimeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  type: number;
  remainTime: number;
}

export interface Data {
  id: number;
  url: string;
  br: number;
  size: number;
  md5: string;
  code: number;
  expi: number;
  type: string;
  gain: number;
  peak: number;
  fee: number;
  uf?: any;
  payed: number;
  flag: number;
  canExtend: boolean;
  freeTrialInfo?: any;
  level: string;
  encodeType: string;
  channelLayout?: any;
  freeTrialPrivilege: FreeTrialPrivilege;
  freeTimeTrialPrivilege: FreeTimeTrialPrivilege;
  urlSource: number;
  rightSource: number;
  podcastCtrp?: any;
  effectTypes?: any;
  time: number;
  message?: any;
}

export interface SongUrl {
  code: number;
  data: Data[];
}

export interface TransUser {
  id: number;
  status: number;
  demand: number;
  userid: number;
  nickname: string;
  uptime: number;
}

export interface LyricUser {
  id: number;
  status: number;
  demand: number;
  userid: number;
  nickname: string;
  uptime: number;
}

export interface Lrc {
  version: number;
  lyric: string;
}

export interface Klyric {
  version: number;
  lyric: string;
}

export interface Tlyric {
  version: number;
  lyric: string;
}

export interface Romalrc {
  version: number;
  lyric: string;
}

export interface LyricRoot {
  sgc: boolean;
  sfy: boolean;
  qfy: boolean;
  transUser: TransUser;
  lyricUser: LyricUser;
  lrc: Lrc;
  klyric: Klyric;
  tlyric: Tlyric;
  romalrc: Romalrc;
  code: number;
}
