import masker from './masker';
import opt from './config';

function getInput(el) {
	if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
		const els = el.getElementsByTagName('input');
		if (els.length !== 1)
			throw new Error(`v-mask needs 1 input. Found ${els.length}`);
		else
			el = els[0];
	}
	return el;
}

function getConfig(binding) {
	let config = opt.default;
	if (binding.value && Array.isArray(binding.value) && binding.value.length > 0)
		if (binding.value.every(value => typeof value === 'string'))
			config = binding.value;
	return config.sort();
}

function applyMask(el, data, binding) {
	if (!binding.value)
		return; // Returns if no mask

	el = getInput(el);
	el.value = data ? data.value : el.value;
	if (el.value === 'undefined')
		el.value = '';
	const newDisplay = masker(el.value, getConfig(binding));
	if (newDisplay !== el.value) {
		el.value = newDisplay;
		el.dispatchEvent(new Event('input'));
	}
}

function getData(vnode) {
	return vnode.data.props || vnode.data.model || vnode.data.domProps;
}

function bind(el, binding, vnode) {
	const data = getData(vnode);

	applyMask(el, data, binding);
}

function componentUpdated(el, binding, vnode, oldVnode) {
	const data = getData(vnode);
	const oldData = getData(oldVnode);

	if (data.value === oldData.value)
		return; // Prevents infinite loop

	applyMask(el, data, binding);
}

export default { componentUpdated, bind };
