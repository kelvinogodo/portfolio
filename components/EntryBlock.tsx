import type { Entry } from "@/data/entries";

export default function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <section className="entry" id={`entry-${entry.id}`} aria-labelledby={`t-${entry.id}`}>
      <div className="entry-head">
        <div>
          <p className="entry-label">ENTRY {entry.id}</p>
          <h2 id={`t-${entry.id}`}>{entry.title}</h2>
        </div>
        <div className="numeral" aria-hidden="true">
          {entry.id}
        </div>
      </div>

      {entry.strip && (
        <div className="strip">
          {entry.strip.map((c) => (
            <div className="cell" key={c.label}>
              <p className="cell-label">{c.label}</p>
              <p className="cell-value">{c.value}</p>
            </div>
          ))}
        </div>
      )}

      <div className="body">
        <div className="prose">
          {entry.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {entry.notice && (
            <div className="notice">
              <span className="tag">{entry.notice.tag}</span>
              <p>{entry.notice.text}</p>
            </div>
          )}
        </div>

        <dl className="fields">
          {entry.fields.map((f) => (
            <div className="field" key={f.label}>
              <dt>{f.label}</dt>
              <dd className={f.kind === "plain" ? "plain" : f.kind === "private" ? "plain private" : undefined}>
                {f.href ? (
                  <a href={f.href} rel="noopener">
                    {f.value}
                  </a>
                ) : (
                  f.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {entry.flow && (
        <div className="flow-wrap">
          <p className="flow-title">Enrollment path, field to backend</p>
          <div className="flow">
            {entry.flow.map((s) => (
              <div className="stage" key={s.title}>
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
