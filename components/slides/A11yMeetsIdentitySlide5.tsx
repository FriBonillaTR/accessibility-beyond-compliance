export default function AccessibilityMeetsIdentitySlide5() {
  return (
    <section className="content-slide section-divider">
      <header className="slide-header">
        <h2>Wrapping it all up</h2>
      </header>

      <main className="a11y-meets-identity-slide-5">
        <div className="quote-block">
          <p className="quote-text">
            “There is no such thing as a single-issue struggle because we do not
            live single-issue lives.”
          </p>
          <p className="quote-attribution">— Audre Lorde</p>
        </div>

        <div aria-labelledby="intersectional-design">
          <ul className="key-points" role="list">
            <li>Acknowledge that our assumptions will not include everyone</li>
            <li>Do research—include a variety of perspectives</li>
            <li>Be prepared to be wrong</li>
          </ul>
        </div>
      </main>
    </section>
  );
}
