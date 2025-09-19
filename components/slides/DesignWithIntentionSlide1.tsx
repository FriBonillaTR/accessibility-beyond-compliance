export default function DesignWithIntentionSlide1() {
  return (
    <section className="content-slide section-divider">
      <header className="slide-header">
        <h2>Accessible design is not WCAG</h2>
      </header>

      <main className="design-with-intention-slide-1">
        <div aria-labelledby="intersectional-design">
          <p>Guidelines are the first step towards meeting WCAG</p>
          <ul className="key-points" role="list">
            <li>
              Accessible describes the ability of a person with any given
              impairment or disability to access information or complete a task.
            </li>
            <li>
              Guidelines can only ever provide guard rails.
              <ul>
                <li>
                  It is the job of designers to work within these guidelines and
                  consider all users.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
}
