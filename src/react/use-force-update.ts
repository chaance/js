import { useState, useCallback } from "react";

/**
 * Forces a re-render, similar to `forceUpdate` in class components.
 */
export function useForceUpdate() {
	let [, set] = useState<any>(() => Object.create(null));
	return useCallback(() => {
		set(Object.create(null));
	}, []);
}
