import { useLayoutEffect } from "react";
import { ExecutionEnvironment } from "../core/execution-environment";
import { noop } from "../core/noop";
import type * as React from "react";

/**
 * React currently throws a warning when using `useLayoutEffect` on the server.
 * To get around it, we can call a no-op on the server and `useLayoutEffect` in
 * the browser. We occasionally need `useLayoutEffect` to ensure we don't get a
 * render flash for certain operations, but we may also need affected components
 * to render on the server.
 *
 * Important to note that using this hook as an escape hatch will break the
 * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
 * Use sparingly only when the effect won't effect the rendered markup to avoid
 * any server/client mismatch.
 *
 * If `useLayoutEffect` is needed and the result would create a mismatch, it's
 * likely that the component in question shouldn't be rendered on the server at
 * all, so a better approach would be to lazily render those in a parent
 * component after client-side hydration.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 *
 * @param effect
 * @param deps
 */
export const useIsomorphicLayoutEffect: (
	effect: React.EffectCallback,
	deps?: React.DependencyList | undefined
) => void = ExecutionEnvironment.canUseDOM ? useLayoutEffect : noop;
