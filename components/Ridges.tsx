// Generated fingerprint whorl. Computed on the server so the SVG ships static.
function buildRidges() {
  const count = 34;
  const paths: { d: string; delay: number }[] = [];

  for (let i = 0; i < count; i++) {
    const r = 26 + i * 10.4;
    const wob = 1 + (i % 5) * 0.4;
    const gapStart = (i * 37 + 200) % 360;
    const gapSize = 26 + (i % 4) * 14;
    const a0 = ((gapStart + gapSize) * Math.PI) / 180;
    const a1 = ((gapStart + 360) * Math.PI) / 180;
    const steps = 72;
    const pts: string[] = [];

    for (let s = 0; s <= steps; s++) {
      const a = a0 + (a1 - a0) * (s / steps);
      const rr = r + Math.sin(a * 3 + i) * wob + Math.cos(a * 2 - i * 0.5) * wob * 0.6;
      pts.push(`${(Math.cos(a) * rr * 0.86).toFixed(1)} ${(Math.sin(a) * rr * 1.04).toFixed(1)}`);
    }
    paths.push({ d: "M" + pts.join(" L"), delay: i * 28 });
  }
  return paths;
}

const ridges = buildRidges();

export default function Ridges() {
  return (
    <svg className="ridges" viewBox="-400 -400 800 800" aria-hidden="true">
      {ridges.map((p, i) => (
        <path key={i} d={p.d} pathLength={1} style={{ ["--d" as string]: p.delay }} />
      ))}
    </svg>
  );
}
