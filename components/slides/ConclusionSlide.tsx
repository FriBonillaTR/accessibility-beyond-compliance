export default function ConclusionSlide() {
  return (
    <section className="content-slide" data-background-color="#FFFFFF">
      <header className="slide-header">
        <h2>Accessibility as a Mindset</h2>
      </header>

      <main>
        <section aria-labelledby="key-takeaways">
          <h3 id="key-takeaways">Key Takeaways</h3>
          <ul className="key-points" role="list">
            <li>
              <strong>Compliance is just the beginning</strong> – True accessibility goes beyond meeting minimum
              standards.
            </li>
            <li>
              <strong>Identity matters</strong> – People's experiences are shaped by the intersection of their various
              identities and circumstances.
            </li>
            <li>
              <strong>Intention drives impact</strong> – Conscious, empathetic design decisions create more inclusive
              experiences.
            </li>
          </ul>
        </section>

        <section aria-labelledby="call-to-action">
          <h3 id="call-to-action">Moving Forward</h3>
          <blockquote>"Humanity has different shapes and edges—and so should our design practices."</blockquote>
          <p>
            When we embrace accessibility as a mindset rather than a checklist, we create digital experiences that truly
            serve the full spectrum of human diversity.
          </p>
        </section>

        <footer>
          <div className="contact-info">
            <h4>Thank You</h4>
            <p>Questions & Discussion</p>
            <p>Thomson Reuters Accessibility Team</p>
          </div>
        </footer>
      </main>
    </section>
  )
}
