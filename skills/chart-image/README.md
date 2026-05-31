# 📊 chart-image

**Publication-quality chart images from data. No browser, no Puppeteer, no native compilation.**

Generate beautiful PNG charts directly from JSON data — perfect for bots, dashboards, alerts, and automated reports. Runs anywhere Node.js runs.

![Line chart example](readme-assets/framed-line.png)

## Why chart-image?

Most chart libraries need a browser (Puppeteer, Playwright) or native dependencies (`canvas`, `cairo`). That means 400MB+ installs, painful Docker builds, and slow cold starts.

**chart-image uses Vega-Lite + Sharp with prebuilt binaries:**

| | chart-image | Puppeteer + Chart.js | QuickChart.io |
|---|---|---|---|
| **Install size** | ~15MB | ~400MB+ | 0 (API) |
| **Native deps** | None | Chromium | N/A |
| **Cold start** | <500ms | 2-5s | Network latency |
| **Offline** | ✅ | ✅ | ❌ |
| **Fly.io/Docker** | Just works | Pain | Depends on uptime |

## Install

### Via ClawHub (recommended)
```bash
clawhub install chart-image
```

### Manual
```bash
git clone https://github.com/Cluka-399/chart-image.git skills/chart-image
cd skills/chart-image/scripts && npm install
```

## Quick Start

```bash
node scripts/chart.mjs \
  --type line \
  --data '[{"x":"Mon","y":10},{"x":"Tue","y":25},{"x":"Wed","y":18}]' \
  --title "Weekly Trend" \
  --dark \
  --output chart.png
```

That's it. One command, one PNG.

---

## Chart Types

### 📈 Line Chart

Track trends over time. The default chart type.

```bash
node scripts/chart.mjs --type line \
  --data '[{"x":"Mon","y":142},{"x":"Tue","y":148},{"x":"Wed","y":145},{"x":"Thu","y":155},{"x":"Fri","y":162}]' \
  --title "AAPL Weekly Price" --y-title "Price (USD)" \
  --dark --show-values --output chart.png
```

![Line chart](readme-assets/framed-line.png)

### 📊 Bar Chart

Compare categories side by side.

```bash
node scripts/chart.mjs --type bar \
  --data '[{"x":"React","y":45},{"x":"Vue","y":28},{"x":"Svelte","y":15},{"x":"Angular","y":12}]' \
  --title "Framework Usage %" --output chart.png
```

![Bar chart](readme-assets/framed-bar.png)

### 🌊 Area Chart

Like line charts, but with filled regions to emphasize volume.

```bash
node scripts/chart.mjs --type area \
  --data '[{"x":"Jan","y":100},{"x":"Feb","y":250},{"x":"Mar","y":180},{"x":"Apr","y":420},{"x":"May","y":380},{"x":"Jun","y":520}]' \
  --title "Monthly Signups" --dark --output chart.png
```

![Area chart](readme-assets/framed-area.png)

### 🍩 Donut / Pie Chart

Show proportions at a glance. Use `--type pie` for a solid circle or `--type donut` for the ring style.

```bash
node scripts/chart.mjs --type donut \
  --data '[{"x":"Desktop","y":58},{"x":"Mobile","y":35},{"x":"Tablet","y":7}]' \
  --title "Traffic by Device" --dark --output chart.png
```

![Donut chart](readme-assets/framed-donut.png)

### 📉 Multi-Series Line

Compare multiple trends on one chart using `--series-field`.

```bash
node scripts/chart.mjs --type line \
  --data '[{"x":"Q1","y":30,"series":"2024"},{"x":"Q2","y":45,"series":"2024"},{"x":"Q3","y":52,"series":"2024"},{"x":"Q4","y":61,"series":"2024"},{"x":"Q1","y":40,"series":"2025"},{"x":"Q2","y":58,"series":"2025"},{"x":"Q3","y":72,"series":"2025"}]' \
  --title "Revenue Growth" --y-title "Revenue ($M)" \
  --series-field series --dark --legend top --output chart.png
```

