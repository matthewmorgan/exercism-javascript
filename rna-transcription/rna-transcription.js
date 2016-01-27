'use strict';

let dnaToRna = {'G':'C', 'C':'G','A':'U','T':'A'};
let rnaToDna = {'C':'G', 'G':'C','U':'A','A':'T'};

let toRna = (dna) => dna.split('').map((el) => dnaToRna[el]).join('');
let toDna = (rna) => rna.split('').map((el) => rnaToDna[el]).join('');

module.exports = function() {
  return { toDna: toDna, toRna: toRna};
};