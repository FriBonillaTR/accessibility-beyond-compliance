import React from "react";

const timelineData2 = [
  {
    year: "2018",
    title: "WCAG 2.1 (June 2018)",
    focus:
      "An incremental update to WCAG 2.0, adding new success criteria to address emerging technologies and user needs, particularly for mobile accessibility and cognitive disabilities.",
    keyIdea:
      "Maintained the WCAG 2.0 structure but included 17 new success criteria.",
  },
  {
    year: "2023",
    title: "WCAG 2.2 (October 2023)",
    focus:
      "Another incremental update to WCAG 2.1, adding nine new success criteria primarily to address the needs of users with cognitive disabilities, low vision, and users of mobile devices. One success criterion from a previous draft was removed.",
    keyIdea:
      "Builds upon WCAG 2.1's foundation, refining and expanding accessibility requirements.",
  },
];

export default function LimitsOfComplianceSlide3() {
  return (
    <section className="content-slide section-divider timeline-slide">
      <header className="slide-header">
        <h2>WCAG Timeline (2018–2023)</h2>
      </header>
      <main>
        <div className="timeline-graphic" aria-label="WCAG timeline graphic">
          <ol className="timeline-list" role="list">
            {timelineData2.map((item, idx) => (
              <li
                className={`timeline-item${idx === timelineData2.length - 1 ? " timeline-item-last" : ""}`}
                key={item.year}
              >
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-line" aria-hidden="true" />
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <ul className="key-points" role="list">
                    <li>
                      <strong>Focus:</strong> {item.focus}
                    </li>
                    <li>
                      <strong>Key Idea:</strong> {item.keyIdea}
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </main>
    </section>
  );
}
