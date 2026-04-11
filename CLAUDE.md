# NZ Census Explorer

A single-page app for exploring 2023 New Zealand census statistics by location. Click the map or search an address to see population, ethnicity, housing, income, dampness/mould data for any Statistical Area.

## Stack

- **Single file:** `index.html` — all HTML, CSS, and JS in one file, no build step
- **Map:** Leaflet 1.9.4 (CDN)
- **Font:** Raleway (Google Fonts)
- **Data:** Stats NZ ArcGIS REST API (no key required for public endpoints)
- **Geocoding:** Nominatim / OpenStreetMap

## Data sources

All data is fetched at runtime from Stats NZ's public ArcGIS services:

| Service | Used for |
|---|---|
| `Statistical_Area_2_2023` | SA2 boundary polygons |
| `Statistical_Area_3_2023` | SA3 boundary polygons |
| `2023_Census_totals_by_topic_for_individuals_by_SA2` | Population, age, ethnicity |
| `2023_Census_totals_by_topic_for_households_by_SA2` | Households, tenure, income, rent, composition |
| `2023_Census_totals_by_topic_for_dwellings_by_SA2` | Dampness, mould |

SA3 figures are aggregated client-side by batch-querying all SA2s within the SA3 polygon. Medians (age, income, rent) use population-weighted averages. Suppressed values are encoded as `-999`.

## Colour palette

| Name | Hex | Used for |
|---|---|---|
| Radioactive Grass | `#1fda2b` | Header/title bar, primary accent |
| Yale Blue / Indigo | `#1221C7` | SA3 boundaries and badges |
| Amber Flame | `#ffb703` | SA2 boundaries and badges |
| Princeton Orange | `#fb8500` | "You are here" location marker |
| Royal Blue | `#2060e1` | Bar chart fills |

Text on Amber Flame badges uses `#0b2200` (dark green) for contrast — not white.

## OG images

Two JSX files ready to paste into [og-playground.vercel.app](https://og-playground.vercel.app) (Satori/`@vercel/og`):

- `og-image.jsx` — Map Pin + Stat Tiles layout (lime green left panel, 2×2 stat cards right)
- `og-image-split.jsx` — Split panel (stylised map left, stats panel right)

Both output at 1200×630. Paste the raw JSX (no component wrapper) directly into the playground.

## Key conventions

- No framework, no bundler — edit `index.html` directly
- All census field names are aliased in the `CF` constant object near the top of the script
- `valid(v)` strips nulls and suppressed values (`-999`) before display
- `SA_META` holds per-level config (service name, field names, colours)
- SA3 data is always aggregated from SA2s — there are no direct SA3 census endpoints
