export default {
	default: ['(##) ####-####', '(##) #####-####'],
	token: {
		'#': { pattern: /\d/ }, // Only numbers
		'N': { pattern: /[\d\a-z\A-Z]/ }, // Numbers and letters
		'A': { pattern: /[\a-z\A-Z]/ } // Only letters
	}
};
