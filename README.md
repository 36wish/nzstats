# NZ Statistical Area Explorer

An interactive map for exploring New Zealand's 2023 Census data at the Statistical Area level.

**Live demo:** https://36wish.github.io/nzstats

---

## Screenshot

*(screenshot placeholder)*

---

## Features

- **Address search** — geocode any NZ address via Nominatim/OpenStreetMap
- **Geolocation** — jump to your current location with one click
- **SA2 / SA3 toggle** — switch between Statistical Area Level 2 and Level 3 boundaries
- **Census stats panels** — click any area on the map to see 2023 Census statistics including population, dwellings, and demographic breakdowns
- **Responsive layout** — works on desktop and mobile

## Data Sources

- Boundary and census data: [Stats NZ](https://www.stats.govt.nz/) — 2023 Census
- Geocoding: [Nominatim](https://nominatim.org/) / OpenStreetMap contributors

## Running Locally

No build step required. Just open `index.html` in a browser:

```
# Option 1 — open directly
open index.html   # macOS
start index.html  # Windows

# Option 2 — any static file server, e.g. Python
python -m http.server 8080
# then visit http://localhost:8080
```

## License

[MIT](LICENSE)
