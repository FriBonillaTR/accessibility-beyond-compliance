"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import TitleSlide from "./slides/TitleSlide";
import IntroSlide1 from "./slides/IntroSlide1";
import IntroSlide2 from "./slides/IntroSlide2";
import LimitsOfComplianceSlide from "./slides/LimitsOfComplianceSlide";
import A11yMeetsIdentitySlide1 from "./slides/A11yMeetsIdentitySlide1";
import A11yMeetsIdentitySlide2 from "./slides/A11yMeetsIdentitySlide2";
import A11yMeetsIdentitySlide3 from "./slides/A11yMeetsIdentitySlide3";
import A11yMeetsIdentitySlide4 from "./slides/A11yMeetsIdentitySlide4";
import A11yMeetsIdentitySlide5 from "./slides/A11yMeetsIdentitySlide5";
import A11yMeetsIdentitySlide6 from "./slides/A11yMeetsIdentitySlide6";
import DesigningWithIntentionSlide from "./slides/DesigningWithIntentionSlide";
import ConclusionSlide1 from "./slides/ConclusionSlide1";
import ConclusionSlide2 from "./slides/ConclusionSlide2";
import ConclusionSlide3 from "./slides/ConclusionSlide3";
import { SafButton, SafDialog, SafIcon } from "@saffron/core-components/react";

