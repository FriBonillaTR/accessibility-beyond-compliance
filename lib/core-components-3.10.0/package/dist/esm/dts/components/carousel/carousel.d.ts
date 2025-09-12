import { FASTElement } from '../../@microsoft/fast-element/index.js';
/**
 * A class for Carousel
 */
export declare class Carousel extends FASTElement {
    /**
     * Hide or show the flippers for assistive technologies.
     *
     * @public
     */
    flippersHiddenFromAT: string;
    /**
     * Header to display in slide controls.
     *
     * @public
     */
    slideLabel: string;
    /**
     * Determines the total number of slides.
     *
     * @public
     */
    totalSlides: number;
    /**
     * Determines the number of the current slide.
     *
     * @public
     */
    currentSlide: number;
    private step;
    private contentContainer;
    private scrollArea;
    private slotContent;
    private slides;
    private endOfSlides;
    private currentIndex;
    observeResize: boolean;
    private resizeObserver;
    addResizeObserver(): void;
    slottedNodesChanged(): void;
    initialize(): void;
    resizeSlide(): void;
    previousSlide(): void;
    nextSlide(): void;
    disconnectedCallback(): void;
}
