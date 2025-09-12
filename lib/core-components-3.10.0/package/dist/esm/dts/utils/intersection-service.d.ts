/**
 *  A service to batch intersection event callbacks so multiple elements can share a single observer
 *
 * @public
 */
export declare class IntersectionService {
    private intersectionDetector;
    private observedElements;
    constructor();
    /**
     * initialize intersection detector
     */
    private initializeIntersectionDetector;
    /**
     *  Handle intersections
     */
    private handleIntersection;
}
