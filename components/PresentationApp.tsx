"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";

export default function PresentationApp() {
  const deckRef = useRef<HTMLDivElement>(null);
  const deckInstanceRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(6);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;
    setAnimationsEnabled(!prefersReducedMotion);
  }, []);

  useEffect(() => {
    const loadReveal = async () => {
      try {
        console.log("[v0] Starting Reveal.js initialization...");
        setIsLoading(true);

        const { default: Reveal } = await import("reveal.js");
        console.log("[v0] Reveal.js imported successfully");

        console.log("[v0] Checking deckRef.current:", deckRef.current);

        if (!deckRef.current) {
          console.log("[v0] deckRef.current is null, waiting for DOM...");
          await new Promise((resolve) => setTimeout(resolve, 100));
          console.log("[v0] After timeout, deckRef.current:", deckRef.current);
        }

        if (deckRef.current) {
          console.log(
            "[v0] DOM element found, proceeding with initialization..."
          );

          const deck = new Reveal(deckRef.current, {
            hash: true,
            keyboard: {
              37: "left", // Left arrow
              39: "right", // Right arrow
              38: () => {
                // Up arrow - go to first slide
                if (deckInstanceRef.current) {
                  deckInstanceRef.current.slide(0);
                  announceToScreenReader("Navigated to first slide");
                }
              },
              40: () => {
                // Down arrow - go to last slide
                if (deckInstanceRef.current) {
                  deckInstanceRef.current.slide(totalSlides - 1);
                  announceToScreenReader("Navigated to last slide");
                }
              },
              36: () => {
                // Home key - go to first slide
                if (deckInstanceRef.current) {
                  deckInstanceRef.current.slide(0);
                  announceToScreenReader("Navigated to first slide");
                }
              },
              35: () => {
                // End key - go to last slide
                if (deckInstanceRef.current) {
                  deckInstanceRef.current.slide(totalSlides - 1);
                  announceToScreenReader("Navigated to last slide");
                }
              },
              72: () => announceHelp(), // H key for help
              27: () => focusCurrentSlide(), // Escape to focus slide
              70: () => togglePresentationMode(), // F key for fullscreen/presentation mode
              65: () => toggleAnimations(), // A key to toggle animations
            },
            touch: true,
            loop: false,
            transition: animationsEnabled ? "slide" : "none",
            transitionSpeed: animationsEnabled ? "default" : 0,
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
            announceToScreenReader(
              `Slide ${event.indexh + 1} of ${totalSlides}`
            );
          });
        } else {
          console.error("[v0] deckRef.current is still null after timeout");
          throw new Error("Could not find presentation container element");
        }
      } catch (err) {
        console.error("[v0] Failed to load Reveal.js:", err);
        setError("Failed to load presentation library");
        setIsLoading(false);
      }
    };

    const timer = setTimeout(loadReveal, 50);
    return () => clearTimeout(timer);
  }, [animationsEnabled, totalSlides]);

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
      "Keyboard navigation: Arrow keys to navigate slides. Up arrow or Home for first slide, Down arrow or End for last slide. Space or Enter for next slide. F for presentation mode, A to toggle animations, Escape to focus current slide.";
    announceToScreenReader(helpText);
  };

  const focusCurrentSlide = () => {
    const currentSlideElement = deckRef.current?.querySelector(
      ".slides section.present"
    );
    if (currentSlideElement instanceof HTMLElement) {
      currentSlideElement.focus();
      announceToScreenReader("Focused on current slide");
    }
  };

  const togglePresentationMode = () => {
    setIsPresentationMode(!isPresentationMode);
    if (!isPresentationMode) {
      document.documentElement.requestFullscreen?.();
      announceToScreenReader("Entered presentation mode");
    } else {
      document.exitFullscreen?.();
      announceToScreenReader("Exited presentation mode");
    }
  };

  const toggleAnimations = () => {
    setAnimationsEnabled(!animationsEnabled);
    announceToScreenReader(
      animationsEnabled ? "Animations disabled" : "Animations enabled"
    );

    // Update Reveal.js configuration
    if (deckInstanceRef.current) {
      deckInstanceRef.current.configure({
        transition: !animationsEnabled ? "slide" : "none",
        transitionSpeed: !animationsEnabled ? "default" : 0,
      });
    }
  };

  const goToSlide = (slideIndex: number) => {
    if (deckInstanceRef.current && isInitialized) {
      deckInstanceRef.current.slide(slideIndex);
    }
  };

  const goToFirstSlide = () => {
    if (deckInstanceRef.current && isInitialized) {
      deckInstanceRef.current.slide(0);
      announceToScreenReader("Navigated to first slide");
    }
  };

  const goToLastSlide = () => {
    if (deckInstanceRef.current && isInitialized) {
      deckInstanceRef.current.slide(totalSlides - 1);
      announceToScreenReader("Navigated to last slide");
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

  const handleButtonClick =
    (action: () => void) => (event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      action();
    };

  const handleButtonKeyDown =
    (action: () => void) => (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        event.stopPropagation();
        action();
      }
    };

  console.log("[v0] Current loading state:", isLoading);
  console.log("[v0] Current initialized state:", isInitialized);

  return (
    <div
      className={`presentation-container ${
        isPresentationMode ? "presentation-mode" : ""
      }`}
    >
      <div
        className="reveal"
        ref={deckRef}
        role="application"
        aria-label="Accessibility Beyond Compliance Presentation"
        style={{ display: isLoading || error ? "none" : "block" }}
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

      {isLoading && (
        <div className="presentation-loading">
          <div
            className="loading-spinner"
            role="status"
            aria-label="Initializing presentation"
          >
            <span className="sr-only">Initializing presentation...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="presentation-error">
          <h1>Error Loading Presentation</h1>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {!isLoading && !error && (
        <>
          <header className="presentation-header" role="banner">
            <nav
              className="presentation-nav"
              role="navigation"
              aria-label="Presentation navigation"
            >
              <button
                className="info-button"
                onClick={handleButtonClick(() => setShowInfo(!showInfo))}
                onKeyDown={handleButtonKeyDown(() => setShowInfo(!showInfo))}
                aria-label="Show presentation information and keyboard shortcuts"
                aria-expanded={showInfo}
                title="Press for presentation info and keyboard shortcuts"
                tabIndex={0}
              >
                <span className="sr-only">Information</span>
                <span aria-hidden="true">ℹ</span>
              </button>

              <div
                className="slide-counter"
                aria-live="polite"
                aria-atomic="true"
              >
                <span className="sr-only">Currently viewing </span>
                Slide {currentSlide + 1} of {totalSlides}
              </div>

              <div className="nav-controls">
                <button
                  onClick={handleButtonClick(goToFirstSlide)}
                  onKeyDown={handleButtonKeyDown(goToFirstSlide)}
                  aria-label="Go to first slide (Up arrow or Home key)"
                  className="nav-button first-button"
                  title="First slide (↑ or Home)"
                  tabIndex={0}
                >
                  <span aria-hidden="true">⇈</span>
                  <span className="sr-only">First</span>
                </button>

                <button
                  onClick={handleButtonClick(prevSlide)}
                  onKeyDown={handleButtonKeyDown(prevSlide)}
                  disabled={currentSlide === 0}
                  aria-label="Go to previous slide (Left arrow key)"
                  className="nav-button prev-button"
                  title="Previous slide (←)"
                  tabIndex={0}
                >
                  <span aria-hidden="true">‹</span>
                  <span className="sr-only">Previous</span>
                </button>

                <button
                  onClick={handleButtonClick(nextSlide)}
                  onKeyDown={handleButtonKeyDown(nextSlide)}
                  disabled={currentSlide === totalSlides - 1}
                  aria-label="Go to next slide (Right arrow, Space, or Enter key)"
                  className="nav-button next-button"
                  title="Next slide (→, Space, or Enter)"
                  tabIndex={0}
                >
                  <span aria-hidden="true">›</span>
                  <span className="sr-only">Next</span>
                </button>

                <button
                  onClick={handleButtonClick(goToLastSlide)}
                  onKeyDown={handleButtonKeyDown(goToLastSlide)}
                  aria-label="Go to last slide (Down arrow or End key)"
                  className="nav-button last-button"
                  title="Last slide (↓ or End)"
                  tabIndex={0}
                >
                  <span aria-hidden="true">⇊</span>
                  <span className="sr-only">Last</span>
                </button>
              </div>

              <div className="accessibility-controls">
                <button
                  onClick={handleButtonClick(togglePresentationMode)}
                  onKeyDown={handleButtonKeyDown(togglePresentationMode)}
                  aria-label={
                    isPresentationMode
                      ? "Exit presentation mode"
                      : "Enter presentation mode (F key)"
                  }
                  className="control-button presentation-button"
                  title="Presentation mode (F)"
                  tabIndex={0}
                >
                  <span aria-hidden="true">
                    {isPresentationMode ? "⊡" : "⊞"}
                  </span>
                  <span className="sr-only">
                    {isPresentationMode ? "Exit" : "Present"}
                  </span>
                </button>

                <button
                  onClick={handleButtonClick(toggleAnimations)}
                  onKeyDown={handleButtonKeyDown(toggleAnimations)}
                  aria-label={
                    animationsEnabled
                      ? "Disable animations (A key)"
                      : "Enable animations (A key)"
                  }
                  className="control-button animation-button"
                  title="Toggle animations (A)"
                  tabIndex={0}
                >
                  <span aria-hidden="true">
                    {animationsEnabled ? "🎬" : "⏸"}
                  </span>
                  <span className="sr-only">
                    {animationsEnabled ? "Disable" : "Enable"} animations
                  </span>
                </button>
              </div>
            </nav>
          </header>

          {showInfo && (
            <div
              className="info-panel"
              role="dialog"
              aria-labelledby="info-title"
              aria-modal="false"
            >
              <div className="info-content">
                <h2 id="info-title">Presentation Information</h2>
                <div className="info-section">
                  <h3>Navigation</h3>
                  <ul>
                    <li>
                      <kbd>←</kbd> <kbd>→</kbd> Previous/Next slide
                    </li>
                    <li>
                      <kbd>↑</kbd> <kbd>Home</kbd> First slide
                    </li>
                    <li>
                      <kbd>↓</kbd> <kbd>End</kbd> Last slide
                    </li>
                    <li>
                      <kbd>Space</kbd> <kbd>Enter</kbd> Next slide
                    </li>
                  </ul>
                </div>
                <div className="info-section">
                  <h3>Controls</h3>
                  <ul>
                    <li>
                      <kbd>F</kbd> Toggle presentation mode
                    </li>
                    <li>
                      <kbd>A</kbd> Toggle animations
                    </li>
                    <li>
                      <kbd>H</kbd> Hear navigation help
                    </li>
                    <li>
                      <kbd>Esc</kbd> Focus current slide
                    </li>
                  </ul>
                </div>
                <div className="info-section">
                  <h3>Accessibility Features</h3>
                  <ul>
                    <li>Screen reader announcements for slide changes</li>
                    <li>Keyboard navigation support</li>
                    <li>Reduced motion respect</li>
                    <li>High contrast support</li>
                  </ul>
                </div>
                <button
                  onClick={handleButtonClick(() => setShowInfo(false))}
                  onKeyDown={handleButtonKeyDown(() => setShowInfo(false))}
                  className="close-info-button"
                  aria-label="Close information panel"
                  tabIndex={0}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div
            className="sr-only"
            role="region"
            aria-label="Presentation instructions"
          >
            <h2>Navigation Instructions</h2>
            <p>This presentation can be navigated using:</p>
            <ul>
              <li>
                Arrow keys to move between slides (Up/Home for first, Down/End
                for last)
              </li>
              <li>Space bar or Enter to advance to next slide</li>
              <li>Tab to navigate interactive elements</li>
              <li>H key to hear navigation help</li>
              <li>F key for presentation mode</li>
              <li>A key to toggle animations</li>
              <li>Escape key to focus on current slide</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
