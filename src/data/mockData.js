export const route = {
  id: 'west-side-golden-hour',
  title: 'West Side golden hour',
  date: 'Aug 26',
  city: 'Vancouver',
  distanceKm: 3.4,
  duration: '1:43',
  cellsLit: 6,
  timeRange: '18:04–19:47',
  timeRangeDash: '18:04–19:47',
  subtitle: '18:04 – 19:47 · golden hour to blue hour',
  coverage: 18.4,
  author: 'Andrew',
  spotCount: 4,
}

export const spots = [
  {
    id: 'jericho-pier',
    name: 'Jericho Pier',
    time: '18:22',
    photoCount: 12,
    lens: '35mm',
    exposure: 'f/8 · 1/250 · ISO 100',
    exifShort: '18:22 · 35mm · f/8 · 1/250',
    note: 'Vancouver West Side · 最佳時間 日落前 40 分鐘',
    headsUp: '潮汐區，退潮時才可走出沙灘。請查潮汐表並結伴前往。',
    x: 52,
    y: 29,
    size: 'lg',
  },
  {
    id: 'locarno-beach',
    name: 'Locarno Beach',
    time: '18:51',
    photoCount: 8,
    lens: '24mm',
    exposure: 'f/11 · 1/60 · ISO 200',
    exifShort: '18:51 · 24mm · f/11 · 1/60',
    note: 'Good foreground textures when tide is low.',
    x: 70,
    y: 54,
    size: 'md',
  },
  {
    id: 'spanish-banks',
    name: 'Spanish Banks',
    time: '19:30',
    photoCount: 5,
    lens: '50mm',
    exposure: 'f/4 · 2s · ISO 100',
    exifShort: '19:30 · 50mm · f/4 · 2s',
    note: 'Tripod recommended after sunset.',
    x: 38,
    y: 61,
    size: 'dot',
    highlight: true,
  },
  {
    id: 'beach-dot-a',
    name: 'Beach lookout',
    time: '19:10',
    photoCount: 0,
    x: 66,
    y: 36,
    size: 'dot',
  },
  {
    id: 'beach-dot-b',
    name: 'Shoreline',
    time: '18:40',
    photoCount: 0,
    x: 54,
    y: 48,
    size: 'dot',
    highlight: true,
  },
]

export const routePathPoints = [
  { x: 42, y: 72 },
  { x: 48, y: 62 },
  { x: 55, y: 55 },
  { x: 58, y: 48 },
  { x: 62, y: 42 },
  { x: 68, y: 36 },
]

export const recordPathPoints = [
  { x: 46, y: 74 },
  { x: 50, y: 64 },
  { x: 55, y: 58 },
  { x: 60, y: 50 },
  { x: 64, y: 44 },
  { x: 68, y: 38 },
]

export const uploadSummary = {
  selectedPhotos: 5,
  matchedPhotos: 3,
  needsManualPlacement: 2,
  exifMessage: '已讀取 5 張的 EXIF 時間 · 5 張有座標，0 張需手動定位',
}

export const matchedPhotos = [
  { name: 'Jericho Pier', meta: '18:22 · 35mm · f/8 · 1/250' },
  { name: 'Locarno Beach', meta: '18:51 · 24mm · f/11 · 1/60' },
  { name: 'Spanish Banks', meta: '19:30 · 50mm · f/4 · 2s' },
]
