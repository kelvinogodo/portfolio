"use client";

import { useEffect, useState } from "react";

export default function IndexRail({ ids }: { ids: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(`entry-${id}`))
      .filter((el): el is HTMLElement => el !== null);

    // Active entry = the last one whose top has passed the upper third of the viewport.
    const update = () => {
      const line = window.innerHeight * 0.33;
      let current = -1;
      targets.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= line) current = i;
      });
      setActive(Math.max(current, 0));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return (
    <>
      <div className="marker" aria-hidden="true">
        <div className="marker-fill" style={{ width: `${((active + 1) / ids.length) * 100}%` }} />
      </div>

      <nav className="rail" aria-label="Index">
        <p className="rail-label">IDX</p>
        <ol>
          {ids.map((id, i) => (
            <li key={id}>
              <a href={`#entry-${id}`} aria-current={i === active ? "true" : undefined}>
                {id}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
