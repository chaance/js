/**
 * Copy an array, shuffle its elements and return it.
 * @see http://bost.ocks.org/mike/shuffle/
 * @param array Array to copy and shuffle
 * @returns New array with randomly shuffled items
 */
export function shuffle<T>(array: T[]) {
	let copy = [...array],
		m = array.length,
		t: T,
		i: number;
	// While there remain elements to shuffle…
	while (m > 0) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);
		// And swap it with the current element.
		t = copy[m]!;
		copy[m] = copy[i]!;
		copy[i] = t;
	}
	return copy;
}
