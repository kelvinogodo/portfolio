import EntryBlock from "@/components/EntryBlock";
import IndexRail from "@/components/IndexRail";
import Ridges from "@/components/Ridges";
import { CONTACT_EMAIL, CV_FILENAME, CV_PATH, GITHUB, entries, throughline } from "@/data/entries";

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

        {entries.map((e, i) => (
          <div className={i % 2 === 1 ? "band dark" : "band"} key={e.id}>
            <div className="col">
              <EntryBlock entry={e} />
            </div>
          </div>
        ))}

        <div className="band dark">
          <div className="col">
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
        </div>
      </main>
    </div>
  );
}
