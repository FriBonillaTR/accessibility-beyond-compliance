import { FASTElement } from '../../@microsoft/fast-element/index.js';
type CreateResizeObserverConfig = {
    threshold?: number;
    breakpoint?: number;
};
/**
 * A base class for creating responsive elements.
 * Meant to be used as a mixin
 * @public
 */
export declare class ResponsiveElement extends FASTElement {
    createResizeObserver(config?: CreateResizeObserverConfig): ResizeObserver;
    private _mode;
    _modeChanged: (prev: string, next: string) => void;
    resizeObserver: ResizeObserver | undefined;
    set mode(_: "desktop" | "mobile");
    initializeResponsiveness(config?: CreateResizeObserverConfig): void;
    disconnectResizeObserver(): void;
}
export {};
