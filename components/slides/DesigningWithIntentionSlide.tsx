export default function DesigningWithIntentionSlide() {
  return (
    <section className="content-slide section-divider" data-background-color="#FF6200">
      <header className="slide-header">
        <h2>Designing with Intention</h2>
        <p className="section-subtitle">Shifting from checklists to conscious, inclusive design decisions</p>
      </header>

      <main>
        <section aria-labelledby="intentional-practices">
          <h3 id="intentional-practices">Intentional Practices</h3>
          <ul className="key-points" role="list">
            <li>
              <strong>Start with empathy</strong> – Understand the lived experiences of your users through research, not
              assumptions.
            </li>
            <li>
              <strong>Design for flexibility</strong> – Create systems that can adapt to different needs rather than
              fixed solutions.
            </li>
            <li>
              <strong>Include diverse voices</strong> – Involve people with disabilities in your design process from the
              beginning.
            </li>
            <li>
              <strong>Test with real users</strong> – Automated tools catch some issues, but human testing reveals the
              real experience.
            </li>
          </ul>
        </section>

        <section aria-labelledby="mindset-shift">
          <h3 id="mindset-shift">The Mindset Shift</h3>
          <div
            className="comparison-grid"
            role="region"
            aria-label="Comparison between compliance and intentional design"
          >
            <div className="comparison-item">
              <h4>From Compliance Thinking:</h4>
              <p>"What do we need to do to pass the audit?"</p>
            </div>
            <div className="comparison-item">
              <h4>To Intentional Design:</h4>
              <p>"How can we create experiences that work for everyone?"</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="sustainable-accessibility">
          <h3 id="sustainable-accessibility">Sustainable Accessibility</h3>
          <blockquote>
            "Accessibility isn't a feature you add at the end—it's a lens through which you view every design decision."
          </blockquote>
        </section>
      </main>
    </section>
  )
}
