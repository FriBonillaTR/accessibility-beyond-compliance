export default function AccessibilityMeetsIdentitySlide3() {
  return (
    <section
      className="content-slide section-divider"
      data-background-color="#1C4E80"
    >
      <header className="slide-header">
        <h2>Venn Diagram</h2>
      </header>

      <main className="a11y-meets-identity">
        <div className="container">
          <img
            src="/images/venn-diagram-gender-ethnicity-disability.png"
            alt="Venn diagram showing the overlap between gender, ethnicity, and disability"
            className="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="container">
          <h3>Real-world example</h3>
          <div aria-labelledby="intersectional-design">
            <ul className="key-points" role="list">
              <li>EMDR and PTSD/epilepsy</li>
              <li>Epilepsy and being a woman in the US</li>
              <li>Two identities affecting each other</li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
}
