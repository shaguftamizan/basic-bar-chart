import { useRef, useState } from "react";
import { scaleLinear, max } from "d3";
import { data } from "./data.js";

// D3 is used only for the math: a scale that maps students to a
// percentage width, and the tick values for the axis and gridlines.
const x = scaleLinear()
  .domain([0, max(data, (d) => d.students)])
  .nice()
  .range([0, 100]);
const ticks = x.ticks(7);

export default function BarChart() {
  const chartRef = useRef(null);
  const [tip, setTip] = useState(null);

  function show(e, d, fromFocus) {
    const box = chartRef.current.getBoundingClientRect();
    const bar = e.currentTarget.querySelector(".bar").getBoundingClientRect();
    setTip({
      n: d.students,
      x: fromFocus ? bar.left - box.left + bar.width / 2 : e.clientX - box.left,
      y: bar.top - box.top,
    });
  }

  return (
    <div className="chart" ref={chartRef}>
      <div className="plot">
        <div className="grid" aria-hidden="true">
          {ticks.map((t) => (
            <i key={t} style={{ left: `${x(t)}%` }} />
          ))}
        </div>

        {data.map((d) => (
          <div
            className="row"
            key={d.country}
            tabIndex={0}
            aria-label={`${d.country}: ${d.students} students`}
            onMouseEnter={(e) => show(e, d, false)}
            onMouseMove={(e) => show(e, d, false)}
            onMouseLeave={() => setTip(null)}
            onFocus={(e) => show(e, d, true)}
            onBlur={() => setTip(null)}
          >
            <span className="name">{d.country}</span>
            <span className="count">{d.students}</span>
            <div className="track">
              <div className="bar" style={{ width: `${x(d.students)}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="axis" aria-hidden="true">
        {ticks.map((t) => (
          <span key={t} style={{ left: `${x(t)}%` }}>{t}</span>
        ))}
      </div>
      <p className="axis-title">Students</p>

      {tip && (
        <div className="tooltip" style={{ left: tip.x, top: tip.y }}>
          {tip.n}
        </div>
      )}
    </div>
  );
}
