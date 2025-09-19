export default function AccessibilityMeetsIdentitySlide4() {
  return (
    <section className="content-slide section-divider">
      <style>{`
        main.a11y-meets-identity-slide-4 {
          display: flex;
          flex-direction: row;
          gap: 2rem;
        }
      `}</style>
      <main className="a11y-meets-identity-slide-4">
        <div aria-labelledby="intersectional-design">
          <h2>Hypothetical Examples</h2>
          <ul className="key-points" role="list">
            <li>Using voice control with an accent</li>
            <li>Deafblind person</li>
          </ul>
        </div>
        <div className="container">
          <h2>Real-world example</h2>
          <div aria-labelledby="intersectional-design">
            <ul className="key-points" role="list">
              <li>EMDR and PTSD/epilepsy</li>
              <li>Two identities affecting each other</li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
}
