export default function TitleSlide() {
  return (
    <section className="title-slide" data-transition="slide">
      <header>
        <h1>“Accessibility Beyond Compliance: A Holistic Lookout”</h1>
      </header>

      <main className="title-slide">
        <div className="presenter-info">
          <p>Presentation by:</p>
        </div>
        <div
          className="presenter-avatars"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          {/* Replace src with actual images if available */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/accessibility-beyond-compliance/placeholder-user.jpg"
              alt="Fri Bonilla"
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #d64000",
              }}
            />
            <span style={{ marginTop: 8, fontWeight: 500 }}>Fri Bonilla</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/accessibility-beyond-compliance/placeholder-user.jpg"
              alt="Anthony Owide"
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #d64000",
              }}
            />
            <span style={{ marginTop: 8, fontWeight: 500 }}>Anthony Owide</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/accessibility-beyond-compliance/placeholder-user.jpg"
              alt="Jen DeMesquita"
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #d64000",
              }}
            />
            <span style={{ marginTop: 8, fontWeight: 500 }}>
              Jen DeMesquita
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/accessibility-beyond-compliance/placeholder-user.jpg"
              alt="Devon West"
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #d64000",
              }}
            />
            <span style={{ marginTop: 8, fontWeight: 500 }}>Devon West</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/accessibility-beyond-compliance/placeholder-user.jpg"
              alt="Phil Springhall"
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #d64000",
              }}
            />
            <span style={{ marginTop: 8, fontWeight: 500 }}>
              Phil Springhall
            </span>
          </div>
        </div>
      </main>
      <aside className="notes">
        Accessibility is already part of our process. Across our legal and tax
        products, we’ve built strong foundations—thanks to the work of our
        Accessibility Specialists, UX Engineers, and product teams. Today, we’re
        not revisiting the basics. We’re here to reflect on how we evolve our
        mindset and improve our process. Because even in highly specialized
        fields, our users are not one-dimensional. They’re professionals,
        yes—but also people navigating diverse realities. A tax advisor working
        across jurisdictions in a second language. A legal researcher with ADHD
        reviewing dense case law. A judge accessing briefs on a mobile device in
        traffic. These examples show us that accessibility isn’t just about
        standards—it’s about people. So this talk is not a checklist. It’s a
        lookout—a moment to pause and ask: Are we designing for standards, or
        are we designing for the full reality of our users? To explore that
        question, we’ve structured this talk around three key ideas…
      </aside>
    </section>
  );
}
