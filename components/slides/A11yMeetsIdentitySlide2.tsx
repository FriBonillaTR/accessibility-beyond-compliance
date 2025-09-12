export default function AccessibilityMeetsIdentitySlide2() {
  return (
    <section
      className="content-slide section-divider"
      data-background-color="#1C4E80"
    >
      <header className="slide-header">
        <h2>Brief Definition of Intersectionality</h2>
      </header>

      <main>
        <div aria-labelledby="intersectional-design">
          <ul className="key-points" role="list">
            <li>
              This thinking doesn’t account for the ways that aspects can
              overlap and affect each other
              <ul>
                <li>A person with A and B is AB—the experience is unique</li>
              </ul>
            </li>
            <li>
              This concept is called “intersectionality”
              <ul>
                <li>
                  Each layer of identity compounds to create a new experience
                </li>
                <li>
                  Intersectionality isn’t trying to debate who has it “worse”,
                  just acknowledge the unique experiences and challenges of how
                  identities overlap
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
}
