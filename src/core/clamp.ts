export function clamp(
	value: number,
	{ min, max }: { min: number; max: number }
) {
	return value > max ? max : value < min ? min : value;
}
