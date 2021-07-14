import { assertCanUseDOM } from "../core/execution-environment";

/**
 * Get an element's owner document. Useful when components are used in iframes
 * or other environments like dev tools.
 *
 * @param element
 */
export function getOwnerDocument<T extends Node>(
	element: T | null | undefined
): Document {
	assertCanUseDOM();
	return element?.ownerDocument || document;
}

export function getOwnerWindow<T extends Node>(
	element: T | null | undefined
): Window & typeof globalThis {
	let ownerDocument = getOwnerDocument(element);
	return ownerDocument.defaultView || window;
}
