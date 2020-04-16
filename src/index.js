import mask from './directive';

function install(Vue) {
	Vue.directive('mask', mask);
}

export default install;
