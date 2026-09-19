import type { CSSProperties } from "react";
import type { Entry } from "@/data/entries";

const step = (i: number) => ({ ["--i" as string]: i }) as CSSProperties;

export default function EntryBlock({ entry }: { entry: Entry }) {
  const liveLinks = entry.fields.filter((f) => f.href);
  const fields = entry.fields.filter((f) => !f.href);

  return (
    <section className="entry" id={`entry-${entry.id}`} aria-labelledby={`t-${entry.id}`}>
      <div className="entry-head" data-reveal>
        <div>
          <p className="entry-label rv" style={step(0)}>
            ENTRY {entry.id}
          </p>
          <h2 id={`t-${entry.id}`} className="rv" style={step(1)}>
            {entry.title}
          </h2>
        </div>
        <div className="numeral rv" style={step(2)} aria-hidden="true">
          {entry.id}
        </div>
      </div>

      {entry.strip && (
        <div className="strip" data-reveal>
          {entry.strip.map((c, i) => (
            <div className="cell rv" key={c.label} style={step(i)}>
              <p className="cell-label">{c.label}</p>
              <p className="cell-value">{c.value}</p>
            </div>
          ))}
        </div>
      )}

      <div className="body" data-reveal>
        <div className="prose rv" style={step(0)}>
          {entry.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {entry.notice && (
            <div className="notice">
              <span className="tag">{entry.notice.tag}</span>
              <p>{entry.notice.text}</p>
            </div>
          )}

          {liveLinks.length > 0 && (
            <div className="actions">
              {liveLinks.map((f) => (
                <div className="action" key={f.label}>
                  <p className="action-label">{f.label}</p>
                  <a className="btn" href={f.href} target="_blank" rel="noopener noreferrer">
                    {f.value}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        <dl className="fields">
          {fields.map((f, i) => (
            <div className="field rv" key={f.label} style={step(i + 1)}>
              <dt>{f.label}</dt>
              <dd className={f.kind === "plain" ? "plain" : f.kind === "private" ? "plain private" : undefined}>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {entry.flow && (
        <div className="flow-wrap" data-reveal>
          <p className="flow-title">Enrollment path, field to backend</p>
          <div className="flow">
            {entry.flow.map((s, i) => (
              <div className="stage rv" key={s.title} style={step(i + 1)}>
                <h3>{s.title}</h3>
                <p className="where">{s.where}</p>
                <ul>
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
