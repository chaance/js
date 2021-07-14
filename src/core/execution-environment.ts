// https://github.com/JedWatson/exenv/blob/master/index.js
const canUseDOM = !!(
	typeof window !== "undefined" &&
	window.document &&
	window.document.createElement
);

export const ExecutionEnvironment = {
	canUseDOM: canUseDOM,
	canUseWorkers: typeof Worker !== "undefined",
	canUseEventListeners:
		canUseDOM && !!(window.addEventListener || (window as any).attachEvent),
	canUseViewport: canUseDOM && !!window.screen,
};
