export default function LimitsOfComplianceSlide() {
  return (
    <section className="content-slide section-divider" data-background-color="#0D2C54">
      <header className="slide-header">
        <h2>The Limits of Compliance</h2>
        <p className="section-subtitle">Following rules doesn't always mean including people</p>
      </header>

      <main>
        <section aria-labelledby="compliance-challenges">
          <h3 id="compliance-challenges">Beyond Checkboxes</h3>
          <ul className="key-points" role="list">
            <li>
              <strong>Technical compliance vs. real usability</strong> – A site can pass automated tests but still be
              unusable for many people.
            </li>
            <li>
              <strong>One-size-fits-all solutions</strong> – WCAG guidelines provide a foundation, but they can't
              address every individual need.
            </li>
            <li>
              <strong>The gap between standards and lived experience</strong> – Real users have complex, intersectional
              needs that go beyond technical requirements.
            </li>
          </ul>
        </section>

        <section aria-labelledby="real-world-impact">
          <h3 id="real-world-impact">Real-World Impact</h3>
          <blockquote>
            "Compliance is the floor, not the ceiling. True accessibility happens when we design for the full spectrum
            of human diversity."
          </blockquote>
        </section>

        <section aria-labelledby="moving-forward">
          <h3 id="moving-forward">Moving Forward</h3>
          <p>
            We need to shift from asking "Does this meet the standard?" to "Does this work for real people in real
            situations?"
          </p>
        </section>
      </main>
    </section>
  )
}
