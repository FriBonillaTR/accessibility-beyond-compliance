export default function AccessibilityMeetsIdentitySlide() {
  return (
    <section className="content-slide section-divider" data-background-color="#1C4E80">
      <header className="slide-header">
        <h2>Accessibility Meets Identity</h2>
        <p className="section-subtitle">How ability intersects with gender, race, language, and more</p>
      </header>

      <main>
        <section aria-labelledby="intersectional-design">
          <h3 id="intersectional-design">Intersectional Design</h3>
          <ul className="key-points" role="list">
            <li>
              <strong>Cultural context matters</strong> – Color meanings, reading patterns, and interaction expectations
              vary across cultures.
            </li>
            <li>
              <strong>Language and accessibility</strong> – Screen readers work differently across languages, and some
              assistive technologies have better support for certain languages.
            </li>
            <li>
              <strong>Socioeconomic factors</strong> – Access to newer devices, high-speed internet, and updated
              assistive technology varies significantly.
            </li>
            <li>
              <strong>Age and technology familiarity</strong> – Different generations have different mental models for
              how digital interfaces should work.
            </li>
          </ul>
        </section>

        <section aria-labelledby="inclusive-approach">
          <h3 id="inclusive-approach">An Inclusive Approach</h3>
          <blockquote>
            "When we design for disability, we often make things better for everyone. When we design for
            intersectionality, we make things better for real people."
          </blockquote>
        </section>

        <section aria-labelledby="practical-considerations">
          <h3 id="practical-considerations">Practical Considerations</h3>
          <p>
            Consider how a person who is Deaf, uses a screen reader, speaks English as a second language, and has
            limited internet bandwidth might experience your product. Each intersection creates new challenges and
            opportunities.
          </p>
        </section>
      </main>
    </section>
  )
}
