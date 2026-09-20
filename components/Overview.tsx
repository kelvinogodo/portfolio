import type { CSSProperties } from "react";
import type { Entry } from "@/data/entries";

const step = (i: number) => ({ ["--i" as string]: i }) as CSSProperties;

export default function Overview({ entries }: { entries: Entry[] }) {
  return (
    <section className="band overview" id="overview" aria-labelledby="t-overview">
      <div className="col">
        <div className="ov-head">
          <h2 id="t-overview">Overview</h2>
          <p>
            {entries.length} entries in the record. Select one to jump straight to it.
          </p>
        </div>

        <ol className="ov-list" data-reveal>
          {entries.map((e, i) => (
            <li key={e.id} className="rv" style={step(Math.min(i, 6))}>
              <a className="ov-row" href={`#entry-${e.id}`}>
                <span className="ov-num">{e.id}</span>
                <span className="ov-main">
                  <span className="ov-title">{e.title}</span>
                  <span className="ov-summary">{e.summary}</span>
                </span>
                <span className="ov-tag">{e.tag}</span>
                <span className={e.hasLive ? "ov-live" : "ov-live none"}>{e.hasLive ? "Live" : "No live link"}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
