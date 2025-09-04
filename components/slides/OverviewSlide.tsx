export default function OverviewSlide() {
  return (
    <section className="content-slide" data-background-color="#FFFFFF">
      <header className="slide-header">
        <h2>Overview</h2>
      </header>

      <main>
        <p>
          We live in a world where people experience technology in vastly different ways. Some navigate with a keyboard,
          others with a screen reader. Some speak multiple languages, some none. Some are young, old, trans, Deaf,
          neurodivergent, or all of the above.
        </p>

        <p>
          In this talk, we'll explore how accessibility is not just a technical requirement—it's a reflection of our
          values. It's personal, ethical, and cultural.
        </p>

        <section aria-labelledby="three-ideas">
          <h3 id="three-ideas">Three Interconnected Ideas</h3>
          <ol className="key-points" role="list">
            <li>
              <strong>The Limits of Compliance</strong> – where we'll look at how following the rules doesn't always
              mean we're including people.
            </li>
            <li>
              <strong>Accessibility Meets Identity</strong> – where we'll explore how ability intersects with gender,
              race, language, and more.
            </li>
            <li>
              <strong>Designing with Intention</strong> – where we'll shift from checklists to conscious, inclusive
              design decisions.
            </li>
          </ol>
        </section>

        <footer>
          <p>
            <em>
              Together, these ideas form a bigger picture: that accessibility is not a checkbox—it's a mindset. And when
              we design with that mindset, we don't just meet standards—we meet people where they are.
            </em>
          </p>
        </footer>
      </main>
    </section>
  )
}
