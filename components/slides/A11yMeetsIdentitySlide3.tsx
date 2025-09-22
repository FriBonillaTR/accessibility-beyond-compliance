export default function AccessibilityMeetsIdentitySlide3() {
  return (
    <section className="content-slide section-divider">
      <header className="slide-header">
        <h2>Venn Diagram</h2>
      </header>

      <main className="a11y-meets-identity-slide-3">
        <div className="container">
          <img
            src="/accessibility-beyond-compliance/images/venn-diagram-gender-ethnicity-disability.png"
            alt="Venn diagram showing the overlap between gender, ethnicity, and disability"
            className="max-w-full max-h-96 object-contain rounded-lg shadow-lg cursor-pointer"
            data-preview-image="/images/venn-diagram-gender-ethnicity-disability.png"
          />
        </div>
        <p>
          Each circle represents an identity. Each overlap represents the unique
          experience of having those identities together
        </p>
      </main>
    </section>
  );
}
