export default function(binary) {
	const b = binary.match(/[^01]/) ? '0' : binary;
	return {
		toDecimal: () => b.split('').reduce((acc, curr) => acc*2 + parseInt(curr),0)
	};
};

