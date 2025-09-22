"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Zoom from "reveal.js/plugin/zoom/zoom.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";
import "reveal.js/dist/reveal.css";
//import "reveal.js/dist/theme/blood.css";
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
import SafButton from "../lib/core-components-3.10.0/package/dist/esm/components/button/define-react.js";
import SafDialog from "../lib/core-components-3.10.0/package/dist/esm/components/dialog/define-react.js";
import SafIcon from "../lib/core-components-3.10.0/package/dist/esm/components/icon/define-react.js";
import DesignWithIntentionSlide1 from "./slides/DesignWithIntentionSlide1";
import DesignWithIntentionSlide2 from "./slides/DesignWithIntentionSlide2";
import DesignWithIntentionSlide3 from "./slides/DesignWithIntentionSlide3";
import DesignWithIntentionSlide4 from "./slides/DesignWithIntentionSlide4";
const slideComponents = [
  TitleSlide,
  IntroSlide1,
  IntroSlide2,
  LimitsOfComplianceSlide,
  A11yMeetsIdentitySlide1,
  A11yMeetsIdentitySlide2,
  A11yMeetsIdentitySlide3,
  A11yMeetsIdentitySlide4,
  A11yMeetsIdentitySlide5,
  A11yMeetsIdentitySlide6,
  DesignWithIntentionSlide1,
  DesignWithIntentionSlide2,
  DesignWithIntentionSlide3,
  DesignWithIntentionSlide4,
  ConclusionSlide1,
  ConclusionSlide2,
  ConclusionSlide3,
];