![Multi-series chart](readme-assets/framed-multi.png)

### 📏 Horizontal Reference Lines

Add thresholds, targets, or buy prices with `--hline`.

```bash
node scripts/chart.mjs --type line \
  --data '[{"x":"Jan 1","y":0.00072},{"x":"Jan 5","y":0.00085},{"x":"Jan 10","y":0.00091},{"x":"Jan 15","y":0.00078},{"x":"Jan 20","y":0.00062},{"x":"Jan 25","y":0.00071}]' \
  --title "Token Price" --y-title "Price (USD)" \
  --dark --show-values --hline "0.0008,#e63946,Buy Price" --output chart.png
```

![Reference line chart](readme-assets/framed-hline.png)

### 🎨 Conditional Colors

Color bars/points based on a threshold — great for KPI dashboards.

```bash
node scripts/chart.mjs --type bar \
  --data '[{"month":"Jan","score":72},{"month":"Feb","score":45},{"month":"Mar","score":38},{"month":"Apr","score":61},{"month":"May","score":29},{"month":"Jun","score":55},{"month":"Jul","score":82},{"month":"Aug","score":47},{"month":"Sep","score":68},{"month":"Oct","score":34},{"month":"Nov","score":76},{"month":"Dec","score":91}]' \
  --x-field month --y-field score --x-sort none \
  --conditional-color "50,#e63946,#2a9d8f" --hline "50,#888,Target" \
  --title "Monthly Performance Score" --subtitle "Target: 50" --dark
```

![Conditional color chart](readme-assets/framed-conditional.png)

### ↔️ Horizontal Bar Charts

Flip axes for leaderboards, rankings, or long category names.

```bash
node scripts/chart.mjs --type bar \
  --data '[{"lang":"Python","stars":95},{"lang":"JavaScript","stars":82},{"lang":"TypeScript","stars":78},{"lang":"Rust","stars":71},{"lang":"Go","stars":63},{"lang":"Java","stars":58},{"lang":"C++","stars":45},{"lang":"Swift","stars":38}]' \
  --x-field lang --y-field stars --horizontal --sort desc \
  --conditional-color "60,#e63946,#2a9d8f" --bar-labels \
  --title "GitHub Stars by Language" --dark
```

![Horizontal bar chart](readme-assets/framed-horizontal-bar.png)

### More Chart Types

- **`point`** — Scatter plot
- **`candlestick`** — OHLC financial charts (`--open-field`, `--high-field`, `--low-field`, `--close-field`)
- **`heatmap`** — Grid visualization (`--color-value-field`, `--color-scheme viridis`)
- **Stacked bars** — `--type bar --stacked --color-field category`
- **Volume overlay** — Dual Y-axis with `--volume-field`
- **Sparkline** — Tiny inline charts with `--sparkline` (80×20, no axes)

---

## Shorthand Syntax

Don't want to write JSON? Use the shorthand format:

```bash
node scripts/chart.mjs --type bar \
  --data "Mon:10,Tue:25,Wed:18,Thu:30,Fri:22,Sat:35,Sun:28" \
  --title "Weekly Activity" --dark --output chart.png
```

![Shorthand example](readme-assets/framed-shorthand.png)

Format: `label:value,label:value,...`

---

## Dark Mode & Light Mode

Use `--dark` for dark backgrounds (great for Discord, Slack, dark dashboards):

![Dark mode](readme-assets/framed-horizontal.png)

Omit `--dark` for light mode (reports, emails, light UIs):

![Light mode](readme-assets/framed-bar.png)

**Tip for bots:** Auto-switch based on time of day — `--dark` between 20:00–07:00.

---

## Alert-Style Charts

Built-in options for monitoring and alerting use cases:

```bash
node scripts/chart.mjs --type line --data '[...]' \
  --title "Iran Strike Odds (48h)" \
  --show-change --focus-change --show-values --dark \
  --output alert.png
```

