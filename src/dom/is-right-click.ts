/**
 * Detects right clicks
 *
 * @param event
 */
export function isRightClick(event: MouseEvent | PointerEvent | TouchEvent) {
	return "which" in event
		? event.which === 3
		: "button" in event
		? (event as any).button === 2
		: false;
}
