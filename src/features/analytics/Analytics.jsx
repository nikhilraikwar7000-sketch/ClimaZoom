import React, { useMemo, useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { Activity, Database, Target, TrendingUp } from "lucide-react";
import { forecast } from "../../data/mockData";

const rainfall = [68, 82, 61, 22, 28, 54, 88, 72, 64, 48, 36, 57];
const quality = [
  ["Temperature bias", 92],
  ["Rainfall localization", 87],
  ["Humidity calibration", 90],
  ["Wind adjustment", 85]
];

function LineChart({ data, labels, min = 0, max = 100, ySuffix = "%", title }) {
  const [hover, setHover] = useState(null);
  const width = 760;
  const height = 280;
  const left = 52;
  const right = 22;
  const top = 22;
  const bottom = 42;
  const plotW = width - left - right;
  const plotH = height - top - bottom;
  const step = data.length > 1 ? plotW / (data.length - 1) : plotW;
  const y = (value) => top + ((max - value) / (max - min)) * plotH;
  const x = (index) => left + index * step;
  const points = data.map((value, i) => `${x(i)},${y(value)}`).join(" ");
  const ticks = Array.from({ length: 5 }, (_, i) => min + ((max - min) / 4) * i);

  return (
    <div className="properChart" aria-label={title}>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" preserveAspectRatio="none">
        {ticks.map((tick) => {
          const yy = y(tick);
          return (
            <g key={tick}>
              <line x1={left} x2={width - right} y1={yy} y2={yy} className="chartGridLine" />
              <text x={left - 10} y={yy + 4} textAnchor="end" className="chartAxisText">{tick}{ySuffix}</text>
            </g>
          );
        })}
        <line x1={left} x2={width - right} y1={top + plotH} y2={top + plotH} className="chartAxisLine" />
        <polyline points={points} fill="none" className="chartLine" />
        {data.map((value, i) => (
          <g key={`${labels[i]}-${value}`}>
            <circle
              cx={x(i)} cy={y(value)} r={hover === i ? 6 : 4}
              className="chartPoint"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <title>{`${labels[i]}: ${value}${ySuffix}`}</title>
            </circle>
            <text x={x(i)} y={height - 16} textAnchor="middle" className="chartAxisText">{labels[i]}</text>
          </g>
        ))}
        {hover !== null && (
          <g pointerEvents="none">
            <line x1={x(hover)} x2={x(hover)} y1={top} y2={top + plotH} className="chartHoverLine" />
            <rect x={Math.min(Math.max(x(hover) - 38, left), width - right - 76)} y={Math.max(y(data[hover]) - 38, 3)} width="76" height="27" rx="7" className="chartTooltip" />
            <text x={Math.min(Math.max(x(hover), left + 38), width - right - 38)} y={Math.max(y(data[hover]) - 20, 20)} textAnchor="middle" className="chartTooltipText">{data[hover]}{ySuffix}</text>
          </g>
        )}
      </svg>
    </div>
  );
}

function BarChart({ rows }) {
  return (
    <div className="qualityChart">
      {rows.map(([label, value]) => (
        <div className="qualityRow" key={label}>
          <div className="qualityLabel"><span>{label}</span><b>{value}%</b></div>
          <div className="qualityTrack"><span style={{ width: `${value}%` }} /></div>
        </div>
      ))}
    </div>
  );
}

export default function Analytics({ lang }) {
  const hi = lang === "hi";
  const forecastLabels = useMemo(() => forecast.map((item) => item.day), []);
  const temperatures = useMemo(() => forecast.map((item) => item.temp), []);

  return (
    <div>
      <SectionHeader
        title={hi ? "मॉडल एवं मौसम विश्लेषण" : "Model & Weather Analytics"}
        subtitle={hi ? "पूर्वानुमान, डाउनस्केलिंग गुणवत्ता और मौसम संकेतों की निगरानी" : "Track forecast behavior, localization confidence and advisory signals"}
      />

      <div className="statsGrid">
        <div className="metricBox"><Database /><span>Input observations</span><b>12.8K</b><small>Historical + local features</small></div>
        <div className="metricBox"><Target /><span>Avg. confidence</span><b>89.5%</b><small>Panchayat outputs</small></div>
        <div className="metricBox"><Activity /><span>Variables</span><b>08</b><small>Rain, temp, humidity, wind…</small></div>
        <div className="metricBox"><TrendingUp /><span>Advisory signals</span><b>24</b><small>Generated this cycle</small></div>
      </div>

      <div className="analyticsGrid">
        <div className="panel chartPanel">
          <div className="panelHead">
            <div>
              <h3>{hi ? "बारिश की संभावना" : "Rainfall probability trend"}</h3>
              <p>{hi ? "12-दिन का illustrative local series" : "12-day illustrative local series"}</p>
            </div>
            <span className="chartLegend"><i /> Rain probability</span>
          </div>
          <LineChart data={rainfall} labels={Array.from({ length: 12 }, (_, i) => `D${i + 1}`)} title="Rainfall probability trend" />
        </div>

        <div className="panel chartPanel">
          <div className="panelHead">
            <div>
              <h3>{hi ? "7-दिन तापमान ट्रेंड" : "7-day temperature trend"}</h3>
              <p>{hi ? "Panchayat forecast temperature" : "Panchayat forecast temperature"}</p>
            </div>
            <span className="chartLegend"><i className="tempDot" /> Temperature</span>
          </div>
          <LineChart data={temperatures} labels={forecastLabels} min={20} max={40} ySuffix="°C" title="7-day temperature trend" />
        </div>

        <div className="panel qualityPanel">
          <div className="panelHead">
            <div>
              <h3>{hi ? "डाउनस्केलिंग गुणवत्ता" : "Downscaling quality"}</h3>
              <p>{hi ? "Prototype model monitoring" : "Prototype model monitoring"}</p>
            </div>
            <span className="qualityScore">89.0% avg</span>
          </div>
          <BarChart rows={quality} />
        </div>
      </div>
    </div>
  );
}
