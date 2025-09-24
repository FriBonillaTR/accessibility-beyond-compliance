export default function LimitsOfComplianceSlide4() {
  return (
    <section className="content-slide section-divider">
      <header className="slide-header">
        <h2>Accessibility and the Law​</h2>
      </header>

      <main>
        <div aria-labelledby="compliance-challenges">
          <ul className="key-points" role="list">
            <li>
              Conformance Levels (A, AA, AAA)​
              <ul>
                <li>Most a11y laws are based on WCAG 2.0/.1 AA​</li>
                <li>
                  “AAA is where Success Criteria go to die” – Patrick H. Lauke​
                </li>
              </ul>
            </li>
            <li>
              International Accessibility Laws​
              <ul>
                <li>AODA / ADA / Section 508 / EAA​​</li>
                <li>
                  Non-conformance runs the risk of lawsuits, huge fines, bad
                  PR​​
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
}
