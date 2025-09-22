export default function IntroSlide2() {
  const steps = ["Accessibility", "?", "?", "?", "?"];

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
        recognizing their limits. Let’s consider a scenario: An elderly
        user—perhaps a retired judge or senior legal consultant—is trying to
        access one of our platforms. The interface meets all accessibility
        standards, but the font is small, the navigation is dense, and the usage
        is overly technical. Technically, it’s accessible. Practically, it’s
        frustrating. Now imagine this same user also speaks English as a second
        language. The experience becomes even more challenging—not because of a
        lack of effort, but because the design didn’t account for the full
        context of the user. Accessibility isn’t just about disability. It’s
        about designing for the full range of human experience. Our users bring
        with them layers of identity: age, language, gender, neurodiversity,
        cultural background—and these layers shape how they interact with our
        products. When we treat accessibility as a mindset, we begin to design
        with empathy—not just for compliance, but for care. And that mindset
        helps us build tools that are not only usable, but empowering. This
        brings us to our first idea: The Limits of Compliance.
      </aside>
    </section>
  );
}