export default function PresentationApp() {
  // Utility handlers for button click and keydown

  // Only use preventDefault/stopPropagation for keyboard, not for click (mobile compatibility)
  const handleButtonClick =
    (action: () => void) => (_event: React.MouseEvent) => {
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

  // ...existing code...

  // React refs and state declarations
  const deckRef = useRef<HTMLDivElement>(null);
  const deckInstanceRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [keyboardEnabled, setKeyboardEnabled] = useState(false);
  const [speakerNotesOpen, setSpeakerNotesOpen] = useState(false);
  const [totalSlides] = useState(slideComponents.length);

  // Slide navigation helpers
  const nextSlide = () => {
    console.log("nextSlide called", {
      deck: deckInstanceRef.current,
      isInitialized,
    });
    if (deckInstanceRef.current && isInitialized) {
      deckInstanceRef.current.next();
      deckInstanceRef.current.layout();
    }
  };

  const prevSlide = () => {
    console.log("prevSlide called", {
      deck: deckInstanceRef.current,
      isInitialized,
    });
    if (deckInstanceRef.current && isInitialized) {
      deckInstanceRef.current.prev();
      deckInstanceRef.current.layout();
    }
  };

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

        // Dynamically import Reveal.js and all required plugins in one section
        const [
          { default: Reveal },
          { default: Markdown },
          { default: Zoom },
          { default: RevealNotes },
        ] = await Promise.all([
          import("reveal.js"),
          import("reveal.js/plugin/markdown/markdown.esm.js"),
          import("reveal.js/plugin/zoom/zoom.esm.js"),
          import("reveal.js/plugin/notes/notes.esm.js"),
        ]);
        console.log(
          "[v0] Reveal.js, Notes, and Markdown plugins imported successfully"
        );

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
            keyboard: keyboardEnabled,
            touch: true,
            loop: false,
            transition: "slide", // none/fade/slide/convex/concave/zoom
            transitionSpeed: "default",
            backgroundTransition: "fade", // none/fade/slide/convex/concave/zoom
            autoAnimate: true,
            autoAnimateEasing: "ease",
            autoAnimateDuration: 1.0,
            autoAnimateUnmatched: true,
            controls: false,
            controlsTutorial: false,
            progress: true,
            slideNumber: true,
            hashOneBasedIndex: true,
            center: true,
            viewDistance: 3,
            mobileViewDistance: 1,
            plugins: [Markdown, Zoom, RevealNotes],
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
            // Reveal.js slidechanged event: event.indexh (horizontal), event.indexv (vertical)
            const e = event as any;
            const index = typeof e.indexh === "number" ? e.indexh : 0;
            console.log("[v0] Slide changed to:", index);
            setCurrentSlide(index);
            announceToScreenReader(`Slide ${index + 1} of ${totalSlides}`);
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
  }, [totalSlides]);

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

  const syncReveal = () => {
    if (deckInstanceRef.current) {
      console.log("[v0] Syncing Reveal.js with new slide content...");
      deckInstanceRef.current.sync();
      deckInstanceRef.current.layout();
    }
  };

  const toggleAnimations = () => {
    setAnimationsEnabled((prev) => {
      const next = !prev;
      announceToScreenReader(
        next ? "Animations enabled" : "Animations disabled"
      );
      return next;
    });
  };

  const toggleSpeakerNotes = () => {
    if (deckInstanceRef.current) {
      const notesPlugin = deckInstanceRef.current.getPlugin("notes");
      if (notesPlugin && typeof notesPlugin.open === "function") {
        notesPlugin.open();
      }
    }
  };

  const toggleKeyboard = () => {
    setKeyboardEnabled((prev) => !prev);
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

  useEffect(() => {
    if (!isInitialized) return;
    // Sync Reveal.js layout after initialization or config changes
    const timer = setTimeout(syncReveal, 100);
    if (deckInstanceRef.current) {
      deckInstanceRef.current.configure({ keyboard: keyboardEnabled });
      deckInstanceRef.current.configure({
        autoAnimate: animationsEnabled,
        transition: animationsEnabled ? "slide" : "none",
        transitionSpeed: animationsEnabled ? "default" : 0,
        backgroundTransition: animationsEnabled ? "fade" : "none",
      });
    }
    return () => clearTimeout(timer);
  }, [isInitialized, keyboardEnabled, animationsEnabled]);
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
          <div className="slide-header-logos">
            <img
              src="/images/unconference-logo.png"
              alt="Unconference logo"
              className="slide-logo-left"
            />
            <img
              src="/images/tr-logo.png"
              alt="Unconference lines"
              className="slide-logo-right"
            />
          </div>
          {slideComponents.map((Component, index) =>
            Component ? <Component key={index} /> : null
          )}
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
              <div className="controls-plus-slide-count">
                <div className="nav-controls">
                  <SafButton
                    a11y-aria-label="Info Button"
                    shape="circle"
                    icon-only
                    onClick={handleButtonClick(() => setShowInfo(!showInfo))}
                    onKeyDown={handleButtonKeyDown(() =>
                      setShowInfo(!showInfo)
                    )}
                    aria-expanded={showInfo}
                    title="Show presentation information and keyboard shortcuts"
                    tabIndex={0}
                  >
                    <SafIcon
                      icon-name="info"
                      appearance="solid"
                      presentation
                    ></SafIcon>
                  </SafButton>
                  <SafButton
                    a11y-aria-label="Toggle keyboard navigation"
                    shape="circle"
                    icon-only
                    onClick={handleButtonClick(toggleKeyboard)}
                    onKeyDown={handleButtonKeyDown(toggleKeyboard)}
                    aria-expanded={keyboardEnabled}
                    title={
                      keyboardEnabled
                        ? "Disable keyboard navigation for slides"
                        : "Enable keyboard navigation for slides"
                    }
                    tabIndex={0}
                  >
                    <SafIcon
                      icon-name="keyboard"
                      appearance="solid"
                      presentation
                    ></SafIcon>
                  </SafButton>
                  <SafButton
                    a11y-aria-label="Open speaker notes"
                    shape="circle"
                    icon-only
                    onClick={handleButtonClick(toggleSpeakerNotes)}
                    onKeyDown={handleButtonKeyDown(toggleSpeakerNotes)}
                    aria-expanded={speakerNotesOpen}
                    title="Open speaker notes window"
                    tabIndex={0}
                  >
                    <SafIcon
                      icon-name="podium"
                      appearance="solid"
                      presentation
                    ></SafIcon>
                  </SafButton>
                </div>

                <div
                  className="slide-counter"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <span className="sr-only">Currently viewing </span>
                  Slide {currentSlide + 1} of {totalSlides}
                </div>
              </div>

              <div className="controls-plus-a11y">
                <div className="nav-controls">
                  <SafButton
                    a11y-aria-label="Go to first slide"
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
                    a11y-aria-label="Go to last slide"
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
                        isPresentationMode
                          ? "arrows-minimize"
                          : "arrows-maximize"
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
