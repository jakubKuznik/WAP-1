'use strict';
// name:    Jakub Kuznik 
// login:   xkuzni04 
// faculty: VUT FIT 
// course:  WAP - 2024
// node.js: v20.11.1


/* 
 * This file contains unit tests in jest framework for translation.mjs library 
 */

import { translate } from './translation.mjs';
import { BaseAminoAcid } from "./translation.mjs";

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

// This test case is from Dr. Polcak expected output 
test("Invalid codon", () => {
	const aminoInvalid = "XXX"; 

	expect(() => {
		for (let aminoAcid of translate(aminoInvalid)) {
			fail("The code should not be translated.");
		}
	}).toThrowError("TranslationError: Unknown amino acid code.");
})

// This test case is from Dr. Polcak expected output 
test("Invalid codon", () => {

	const aminoInvalid = "AUGXXX"; 
	
	const expAminOne = ['Methionin'];
	
	const iterator = translate(aminoInvalid);
	const aminoAcid = iterator.next().value;
	expect(aminoAcid.name).toBe(expAminOne[0]);

	expect(() => {
		aminoAcid = iterator.next().value;
		expect(aminoAcid.name).toBe(expAminOne[0]);
	}).toThrowError("TranslationError: Unknown amino acid code.");
})

// This test case is from Dr. Polcak expected output 
test("Short codon", () => {
	const aminoInvalid = "AU"; 

	expect(() => {
		for (let aminoAcid of translate(aminoInvalid)) {
			fail("The code should not be translated.");
		}
	}).toThrowError("TranslationError: mRNA code has invalid length.");
})

// This test case is from Dr. Polcak expected output 
test('Independent translations', () => {

	const aminoOne = "AUGUUUUCUAUG";
	const exp = ['Methionin', 'Fenylalanin', 'Methionin',
				'Serin', 'Fenylalanin', "Serin", "Methionin"];
  
	const iterator1  = translate(aminoOne);
	const iterator2 = translate(aminoOne); 

	let aminoAcid = "";

	// iterator 1
	aminoAcid = iterator1.next().value;
	expect(aminoAcid.name).toBe(exp[0]);
	aminoAcid = iterator1.next().value;
	expect(aminoAcid.name).toBe(exp[1]);
	
	// iterator 2 
	aminoAcid = iterator2.next().value;
	expect(aminoAcid.name).toBe(exp[2])

	// iterator 1
	aminoAcid = iterator1.next().value;
	expect(aminoAcid.name).toBe(exp[3]);
	
	// iterator 2 
	aminoAcid = iterator2.next().value;
	expect(aminoAcid.name).toBe(exp[4])
	aminoAcid = iterator2.next().value;
	expect(aminoAcid.name).toBe(exp[5])
	
	// iterator 1
	aminoAcid = iterator1.next().value;
	expect(aminoAcid.name).toBe(exp[6]);

});

// This test case is from Dr. Polcak expected output 
test('Independent objects', () => {

	const aminoOne   = "AUGAUGAUGAUGAUGAUGAUGAUGAUGAUG"; 
	const aminotTwo  = "UUAUUA"; 
	const iterator1  = translate(aminoOne);
	const iterator2  = translate(aminotTwo);
	
	expect(iterator1.next().value === iterator1.next().value).toBe(false);
	
	let m1 = iterator1.next().value;
	let m2 = iterator1.next().value;

	expect(m1 === m2).toBe(false);

	expect(m1 instanceof BaseAminoAcid).toBe(true);
	expect(m2 instanceof BaseAminoAcid).toBe(true);
	
	expect(m1.__proto__ === m2.__proto__).toBe(true);
	
	expect({} instanceof BaseAminoAcid).toBe(false);

	let l1 = iterator2.next().value;
	expect(l1.__proto__ !== m1.__proto__).toBe(true);
	expect(l1 instanceof BaseAminoAcid).toBe(true);

});

// This test case is from Dr. Polcak expected output 
test('Amino acid name is not part of each object.', () => {

	const aminoOne   = "AUGAUGAUGAUGAUGAUGAUGAUGAUGAUG"; 
	const aminotTwo  = "UUAUUA"; 
	const iterator1  = translate(aminoOne);
	const iterator2  = translate(aminotTwo);
	
	expect(iterator1.next().value === iterator1.next().value).toBe(false);
	
	let m1 = iterator1.next().value;
	let m2 = iterator1.next().value;

	expect(m1 === m2).toBe(false);

	expect(m1 instanceof BaseAminoAcid).toBe(true);
	expect(m2 instanceof BaseAminoAcid).toBe(true);
	
	expect(m1.__proto__ === m2.__proto__).toBe(true);
	
	expect({} instanceof BaseAminoAcid).toBe(false);

	let l1 = iterator2.next().value;
	expect(l1.__proto__ !== m1.__proto__).toBe(true);
	expect(l1 instanceof BaseAminoAcid).toBe(true);

	expect(l1.hasOwnProperty("name")).toBe(false);
	expect(l1.__proto__.hasOwnProperty("name")).toBe(true);

});

test("Empty codon", () => {

	const aminoInvalid = ""; 
	const iterator = translate(aminoInvalid);
	const aminoAcid = iterator.next().value;
    expect(aminoAcid).toBeUndefined();

})

test("STOP flag in the end.", () => {
	
	const aminoOne = "UUUUAA";
	const expAminOne = 	['Fenylalanin'];

	const iterator = translate(aminoOne);
	
	let aminoAcid = iterator.next().value;
	expect(aminoAcid.name).toBe(expAminOne[0]);
					   
	expect(iterator.next().done).toBe(true);
})

test("STOP flag in the middle.", () => {
	
	const aminoOne = "UUUUAAUUU";
	const expAminOne = 	['Fenylalanin'];

	const iterator = translate(aminoOne);
	
	let aminoAcid = iterator.next().value;
	expect(aminoAcid.name).toBe(expAminOne[0]);
					   
	
	expect(() => {
		aminoAcid = iterator.next().next();
	}).toThrowError(TypeError);
})

test("", () => {
	
	const aminoOne = "UUUUAAUUU";
	const expAminOne = 	['Fenylalanin'];

	const iterator = translate(aminoOne);
	
	let aminoAcid = iterator.next().value;
	expect(aminoAcid.name).toBe(expAminOne[0]);
					   
	
	expect(() => {
		aminoAcid = iterator.next().next();
	}).toThrowError(TypeError);
})

test("Invalid codon numbers", () => {
	const aminoInvalid = 999; 

	expect(() => {
		for (let aminoAcid of translate(aminoInvalid)) {
			fail("The code should not be translated.");
		}
	}).toThrowError("TranslationError: Unknown amino acid code.");
})

test("Invalid codon special character", () => {
	const aminoInvalid = "#$)"; 

	expect(() => {
		for (let aminoAcid of translate(aminoInvalid)) {
			fail("The code should not be translated.");
		}
	}).toThrowError("TranslationError: Unknown amino acid code.");
})




