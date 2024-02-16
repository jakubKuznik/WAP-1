'use strict'
/**
 * \brief Ukázkový skript pro první projekt předmětu WAP
 */

/// Využijeme knihovnu, která je předmětem zadání projektu
import { translate } from "./translation.mjs";

/// knihovna musí obsahovat generátor translationTable. Ukázka jeho použití
console.log(">>>>>>>>>> Ukázka 1 (translace)");
for (let aminoAcid of translate("AUGUUUUCU")) {
	console.log(aminoAcid.name);
}

/// Zpracování terminačního kodonu
console.log(">>>>>>>>>> Ukázka 2 (terminační kodóny)");
for (let aminoAcid of translate("UAG")) {
	console.log("Sem se nedostaneme");
}
for (let aminoAcid of translate("UAGUUU")) {
	console.log("Ani sem se nedostaneme");
}
for (let aminoAcid of translate("UAA")) {
	console.log("Sem také ne");
}
for (let aminoAcid of translate("UGA")) {
	console.log("Nedostaneme se ani sem");
}

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
