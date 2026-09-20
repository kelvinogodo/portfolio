"use client";

import { useEffect, useState } from "react";

type Item = { id: string; short: string; tag: string };

const CONTACT = -2;

export default function IndexRail({ items, cvPath, cvFilename }: { items: Item[]; cvPath: string; cvFilename: string }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const targets = items.map((it) => document.getElementById(`entry-${it.id}`));
    const contactEl = document.getElementById("contact");
    let lastHash = "";

    // Active entry = the last one whose top has passed the upper third of the viewport.
    const update = () => {
      const line = window.innerHeight * 0.33;
      let current = -1;
      targets.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= line) current = i;
      });
      if (contactEl && contactEl.getBoundingClientRect().top <= line) current = CONTACT;

      // items.length means "past the last entry, in Contact": nothing in the rail is highlighted.
      setActive(current === CONTACT ? items.length : current === -1 ? 0 : current);
      setShowTop(window.scrollY > 1400);

      // Keep the address bar in step so any entry can be shared as a deep link.
      const scrolled = window.scrollY > 320;
      const hash = !scrolled ? "" : current === CONTACT ? "#contact" : current >= 0 ? `#entry-${items[current].id}` : "";
      if (hash !== lastHash) {
        lastHash = hash;
        try {
          history.replaceState(null, "", hash || window.location.pathname + window.location.search);
        } catch {
          /* ignore */
        }
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  // Menu: close on Escape, lock page scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const inContact = active === items.length;
  const currentLabel = inContact ? "End" : items[active].id;
  const progress = inContact ? 100 : ((active + 1) / items.length) * 100;

  return (
    <>
      {/* Phone: fixed bar with menu, Contact and CV always in reach */}
      <div className="topbar">
        <button
          type="button"
          className="topbar-menu"
          aria-expanded={open}
          aria-controls="mobile-index"
          onClick={() => setOpen((o) => !o)}
        >
          <span>IDX</span>
          <span className="topbar-current">{currentLabel}</span>
        </button>
        <div className="topbar-links">
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
          <a href={cvPath} download={cvFilename}>
            CV
          </a>
        </div>
        <div className="marker" aria-hidden="true">
          <div className="marker-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {open && (
        <nav className="sheet" id="mobile-index" aria-label="Index">
          <ol>
            {items.map((it, i) => (
              <li key={it.id}>
                <a
                  href={`#entry-${it.id}`}
                  aria-current={i === active ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="sheet-num">{it.id}</span>
                  <span className="sheet-name">{it.short}</span>
                  <span className="sheet-tag">{it.tag}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Desktop: sticky rail */}
      <nav className="rail" aria-label="Index">
        <p className="rail-label">IDX</p>
        <ol>
          {items.map((it, i) => (
            <li key={it.id}>
              <a href={`#entry-${it.id}`} aria-current={i === active ? "true" : undefined}>
                <span className="rail-num">{it.id}</span>
                <span className="rail-name">{it.short}</span>
              </a>
            </li>
          ))}
        </ol>
        <div className="rail-foot">
          <a href="#contact">Contact</a>
          <a href={cvPath} download={cvFilename}>
            CV
          </a>
        </div>
      </nav>

      <button
        type="button"
        className={showTop ? "to-top show" : "to-top"}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0 })}
        tabIndex={showTop ? 0 : -1}
      >
        Top
      </button>
    </>
  );
}