export default function PresentationApp() {
  const deckRef = useRef<HTMLDivElement>(null);
  const deckInstanceRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(14); // Update this if slides are added/removed
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
        const RevealNotes = (await import("reveal.js/plugin/notes/notes.js"))
          .default;
        console.log("[v0] Reveal.js and Notes plugin imported successfully");

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
            controls: false,
            progress: true,
            center: true,
            viewDistance: 3,
            mobileViewDistance: 2,
            theme: null,
            plugins: [RevealNotes],
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
        <div className="slides" role="main" id="main-content">
          <TitleSlide />
          <IntroSlide1 />
          <IntroSlide2 />
          <LimitsOfComplianceSlide />
          <A11yMeetsIdentitySlide1 />
          <A11yMeetsIdentitySlide2 />
          <A11yMeetsIdentitySlide3 />
          <A11yMeetsIdentitySlide4 />
          <A11yMeetsIdentitySlide5 />
          <A11yMeetsIdentitySlide6 />
          <DesigningWithIntentionSlide />
          <ConclusionSlide1 />
          <ConclusionSlide2 />
          <ConclusionSlide3 />
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
              <SafButton
                a11y-aria-label="Info Button"
                shape="circle"
                icon-only
                onClick={handleButtonClick(() => setShowInfo(!showInfo))}
                onKeyDown={handleButtonKeyDown(() => setShowInfo(!showInfo))}
                aria-expanded={showInfo}
                title="Press for presentation info and keyboard shortcuts"
                tabIndex={0}
              >
                <SafIcon
                  icon-name="plus"
                  appearance="solid"
                  presentation
                ></SafIcon>
              </SafButton>

              <div
                className="slide-counter"
                aria-live="polite"
                aria-atomic="true"
              >
                <span className="sr-only">Currently viewing </span>
                Slide {currentSlide + 1} of {totalSlides}
              </div>

              <div className="nav-controls">
                <SafButton
                  a11y-aria-label="Go to first slide (Up arrow or Home key)"
                  shape="circle"
                  icon-only
                  onClick={handleButtonClick(goToFirstSlide)}
                  onKeyDown={handleButtonKeyDown(goToFirstSlide)}
                  title="First slide (↑ or Home)"
                  tabIndex={0}
                >
                  <SafIcon
                    icon-name="backward-fast"
                    appearance="solid"
                    presentation
                  />
                  <span className="sr-only">First</span>
                </SafButton>

                <SafButton
                  a11y-aria-label="Go to previous slide (Left arrow key)"
                  shape="circle"
                  icon-only
                  onClick={handleButtonClick(prevSlide)}
                  onKeyDown={handleButtonKeyDown(prevSlide)}
                  title="Previous slide (←)"
                  tabIndex={0}
                  disabled={currentSlide === 0}
                >
                  <SafIcon
                    icon-name="arrow-left"
                    appearance="solid"
                    presentation
                  />
                  <span className="sr-only">Previous</span>
                </SafButton>

                <SafButton
                  a11y-aria-label="Go to next slide (Right arrow, Space, or Enter key)"
                  shape="circle"
                  icon-only
                  onClick={handleButtonClick(nextSlide)}
                  onKeyDown={handleButtonKeyDown(nextSlide)}
                  title="Next slide (→, Space, or Enter)"
                  tabIndex={0}
                  disabled={currentSlide === totalSlides - 1}
                >
                  <SafIcon
                    icon-name="arrow-right"
                    appearance="solid"
                    presentation
                  />
                  <span className="sr-only">Next</span>
                </SafButton>

                <SafButton
                  a11y-aria-label="Go to last slide (Down arrow or End key)"
                  shape="circle"
                  icon-only
                  onClick={handleButtonClick(goToLastSlide)}
                  onKeyDown={handleButtonKeyDown(goToLastSlide)}
                  title="Last slide (↓ or End)"
                  tabIndex={0}
                >
                  <SafIcon
                    icon-name="forward-fast"
                    appearance="solid"
                    presentation
                  />
                  <span className="sr-only">Last</span>
                </SafButton>
              </div>

              <div className="accessibility-controls">
                <SafButton
                  a11y-aria-label={
                    isPresentationMode
                      ? "Exit presentation mode"
                      : "Enter presentation mode (F key)"
                  }
                  shape="circle"
                  icon-only
                  onClick={handleButtonClick(togglePresentationMode)}
                  onKeyDown={handleButtonKeyDown(togglePresentationMode)}
                  title="Presentation mode (F)"
                  tabIndex={0}
                  className="control-button presentation-button"
                >
                  <SafIcon
                    icon-name={
                      isPresentationMode ? "arrows-minimize" : "arrows-maximize"
                    }
                    appearance="solid"
                    presentation
                  />
                  <span className="sr-only">
                    {isPresentationMode ? "Exit" : "Present"}
                  </span>
                </SafButton>

                <SafButton
                  a11y-aria-label={
                    animationsEnabled
                      ? "Disable animations (A key)"
                      : "Enable animations (A key)"
                  }
                  shape="circle"
                  icon-only
                  onClick={handleButtonClick(toggleAnimations)}
                  onKeyDown={handleButtonKeyDown(toggleAnimations)}
                  title="Toggle animations (A)"
                  tabIndex={0}
                  className="control-button animation-button"
                >
                  <SafIcon
                    icon-name={animationsEnabled ? "play" : "pause"}
                    appearance="solid"
                    presentation
                  />
                  <span className="sr-only">
                    {animationsEnabled ? "Disable" : "Enable"} animations
                  </span>
                </SafButton>
              </div>
            </nav>
          </header>

          <SafDialog
            id="overview"
            modal={true}
            hidden={!showInfo}
            is-alert={false}
            is-header={true}
            is-footer={true}
            no-focus-trap={false}
            dialog-title="Presentation Information"
            dialog-subtitle="Keyboard shortcuts and accessibility features"
            onClose={() => setShowInfo(false)}
          >
            <div className="info-content">
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
              <div className="info-section">
                <div
                  className="sr-only"
                  role="region"
                  aria-label="Presentation instructions"
                >
                  <h2>Navigation Instructions</h2>
                  <p>This presentation can be navigated using:</p>
                  <ul>
                    <li>
                      Arrow keys to move between slides (Up/Home for first,
                      Down/End for last)
                    </li>
                    <li>Space bar or Enter to advance to next slide</li>
                    <li>Tab to navigate interactive elements</li>
                    <li>H key to hear navigation help</li>
                    <li>F key for presentation mode</li>
                    <li>A key to toggle animations</li>
                    <li>Escape key to focus on current slide</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              slot="footer"
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <SafButton
                appearance="primary"
                onClick={handleButtonClick(() => setShowInfo(false))}
                onKeyDown={handleButtonKeyDown(() => setShowInfo(false))}
                tabIndex={0}
              >
                Close
              </SafButton>
            </div>
          </SafDialog>
        </>
      )}
    </div>
  );
}
