export default function IntroSlide2() {
  const steps = [
    "Compliance - Meets standards",
    "Usability - Works well for real users",
    "Adaptability - Responds to diverse contexts",
    "Empathy - Considers lived experience",
    "Inclusion - Welcomes everyone by design",
  ];

  return (
    <section className="content-slide" data-background-color="#FFFFFF">
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
    </section>
  );
}
