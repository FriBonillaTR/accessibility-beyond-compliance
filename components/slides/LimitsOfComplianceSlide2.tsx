import React from "react";

const timelineData1 = [
  {
    year: "1999",
    title: "WCAG 1.0 (May 1999)",
    focus:
      "Primarily addressed the needs of web content accessibility in the early days of the internet. It was based on HTML 4 and CSS 1.",
    keyIdea:
      "Provided 14 guidelines organized into three priority levels to ensure web content was accessible.",
  },
  {
    year: "2008",
    title: "WCAG 2.0 (December 2008)",
    focus:
      "Broader in scope, aiming to be technology-neutral and applicable to a wider range of web technologies.",
    keyIdea:
      "Introduced the POUR principles (Perceivable, Operable, Understandable, Robust) as a foundational framework for accessibility. It also moved to success criteria organized by these principles, with three conformance levels (A, AA, AAA).",
  },
];

export default function LimitsOfComplianceSlide2() {
  return (
    <section className="content-slide section-divider timeline-slide">
      <header className="slide-header">
        <h2>WCAG Timeline (1999–2008)</h2>
      </header>
      <main>
        <div className="timeline-graphic" aria-label="WCAG timeline graphic">
          <ol className="timeline-list" role="list">
            {timelineData1.map((item, idx) => (
              <li
                className={`timeline-item${idx === timelineData1.length - 1 ? " timeline-item-last" : ""}`}
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
