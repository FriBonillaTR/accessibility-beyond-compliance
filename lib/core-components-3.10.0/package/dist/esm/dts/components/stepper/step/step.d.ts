import { FASTElement } from '../../../@microsoft/fast-element/index.js';
import { StepStatus } from './step.options.js';
export declare class Step extends FASTElement {
    /**
     * The status of the step.
     *
     * @public
     */
    status: StepStatus;
    statusChanged(prev: StepStatus | undefined, next: StepStatus): void;
    /**
     * status label of the step to be used for assistive technologies.
     *
     * @public
     * @a11y
     */
    statusLabel: string;
    /**
     * The title of the step.
     *
     * @public
     */
    stepTitle: string;
    /**
     * The step number.
     *
     * @public
     */
    stepNumber: number;
    /**
     * The total number of steps.
     *
     * @public
     */
    totalSteps: number;
    private orientationObserver;
    connectedCallback(): void;
    addObserver(): void;
    changeClasses(o: string): void;
    disconnectedCallback(): void;
    get stepHeader(): string;
    stepHeaderSlot: HTMLElement[] | null;
    defaultSlottedContent: HTMLElement[] | null;
}
