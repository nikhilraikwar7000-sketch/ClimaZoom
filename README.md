# AgroCast — Panchayat Weather Downscaling Frontend

A Vercel-ready React + Vite prototype for:

> Downscaling of weather forecast from Block level to Panchayat level for agro-meteorological advisory services.

## Features

- Dashboard
- Panchayat forecast
- Downscaling engine visualization
- Interactive mock weather map
- Crop advisory
- Weather/agriculture alerts
- Model analytics
- Hindi/English toggle
- Dark/light mode
- Responsive desktop/mobile layout
- Mock data separated from UI

## Run

```bash
npm install
npm run dev
```

Then open the Vite local URL.

## Vercel

Import the project into Vercel. Framework preset: Vite.
Build command: `npm run build`
Output directory: `dist`

## Feature files

- `src/features/dashboard/Dashboard.jsx`
- `src/features/forecast/Forecast.jsx`
- `src/features/downscaling/Downscaling.jsx`
- `src/features/map/WeatherMap.jsx`
- `src/features/advisory/Advisory.jsx`
- `src/features/alerts/Alerts.jsx`
- `src/features/analytics/Analytics.jsx`
- `src/features/settings/SettingsPage.jsx`

Shared components:
- `src/components/SectionHeader.jsx`
- `src/components/StatCard.jsx`
- `src/components/ForecastCard.jsx`

Data:
- `src/data/mockData.js`

## Production integration

Replace `src/data/mockData.js` with API calls to your backend. A production architecture can connect:
Block-level forecast → feature extraction → downscaling ML service → Panchayat GeoJSON → forecast API → advisory engine → frontend.

## Analytics chart update
The Analytics section now includes responsive SVG charts for rainfall probability and 7-day temperature, plus downscaling quality bars. Charts include axes, gridlines, labels, hover values, and dark-mode styling without adding a new chart dependency.
