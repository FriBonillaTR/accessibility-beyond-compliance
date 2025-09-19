export default function AccessibilityMeetsIdentitySlide1() {
  return (
    <section className="content-slide section-divider">
      <header className="slide-header">
        <h2>Accessibility Meets Identity</h2>
      </header>

      <main>
        <h3>Intro to the Concepts</h3>
        <div aria-labelledby="intersectional-design">
          <ul className="key-points" role="list">
            <li>
              It's easy to think that different aspects of ourselves are
              distinct parts of ourselves
              <ul>
                <li>A person with A and B is A + B</li>
              </ul>
            </li>
            <li>
              This thinking misses a lot—people are more than the sums of their
              parts
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
}
