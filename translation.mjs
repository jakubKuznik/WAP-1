"use strict";
// name:    Jakub Kuznik 
// login:   xkuzni04 
// faculty: VUT FIT 
// course:  WAP - 2024
// node.js: v20.11.1


// Programe this using EcmaScript 2015 classes 
/**
 * Translation Error is custom error class 
 * for the translation librarry. 
 */
export class TranslationError extends Error {

    /**
     * @param {String} message Error message that will be thrown. 
     */
    constructor(message) {
        super(message); 
        this.name = 'TranslationError'; 
    }
}


// It is forbiden to use classes of EcmaScript 2015
/**
 * Class represent one Amino acid.
 * There is only one prototype of the aminoacid objects with same name,
 * but the objects are different.  
 * @param {string} name Holds the czech aminoacid name. 
 */
export function BaseAminoAcid (name) {

    this.name = name; 
}


/** Generator Function which has mRNA code on its input (for example "AUGUUUUCU").
* Next aminoacid can be accesed throughout the iterator.  
* 
* @param {String} mRNA String that is mRNA codon, that we want to translate.
* 
* @return next BaseAminoAcid object or nothing. 
*/
export function* translate(mRNA){

    const acidPrototypes = new Map();

    const aminoacidTable = {
        UUU: "Fenylalanin",
        UUC: "Fenylalanin",
        UUA: "Leucin",
        UUG: "Leucin",
        CUU: "Leucin",
        CUC: "Leucin",
        CUA: "Leucin",
        CUG: "Leucin",
        AUU: "Isoleucin",
        AUC: "Isoleucin",
        AUA: "Isoleucin",
        AUG: "Methionin",
        GUU: "Valin",
        GUC: "Valin",
        GUA: "Valin",
        GUG: "Valin",
        UCU: "Serin",
        UCC: "Serin",
        UCA: "Serin",
        UCG: "Serin",
        CCU: "Prolin",
        CCC: "Prolin",
        CCA: "Prolin",
        CCG: "Prolin",
        ACU: "Threonin",
        ACC: "Threonin",
        ACA: "Threonin",
        ACG: "Threonin",
        GCU: "Alanin",
        GCC: "Alanin",
        GCA: "Alanin",
        GCG: "Alanin",
        UAU: "Tyrosin",
        UAC: "Tyrosin",
        UAA: "STOP",
        UAG: "STOP",
        CAU: "Histidin",
        CAC: "Histidin",
        CAA: "Glutamin",
        CAG: "Glutamin",
        AAU: "Asparagin",
        AAC: "Asparagin",
        AAA: "Lysin",
        AAG: "Lysin",
        GAU: "Kyselina asparagová",
        GAC: "Kyselina asparagová",
        GAA: "Kyselina glutamová",
        GAG: "Kyselina glutamová",
        UGU: "Cystein",
        UGC: "Cystein",
        UGA: "STOP",
        UGG: "Tryptofan",
        CGU: "Arginin",
        CGC: "Arginin",
        CGA: "Arginin",
        CGG: "Arginin",
        AGU: "Serin",
        AGC: "Serin",
        AGA: "Arginin",
        AGG: "Arginin",
        GGU: "Glycin",
        GGC: "Glycin",
        GGA: "Glycin",
        GGG: "Glycin",
    }
    
    if (typeof mRNA !== "string") {
        mRNA = mRNA.toString();
    }

    // code in wrong format 
    if (mRNA.length % 3 !== 0){
        throw new TranslationError("TranslationError: mRNA code has invalid length.");
    }

    // slice the string into the 3 chars (amino codes)
    for (let i = 0; i < mRNA.length; i += 3){
        
        let aminoStr = mRNA.substring(i, i+3);
        
        // amino does not exists 
        if (!(aminoStr in aminoacidTable)){
            throw new TranslationError("TranslationError: Unknown amino acid code.");
        }
        else if (aminoacidTable[aminoStr] === "STOP"){
            break;
        }
        else if (!acidPrototypes.has(aminoStr)){
            let aProt = new BaseAminoAcid(aminoacidTable[aminoStr]);
            acidPrototypes.set(aminoStr, aProt);
        }

        let aminoProto = acidPrototypes.get(aminoStr);
        let aminoObj = Object.create(aminoProto);
        
        yield aminoObj;
    }
}
