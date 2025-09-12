import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const progressRingStyles = ":host{--saf-progress-size: 2rem;--saf-progress-ring-stroke: var(--saf-color-status-information-strong);align-items:center;display:flex;flex-direction:column;outline:none}:host([progress-size=small]){--saf-progress-size: 1rem}:host([progress-size=small]) .determinate,:host([progress-size=small]) .indeterminate-indicator-1{stroke-width:2px}:host([progress-size=medium]){--saf-progress-size: 2rem}:host([progress-size=medium]) .determinate,:host([progress-size=medium]) .indeterminate-indicator-1{stroke-width:1.5px}:host([progress-size=large]){--saf-progress-size: 4rem}.progress{height:var(--saf-progress-size);margin-block-end:var(--saf-spacing-1);width:var(--saf-progress-size)}.progress.no-label{margin-block-end:0}.progress.indeterminate{animation:spin-infinite 2s linear infinite;transform:rotate(-90deg);transform-origin:50% 50%}:host([paused]) .progress.indeterminate{animation:none}.determinate,.indeterminate-indicator-1{fill:none;stroke:var(--saf-progress-ring-stroke);stroke-linecap:round;transition:all .2s ease-in-out}.label{color:var(--saf-color-text-heavy);font:var(--saf-type-body-default-sm-regular-standard);text-align:center}:host([paused]) .indeterminate-indicator-1{stroke:var(--saf-color-status-neutral-strong)}:host([paused]) .determinate{stroke:var(--saf-color-status-neutral-strong)}@keyframes spin-infinite{0%{stroke-dasharray:.01 43.97;transform:rotate(0deg)}50%{stroke-dasharray:21.9 21.99;transform:rotate(450deg)}100%{stroke-dasharray:.01 43.97;transform:rotate(1080deg)}}";
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(progressRingStyles)}
`;

export { styles };
