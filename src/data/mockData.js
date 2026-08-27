export const route = {
  id: 'west-side-golden-hour',
  title: 'West Side golden hour',
  date: 'Aug 26',
  city: 'Vancouver',
  distanceKm: 3.4,
  duration: '1:43',
  cellsLit: 6,
  timeRange: '18:04 - 19:47',
  coverage: 18.4,
}

export const spots = [
  {
    id: 'jericho-pier',
    name: 'Jericho Pier',
    time: '18:22',
    photoCount: 12,
    lens: '35mm',
    exposure: 'f/8 - 1/250 - ISO 100',
    note: 'Best from sunset to blue hour. Wind can be strong on the pier.',
    x: 36,
    y: 42,
  },
  {
    id: 'locarno-beach',
    name: 'Locarno Beach',
    time: '18:51',
    photoCount: 8,
    lens: '24mm',
    exposure: 'f/11 - 1/60 - ISO 200',
    note: 'Good foreground textures when tide is low.',
    x: 61,
    y: 58,
  },
  {
    id: 'spanish-banks',
    name: 'Spanish Banks',
    time: '19:30',
    photoCount: 5,
    lens: '50mm',
    exposure: 'f/4 - 2s - ISO 100',
    note: 'Tripod recommended after sunset.',
    x: 24,
    y: 68,
  },
]

export const routePathPoints = [
  { x: 30, y: 72 },
  { x: 35, y: 62 },
  { x: 44, y: 58 },
  { x: 49, y: 53 },
  { x: 57, y: 49 },
  { x: 66, y: 43 },
]

export const uploadSummary = {
  selectedPhotos: 5,
  matchedPhotos: 3,
  needsManualPlacement: 2,
}
