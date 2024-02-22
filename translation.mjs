"use strict";

// Programe this using EcmaScript 2015 classes 
/**
 * 
 */
export class TranslationError extends Error {

    constructor(message) {
        super(message); 
        this.name = 'TranslationError'; 
    }
}


// It is forbiden to use classes of EcmaScript 2015
/**
* 
*/
export function BaseAminoAcid (name) {
    // Object has to be created in the way so name of each aminoacid is there only once!    
    this.name = name; 
}


/** Generator which has mRNA code on its input (for example "AUGUUUUCU")
* 
* @param mRNA
* @return
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
