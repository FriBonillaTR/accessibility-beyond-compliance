/**
 * clamps a value between a min and max value
 * @returns clamped value
 */
function clamp(min, value, max) {
    return Math.min(Math.max(value, min), max);
}

export { clamp };
