# chart-generation Capability

Provides: chart-generation
Skill: chart-image

## Methods

### lineChart

**Input:**
- data: Array of data points (objects with x/y, time/value, or time/price fields)
- title: (optional) Chart title
- groupBy: (optional) Field to group by for multi-series charts
- options: (optional) Additional options
  - dark: boolean - Use dark theme
  - focusRecent: number - Zoom to last N data points
  - showChange: boolean - Show percentage change annotation
  - showValues: boolean - Show value labels on points

**How to fulfill:**
```bash
# Write data to temp file
echo '${JSON.stringify(data)}' > /tmp/chart-data.json

# Generate chart
node /data/clawd/skills/chart-image/scripts/chart.mjs \
  --type line \
  --data "$(cat /tmp/chart-data.json)" \
  --title "${title}" \
  ${options.dark ? '--dark' : ''} \
  ${options.focusRecent ? '--focus-recent ' + options.focusRecent : ''} \
  ${options.showChange ? '--show-change' : ''} \
  ${options.showValues ? '--show-values' : ''} \
  --output /tmp/chart-${Date.now()}.png
```

**Output:** `{ path: string }` - Path to the generated PNG file

---

### barChart

**Input:**
- data: Array of objects with label and value fields
- title: (optional) Chart title
- options: (optional) Additional options
  - dark: boolean - Use dark theme
  - showValues: boolean - Show value labels on bars

**How to fulfill:**
```bash
# Write data to temp file
echo '${JSON.stringify(data)}' > /tmp/chart-data.json

# Generate chart
node /data/clawd/skills/chart-image/scripts/chart.mjs \
  --type bar \
  --data "$(cat /tmp/chart-data.json)" \
  --title "${title}" \
  ${options.dark ? '--dark' : ''} \
  ${options.showValues ? '--show-values' : ''} \
  --output /tmp/chart-${Date.now()}.png
```

**Output:** `{ path: string }` - Path to the generated PNG file

---

### areaChart

**Input:**
- data: Array of data points
- title: (optional) Chart title
- options: (optional) Same as lineChart

**How to fulfill:**
```bash
node /data/clawd/skills/chart-image/scripts/chart.mjs \
  --type area \
  --data '${JSON.stringify(data)}' \
  --title "${title}" \
  --output /tmp/chart-${Date.now()}.png
```

**Output:** `{ path: string }` - Path to the generated PNG file

---

## Notes

- All methods output PNG images to /tmp by default
- Use `--dark` flag between 20:00-07:00 local time for better night-mode visuals
- For time series, data points should have `time` or `x` field in ISO format or readable string
- The skill uses Vega-Lite under the hood - see SKILL.md for full options
