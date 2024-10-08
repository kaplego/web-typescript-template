interface CreateElementConfig {
	innerHTML?: string;
	/** Overrides innerHTML */
	innerText?: string;
	classes?: string | string[];
	id?: string;
	insertBefore?: Node;
}
