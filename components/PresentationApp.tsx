"use client";

import { useEffect, useRef, useState } from "react";

export default function PresentationApp() {
  const deckRef = useRef<HTMLDivElement>(null);
  const deckInstanceRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(6);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReveal = async () => {
      try {
        console.log("[v0] Starting Reveal.js initialization...");
        setIsLoading(true);

        const { default: Reveal } = await import("reveal.js");
        console.log("[v0] Reveal.js imported successfully");

        if (deckRef.current) {
          const prefersReducedMotion =
            typeof window !== "undefined"
              ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
              : false;

          const deck = new Reveal(deckRef.current, {
            hash: true,
            keyboard: {
              13: "next", // Enter
              32: "next", // Space
              37: "left", // Left arrow
              38: "up", // Up arrow
              39: "right", // Right arrow
              40: "down", // Down arrow
            },
            touch: true,
            loop: false,
            transition: prefersReducedMotion ? "none" : "slide",
            transitionSpeed: prefersReducedMotion ? 0 : "default",
            controls: true,
            progress: true,
            center: true,
            viewDistance: 3,
            mobileViewDistance: 2,
            theme: null,
            plugins: [],
          });

          console.log("[v0] Reveal.js deck created, initializing...");
          await deck.initialize();
          deckInstanceRef.current = deck;
          console.log("[v0] Reveal.js initialized successfully");

          console.log("[v0] Setting isLoading to false...");
          setIsInitialized(true);
          setIsLoading(false);
          console.log("[v0] Loading state updated");

          const slides = deckRef.current?.querySelectorAll(".slides section");
          console.log("[v0] Found slides:", slides?.length);
          slides?.forEach((slide, index) => {
            slide.setAttribute("role", "tabpanel");
            slide.setAttribute(
              "aria-label",
              `Slide ${index + 1} of ${slides.length}`
            );
            slide.setAttribute("tabindex", "-1");
          });

          deck.on("slidechanged", (event) => {
            console.log("[v0] Slide changed to:", event.indexh);
            setCurrentSlide(event.indexh);
          });
        }
      } catch (err) {
        console.error("[v0] Failed to load Reveal.js:", err);
        setError("Failed to load presentation library");
        setIsLoading(false);
      }
    };

    loadReveal();
  }, []);

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  const announceHelp = () => {
    const helpText =
      "Keyboard navigation: Use arrow keys, space, or enter to navigate slides. Press H for help, Escape to focus current slide.";
    announceToScreenReader(helpText);
  };

  const goToSlide = (slideIndex: number) => {
    if (deckInstanceRef.current && isInitialized) {
      deckInstanceRef.current.slide(slideIndex);
    }
  };

  const nextSlide = () => {
    if (deckInstanceRef.current && isInitialized) {
      deckInstanceRef.current.next();
    }
  };

  const prevSlide = () => {
    if (deckInstanceRef.current && isInitialized) {
      deckInstanceRef.current.prev();
    }
  };

  console.log("[v0] Current loading state:", isLoading);
  console.log("[v0] Current initialized state:", isInitialized);

  if (isLoading) {
    console.log("[v0] Rendering loading screen");
    return (
      <div className="presentation-loading">
        <div
          className="loading-spinner"
          role="status"
          aria-label="Initializing presentation"
        >
          <span className="sr-only">Initializing presentation...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="presentation-error">
        <h1>Error Loading Presentation</h1>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="presentation-container">
      <header className="presentation-header" role="banner">
        <nav
          className="presentation-nav"
          role="navigation"
          aria-label="Presentation navigation"
        >
          <button
            className="help-button"
            onClick={announceHelp}
            aria-label="Get keyboard navigation help"
            title="Press H for keyboard help"
          >
            <span className="sr-only">Help</span>
            <span aria-hidden="true">?</span>
          </button>

          <div className="slide-counter" aria-live="polite" aria-atomic="true">
            <span className="sr-only">Currently viewing </span>
            Slide {currentSlide + 1} of {totalSlides}
          </div>

          <div className="nav-controls">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              aria-label="Go to previous slide"
              className="nav-button prev-button"
            >
              <span aria-hidden="true">‹</span>
              <span className="sr-only">Previous</span>
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              aria-label="Go to next slide"
              className="nav-button next-button"
            >
              <span aria-hidden="true">›</span>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </nav>
      </header>

      <div
        className="reveal"
        ref={deckRef}
        role="application"
        aria-label="Accessibility Beyond Compliance Presentation"
      >
        <div className="slides" role="main">
          <section>
            <h1>Accessibility Beyond Compliance</h1>
            <p>A mindset, not a checklist</p>
            <p className="author">Thomson Reuters Presentation</p>
          </section>

          <section>
            <h2>Overview</h2>
            <ul>
              <li>The Limits of Compliance</li>
              <li>Where Accessibility Meets Identity</li>
              <li>Designing with Intention</li>
            </ul>
          </section>

          <section>
            <h2>The Limits of Compliance</h2>
            <p>Compliance is the floor, not the ceiling</p>
            <ul>
              <li>WCAG guidelines are minimum standards</li>
              <li>Real accessibility requires understanding user needs</li>
              <li>Context matters more than checkboxes</li>
            </ul>
          </section>

          <section>
            <h2>Where Accessibility Meets Identity</h2>
            <p>Inclusive design reflects who we are</p>
            <ul>
              <li>Accessibility as a core value</li>
              <li>Building empathy into our process</li>
              <li>Creating experiences for everyone</li>
            </ul>
          </section>

          <section>
            <h2>Designing with Intention</h2>
            <p>Every decision impacts accessibility</p>
            <ul>
              <li>Consider accessibility from the start</li>
              <li>Test with real users</li>
              <li>Iterate based on feedback</li>
            </ul>
          </section>

          <section>
            <h2>Conclusion</h2>
            <p>
              Accessibility is not just about compliance—it's about creating
              inclusive experiences that work for everyone.
            </p>
            <p>Thank you</p>
          </section>
        </div>
      </div>

      <div
        className="sr-only"
        role="region"
        aria-label="Presentation instructions"
      >
        <h2>Navigation Instructions</h2>
        <p>This presentation can be navigated using:</p>
        <ul>
          <li>Arrow keys to move between slides</li>
          <li>Space bar or Enter to advance to next slide</li>
          <li>Tab to navigate interactive elements</li>
          <li>H key to hear navigation help</li>
          <li>Escape key to focus on current slide</li>
        </ul>
      </div>
    </div>
  );
}
