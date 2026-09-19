import EntryBlock from "@/components/EntryBlock";
import IndexRail from "@/components/IndexRail";
import Ridges from "@/components/Ridges";
import { CONTACT_EMAIL, CV_FILENAME, CV_PATH, GITHUB, entries, furtherRecord, throughline } from "@/data/entries";

export default function Home() {
  return (
    <div className="frame">
      <IndexRail ids={entries.map((e) => e.id)} />

      <main>
        <header className="identity">
          <Ridges />
          <div className="identity-inner">
            <p className="id-meta resolve" style={{ ["--i" as string]: 0 }}>
              <span>Identity record</span>
              <span>Mostly self taught since 2020</span>
              <span>{entries.length} entries</span>
            </p>
            <h1 className="resolve" style={{ ["--i" as string]: 1 }}>
              Kelvin Ogodo
            </h1>
            <p className="role-line resolve" style={{ ["--i" as string]: 2 }}>
              builder. engineer. founder.
            </p>
            <p className="throughline resolve" style={{ ["--i" as string]: 3 }}>
              {throughline}
            </p>
          </div>
        </header>

        <div className="col">
          {entries.map((e) => (
            <EntryBlock key={e.id} entry={e} />
          ))}

          <section className="entry" id="further-record" aria-labelledby="t-further">
            <div className="entry-head">
              <div>
                <p className="entry-label" id="t-further">
                  FURTHER RECORD
                </p>
              </div>
            </div>
            <ul className="record">
              {furtherRecord.map((r) => (
                <li key={r.text}>
                  <span className="record-text">{r.text}</span>
                  {r.link ? (
                    <a className="btn btn-sm" href={`https://${r.link}`} target="_blank" rel="noopener noreferrer">
                      {r.link}
                    </a>
                  ) : (
                    <span className="record-link none">No live link</span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className="entry" id="contact" aria-labelledby="t-contact">
            <div className="entry-head">
              <div>
                <p className="entry-label" id="t-contact">
                  CONTACT
                </p>
              </div>
            </div>
            <dl className="fields contact">
              <div className="field">
                <dt>Email</dt>
                <dd>
                  {CONTACT_EMAIL ? (
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  ) : (
                    <span className="pending">Address to be added</span>
                  )}
                </dd>
              </div>
              <div className="field">
                <dt>CV</dt>
                <dd>
                  <a href={CV_PATH} download>
                    {CV_FILENAME}
                  </a>
                </dd>
              </div>
              <div className="field">
                <dt>GitHub</dt>
                <dd>
                  <a href={`https://${GITHUB}`} rel="noopener">
                    {GITHUB}
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </main>
    </div>
  );
}
