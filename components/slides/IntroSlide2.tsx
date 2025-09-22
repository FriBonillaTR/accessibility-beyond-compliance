export default function IntroSlide2() {
  const steps = [
    "Compliance - Meets standards",
    "Usability - Works well for real users",
    "Adaptability - Responds to diverse contexts",
    "Empathy - Considers lived experience",
    "Inclusion - Welcomes everyone by design",
  ];

  return (
    <section className="content-slide">
      <style>{`
        .content-slide {
          padding: 2rem;
          font-family: Arial, sans-serif;
          color: #333;
        }

        .slide-header h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }

        .progress-bar {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .progress-step {
          flex: 1;
          background-color: #f0f0f0;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .step-number {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .step-label {
          font-size: 1rem;
        }

        .description {
          font-size: 1rem;
          margin-top: 1rem;
        }
      `}</style>
      <main className="intro-slide-2">
        <header className="slide-header">
          <h2>“Accessibility is not a finish line—it’s a starting point.”</h2>
        </header>
        <div className="progress-bar">
          {steps.map((step, index) => (
            <div key={index} className="progress-step">
              <div className="step-number">{index + 1}</div>
              <div className="step-label">{step}</div>
            </div>
          ))}
        </div>
        <p className="description">
          This visualization highlights accessibility as a journey of growth and
          evolution—not just a checkbox.
        </p>
      </main>
      <aside className="notes">
        Accessibility gives us a solid foundation—but it’s not the finish line.
        It helps us build with structure, consistency, and a shared language.
        It’s where many teams begin, and rightly so. But if we stop there, we
        risk designing for standards instead of for people. The next steps
        aren’t fixed. They emerge from how well we meet people where they
        are—across needs, contexts, and edge cases. That’s where the real work
        begins: not just checking boxes, but asking deeper questions. “Does this
        actually work for the multiple persons using it?” This question invites
        us to shift our mindset—from compliance to care, from rules to
        relationships. It’s not about abandoning standards, but about
        recognizing their limits. As we move forward, we’ll explore what happens
        when we rely solely on guidelines—and why that might not be enough.
      </aside>
    </section>
  );
}
