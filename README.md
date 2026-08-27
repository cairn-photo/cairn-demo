# Cairn Demo

Wireframe based iOS-size demo built with React + Vite.

## Included Pages

- Home: map screen
- Upload: 3-step upload flow
- Spot: spot detail sheet
- PathDetail: route detail page

## Project Structure

src/

- pages/
	- Home.jsx
	- Upload.jsx
	- Spot.jsx
	- PathDetail.jsx
- components/
	- Map.jsx
	- PhotoCard.jsx
- data/
	- mockData.js
- App.jsx

## Run

1. Install deps

	 npm install

2. Start dev server

	 npm run dev

3. Build check

	 npm run build

## Routes

- /
- /upload
- /spot/jericho-pier
- /path/west-side-golden-hour

## Notes

- Main viewport is designed around 375x812 (iPhone style shell).
- On narrow screens the frame expands to full viewport.