| Flag | Effect |
|------|--------|
| `--show-change` | Annotates % change from first to last value |
| `--focus-change` | Zooms Y-axis to 2× data range for drama |
| `--focus-recent N` | Shows only the last N data points |
| `--show-values` | Labels min/max peaks on the chart |

---

## Piping Data

Read from stdin:

```bash
curl -s api.example.com/metrics | node scripts/chart.mjs --type line --dark --output metrics.png
echo '[{"x":"A","y":1},{"x":"B","y":2}]' | node scripts/chart.mjs --output out.png
```

---

## Options Reference

### Core
| Option | Description | Default |
|--------|-------------|---------|
| `--type` | `line`, `bar`, `area`, `point`, `pie`, `donut`, `candlestick`, `heatmap` | `line` |
| `--data` | JSON array or shorthand `key:val,...` | stdin |
| `--output` | Output file path | `chart.png` |
| `--title` | Chart title | — |
| `--subtitle` | Subtitle below title | — |
| `--width` | Width in px | `600` |
| `--height` | Height in px | `300` |
| `--dark` | Dark theme | `false` |
| `--svg` | Output SVG instead of PNG | `false` |

### Axes
| Option | Description | Default |
|--------|-------------|---------|
| `--x-field` | X axis field name | `x` |
| `--y-field` | Y axis field name | `y` |
| `--x-title` / `--y-title` | Axis labels | field name |
| `--x-type` | `ordinal`, `temporal`, `quantitative` | `ordinal` |
| `--y-domain` | Y range as `"min,max"` | auto |
| `--y-format` | `percent`, `dollar`, `compact`, `decimal4`, `integer`, `scientific` | auto |

### Styling
| Option | Description | Default |
|--------|-------------|---------|
| `--color` | Primary color | `#e63946` |
| `--color-scheme` | Vega scheme (e.g. `viridis`, `category10`) | — |
| `--no-grid` | Remove gridlines | `false` |
| `--legend` | `top`, `bottom`, `left`, `right`, `none` | — |
| `--hline` | Reference line: `"value,color,label"` (repeatable) | — |

### Multi-Series
| Option | Description |
|--------|-------------|
| `--series-field` | Field to split into multiple lines |
| `--stacked` | Stack bars/areas |
| `--color-field` | Field for color encoding |

### Annotations
| Option | Description |
|--------|-------------|
| `--show-change` | Show % change annotation |
| `--focus-change` | Zoom Y to highlight change |
| `--focus-recent N` | Show last N points only |
| `--show-values` | Label min/max peaks |
| `--annotations` | JSON array of event markers: `[{"x":"14:00","label":"News"}]` |

---

## Y-Axis Formatting

```bash
--y-format dollar    # → $1,234.56
--y-format percent   # → 45.2%
--y-format compact   # → 1.2K, 3.4M
--y-format decimal4  # → 0.0004
--y-format integer   # → 1,234
```

Or pass any [d3-format](https://github.com/d3/d3-format) string: `--y-format ',.3f'`

---

## Designed for Fly.io / VPS / Docker

This skill was built specifically for headless server environments where you can't (or don't want to) install a browser:

- **Fly.io** — Works out of the box on `flyctl deploy`. No special Dockerfile needed.
- **Docker** — No `apt-get install` for Cairo/Pango/etc. Just `npm install`.
- **VPS** — Runs on any machine with Node.js 18+. No GPU, no display server.
- **CI/CD** — Generate charts in GitHub Actions, GitLab CI, etc.

The secret: [Vega-Lite](https://vega.github.io/vega-lite/) renders to SVG natively, then [Sharp](https://sharp.pixelplumbing.com/) (with prebuilt libvips binaries) converts to PNG. No browser in the loop.

---

## License

MIT

---

<p align="center">
  <sub>Built by <a href="https://clawhub.ai/u/Cluka-399">@Cluka-399</a> · Published on <a href="https://clawhub.ai">ClawHub</a> · <a href="https://github.com/Cluka-399/chart-image">GitHub</a></sub>
</p>
