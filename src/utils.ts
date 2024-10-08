function createElement<TAG extends keyof HTMLElementTagNameMap>(
	tag: TAG,
	parent: Node,
	config?: CreateElementConfig
): HTMLElementTagNameMap[TAG] {
	const element = document.createElement(tag);

	if (config.id) element.id = config.id;
	if (config.classes) {
		if (typeof config.classes === 'string') element.classList.add(config.classes);
		else element.classList.add(...config.classes);
	}
	if (config.innerHTML) element.innerHTML = config.innerHTML;
	if (config.innerText) element.innerText = config.innerText;

	if (config.insertBefore)
		parent.insertBefore(element, config.insertBefore);
	else
		parent.appendChild(element);
	return element;
}
