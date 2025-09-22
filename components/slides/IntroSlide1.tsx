export default function IntroSlide1() {
  return (
    <section className="content-slide">
      <main className="intro-slide-1">
        <header className="slide-header">
          <h2>Agenda</h2>
        </header>
        <div
          className="intro-slide-1-cards"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          <div
            className="agenda-card fade-in-on-slide"
            style={{
              background: "#f2f2f2",
              border: "1px solid #e5e5e5",
              borderRadius: "1rem",
              padding: "2rem 1.5rem",
              minWidth: 220,
              maxWidth: 300,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              textAlign: "center",
              fontWeight: 600,
              fontSize: "1.2rem",
              opacity: 0,
              animation: "fadeInCard 1s ease forwards"
            }}
          >
            The Limits of Compliance
          </div>
          <div
            className="agenda-card fade-in-on-slide"
            style={{
              background: "#f2f2f2",
              border: "1px solid #e5e5e5",
              borderRadius: "1rem",
              padding: "2rem 1.5rem",
              minWidth: 220,
              maxWidth: 300,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              textAlign: "center",
              fontWeight: 600,
              fontSize: "1.2rem",
              opacity: 0,
              animation: "fadeInCard 1s 0.2s ease forwards"
            }}
          >
            Accessibility Meets Identity
          </div>
          <div
            className="agenda-card fade-in-on-slide"
            style={{
              background: "#f2f2f2",
              border: "1px solid #e5e5e5",
              borderRadius: "1rem",
              padding: "2rem 1.5rem",
              minWidth: 220,
              maxWidth: 300,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              textAlign: "center",
              fontWeight: 600,
              fontSize: "1.2rem",
              opacity: 0,
              animation: "fadeInCard 1s 0.4s ease forwards"
            }}
          >
            Designing with Intention
          </div>
        </div>
      </main>
      <aside className="notes">
        First, we’ll look at The Limits of Compliance—how following the rules
        doesn’t always mean we’re including people. Then we’ll explore
        Accessibility Meets Identity—how ability interacts with language, age,
        gender, and lived experience. And finally, we’ll discuss Designing with
        Intention—how we shift from checklists to conscious, inclusive design
        decisions. These aren’t rigid steps. They’re perspectives—ways to
        reflect on how we build, and who we build for. This is about mindset.
        About care. About designing with empathy, not just for compliance. Let’s
        begin with the foundation: Accessibility is not a finish line—it’s a
        starting point.
      </aside>
    </section>
  );
}
