'use strict';

import { translate } from './translation.mjs';



/*
>>>>>>>>>> Ukázka 1 (translace)
Methionin
Fenylalanin
Serin
*/

// This test case is from Dr. Polcak expected output 
test('Translate AUGUUUUCU', () => {

	const aminoOne = "AUGUUUUCU";
	const expAminOne = ['Methionin', 'Fenylalanin', 'Serin'];
  
	const iterator = translate(aminoOne);
  
	for (let i = 0; i < expAminOne.length; i++) {
		const aminoAcid = iterator.next().value;
		expect(aminoAcid.name).toBe(expAminOne[i]);
	}

});

// This test case is from Dr. Polcak expected output 
test('Translate AUGUUUCU and check next', () => {
	
	const aminoOne = "AUGUUUUCU";
	const expAminOne = ['Methionin', 'Fenylalanin', 'Serin'];
  
	const iterator = translate(aminoOne);
  
	for (let i = 0; i < expAminOne.length; i++) {
		const aminoAcid = iterator.next().value;
		expect(aminoAcid.name).toBe(expAminOne[i]);
	}
  
	// Check if there are no more amino acids
	expect(iterator.next().done).toBe(true);

});

/*
>>>>>>>>>> Ukázka 2 (terminační kodóny)
*/

// This test case is from Dr. Polcak expected output 
test("Test the termination value", () => {

	for (let aminoAcid of translate("UAG")) {
		fail("We should not reach this.");
	}
	for (let aminoAcid of translate("UAGUUU")) {
		fail("We should not reach this.");
	}
	for (let aminoAcid of translate("UAA")) {
		fail("We should not reach this.");
	}
	for (let aminoAcid of translate("UGA")) {
		fail("We should not reach this.");
	}
})


/*
>>>>>>>>>> Ukázka 3 (translace všech aminokyselin)
Fenylalanin
Fenylalanin
Leucin
Leucin
Leucin
Leucin
Leucin
Leucin
Isoleucin
Isoleucin
Isoleucin
Methionin
Valin
Valin
Valin
Valin
Serin
Serin
Serin
Serin
Prolin
Prolin
Prolin
Prolin
Threonin
Threonin
Threonin
Threonin
Alanin
Alanin
Alanin
Alanin
Tyrosin
Tyrosin
*/

// This test case is from Dr. Polcak expected output 
test("Complex translation", () => {
	
	const aminoOne = 
		"UUUUUCUUAUUGCUUCUCCUACUGAUUAUCAUAAUGGUUGUCGUAG" +
		"UGUCUUCCUCAUCGCCUCCCCCACCGACUACCACAACGGCUGCCGC" +
		"AGCGUAUUACUAAUAGCAUCACCAACAGAAUAACAAAAAGGAUGAC" +
		"GAAGAGUGUUGCUGAUGGCGUCGCCGACGGAGUAGCAGAAGGGGUG" +
		"GCGGAGGG";
	const expAminOne = 	['Fenylalanin', 'Fenylalanin', 'Leucin', 'Leucin',
						 'Leucin', 'Leucin', 'Leucin', 'Leucin', 'Isoleucin',
						 'Isoleucin', 'Isoleucin', 'Methionin', 'Valin',
						 'Valin', 'Valin', 'Valin', 'Serin', 'Serin', 'Serin',
						 'Serin', 'Prolin', 'Prolin', 'Prolin', 'Prolin', 
						 'Threonin','Threonin', 'Threonin', 'Threonin', 
						 'Alanin', 'Alanin', 'Alanin', 'Alanin', 'Tyrosin', 
						 'Tyrosin'];

	const iterator = translate(aminoOne);
  
	for (let i = 0; i < expAminOne.length; i++) {
		const aminoAcid = iterator.next().value;
		expect(aminoAcid.name).toBe(expAminOne[i]);
	}
					   
	// Check if there are no more amino acids
	expect(iterator.next().done).toBe(true);
})

/*

/// knihovna musí správně zpracovat všechny kodóny:
console.log(">>>>>>>>>> Ukázka 3 (translace všech aminokyselin)");
for (let aminoAcid of translate("UUUUUCUUAUUGCUUCUCCUACUGAUUAUCAUAAUGGUUGUCGUAGUGUCUUCCUCAUCGCCUCCCCCACCGACUACCACAACGGCUGCCGCAGCGUAUUACUAAUAGCAUCACCAACAGAAUAACAAAAAGGAUGACGAAGAGUGUUGCUGAUGGCGUCGCCGACGGAGUAGCAGAAGGGGUGGCGGAGGG")) {
	console.log(aminoAcid.name);
}


/// knihovana generuje výjimku pro nevalidní řetězce
import { TranslationError } from "./translation.mjs";
console.log(">>>>>>>>>> Ukázka 4 (nevalidní řetězec)");
try {
	for (let aminoAcid of translate("XXX")) {
	}
}
catch (e) {
	console.log(e.name); // e.message je např. Unknown codon XXX
}
console.log(">>>>>>>>>> Ukázka 5 (zpracování kodńu před nevalidním řetězcem)");
try {
	for (let aminoAcid of translate("AUGXXX")) {
		console.log(aminoAcid.name);
	}
}
catch (e) {
	console.log(e.name); // e.message je např. Unknown codon XXX
}
console.log(">>>>>>>>>> Ukázka 6 (krátký kodon))");
try {
	for (let aminoAcid of translate("AU")) {
		console.log(aminoAcid.name);
	}
}
catch (e) {
	console.log(e.name); // e.message je např. Sequence AU not processed
}

/// Iterátorů  vrácených generátorem je možné vytvořit více, vzájemně budou na
/// sobě nezávislé.
console.log(">>>>>>>>>> Ukázka 7 (nezávislé iterátory)");
let it1 = translate("AUGUUUUCUAUG")
console.log(it1.next().value.name); // Methionin
console.log(it1.next().value.name); // Fenylalanin
let it2 = translate("AUGUUUUCUAUG")
console.log(it2.next().value.name); // Methionin
console.log(it1.next().value.name); // Serin
console.log(it2.next().value.name); // Fenylalanin
console.log(it2.next().value.name); // Serin
console.log(it1.next().value.name); // Methionin

/// Nezávislé objekty
console.log(">>>>>>>>>> Ukázka 8 (nezávislé objekty a řetězec prototypů)");
let it3 = translate("AUGAUGAUGAUGAUGAUGAUGAUGAUGAUG");
console.log(it3.next().value === it3.next().value); // false, different objects
let m1 = it3.next().value;
let m2 = it3.next().value;
console.log(m1 ===  m2); // false, different objects
import { BaseAminoAcid } from "./translation.mjs";
console.log(m1 instanceof BaseAminoAcid); // true
console.log(m2 instanceof BaseAminoAcid); // true
console.log(m1.__proto__ === m2.__proto__); // true, both Methionine
console.log({} instanceof BaseAminoAcid); // false
let it4 = translate("UUAUUA");
let l1 = it4.next().value;
console.log(l1.__proto__ !== m1.__proto__); // true, different aminoacides
console.log(l1 instanceof BaseAminoAcid); // true

console.log(">>>>>>>>>> Ukázka 9 (jméno aminokyseliny není součástí každého objektu)");
console.log(l1.hasOwnProperty("name")); // false
console.log(l1.__proto__.hasOwnProperty("name")); // true

 */