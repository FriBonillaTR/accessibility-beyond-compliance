"use client"

import { useEffect, useRef, useState } from "react"
import Reveal from "reveal.js"
import "../styles/presentation.scss"

// Import slide components
import TitleSlide from "./slides/TitleSlide"
import OverviewSlide from "./slides/OverviewSlide"
import LimitsOfComplianceSlide from "./slides/LimitsOfComplianceSlide"
import AccessibilityMeetsIdentitySlide from "./slides/AccessibilityMeetsIdentitySlide"
import DesigningWithIntentionSlide from "./slides/DesigningWithIntentionSlide"
import ConclusionSlide from "./slides/ConclusionSlide"

export default function PresentationApp() {
  const deckRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(6)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (deckRef.current) {
      const deck = new Reveal(deckRef.current, {
        // Accessibility configuration
        hash: true,
        keyboard: {
          // Enhanced keyboard navigation
          13: "next", // Enter
          32: "next", // Space
          37: "left", // Left arrow
          38: "up", // Up arrow
          39: "right", // Right arrow
          40: "down", // Down arrow
          72: () => {
            // H key for help
            announceHelp()
          },
          27: () => {
            // Escape key to focus on current slide
            const current = document.querySelector(".present") as HTMLElement
            if (current) current.focus()
          },
        },
        touch: true,
        loop: false,
        rtl: false,
        navigationMode: "default",

        // Respect user motion preferences
        transition: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "none" : "slide",
        transitionSpeed: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : "default",

        // Controls and progress
        controls: true,
        controlsTutorial: false,
        controlsLayout: "bottom-right",
        controlsBackArrows: "faded",
        progress: true,
        center: true,
        showNotes: false,

        // View distance for performance
        viewDistance: 3,
        mobileViewDistance: 2,

        // Plugins and dependencies
        dependencies: [],

        // Keyboard navigation
        keyboardCondition: null, // Always allow keyboard navigation
      })

      deck.initialize().then(() => {
        setIsInitialized(true)

        const slides = deckRef.current?.querySelectorAll(".slides section")
        slides?.forEach((slide, index) => {
          slide.setAttribute("role", "tabpanel")
          slide.setAttribute("aria-label", `Slide ${index + 1} of ${slides.length}`)
          slide.setAttribute("tabindex", "-1")

          // Add slide number for screen readers
          const slideNumber = document.createElement("span")
          slideNumber.className = "sr-only"
          slideNumber.textContent = `Slide ${index + 1} of ${slides.length}`
          slide.insertBefore(slideNumber, slide.firstChild)
        })

        deck.on("slidechanged", (event) => {
          const slideIndex = event.indexh
          setCurrentSlide(slideIndex)

          // Announce slide change to screen readers
          const slideTitle = event.currentSlide.querySelector("h1, h2, h3")?.textContent || `Slide ${slideIndex + 1}`
          announceToScreenReader(`Now viewing: ${slideTitle}`)

          // Focus management
          setTimeout(() => {
            const currentSlideElement = event.currentSlide as HTMLElement
            if (currentSlideElement) {
              currentSlideElement.focus()
            }
          }, 100)
        })

        const skipLink = document.querySelector(".skip-link") as HTMLAnchorElement
        if (skipLink) {
          skipLink.addEventListener("click", (e) => {
            e.preventDefault()
            const currentSlide = document.querySelector(".present") as HTMLElement
            if (currentSlide) {
              currentSlide.focus()
              announceToScreenReader("Skipped to main presentation content")
            }
          })
        }

        const helpButton = document.querySelector(".help-button") as HTMLButtonElement
        if (helpButton) {
          helpButton.addEventListener("click", announceHelp)
        }

        // Initial focus and announcement
        const firstSlide = document.querySelector(".present") as HTMLElement
        if (firstSlide) {
          firstSlide.focus()
          announceToScreenReader("Presentation loaded. Use arrow keys or space to navigate.")
        }
      })

      return () => {
        deck.destroy()
      }
    }
  }, [])

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "polite")
    announcement.setAttribute("aria-atomic", "true")
    announcement.className = "sr-only"
    announcement.textContent = message

    document.body.appendChild(announcement)

    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }

  const announceHelp = () => {
    const helpText =
      "Keyboard navigation: Use arrow keys, space, or enter to navigate slides. Press H for help, Escape to focus current slide."
    announceToScreenReader(helpText)
  }

  const goToSlide = (slideIndex: number) => {
    if (deckRef.current && isInitialized) {
      const deck = (deckRef.current as any).deck
      if (deck) {
        deck.slide(slideIndex)
      }
    }
  }

  const nextSlide = () => {
    if (deckRef.current && isInitialized) {
      const deck = (deckRef.current as any).deck
      if (deck) {
        deck.next()
      }
    }
  }

  const prevSlide = () => {
    if (deckRef.current && isInitialized) {
      const deck = (deckRef.current as any).deck
      if (deck) {
        deck.prev()
      }
    }
  }

  return (
    <div className="presentation-container">
      <header className="presentation-header" role="banner">
        <nav className="presentation-nav" role="navigation" aria-label="Presentation navigation">
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
        {/* Skip link for keyboard navigation */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <div className="slides" id="main-content" role="main">
          <TitleSlide />
          <OverviewSlide />
          <LimitsOfComplianceSlide />
          <AccessibilityMeetsIdentitySlide />
          <DesigningWithIntentionSlide />
          <ConclusionSlide />
        </div>
      </div>

      <div className="sr-only" role="region" aria-label="Presentation instructions">
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
  )
}
