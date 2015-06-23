var golf = module.exports = function(dna){
	return dna.replace(/\G/g, 'X').replace(/\C/g, 'G').replace(/\X/g,'C').replace(/\A/g,'U').replace(/\T/g,'A');
};