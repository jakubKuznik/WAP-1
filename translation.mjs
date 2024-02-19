"use strict";


/** Generator which has mRNA code on its input (for example "AUGUUUUCU")
* 
* @param mRNA
* @return
*/
export function* translate(mRNA){

    var acidPrototypes = new Map();

    const aminoacids = {
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


    
    console.log(mRNA);
    
    if (mRNA.length % 3 != 0){
        // todo TranslationError
        console.log("Wrong");
    }


    // slice the string to 3 chars 
    for (let i = 0; i < mRNA.length; i += 3){
        
        let aminoStr = mRNA.substring(i, i+3);

        if (!acidPrototypes.has(aminoacids[aminoStr])) {
            acidPrototypes.set(aminoacids[aminoStr], Object.create(BaseAminoAcid));
        }

        let aminoProt = acidPrototypes.get(aminoacids[aminoStr]);
        

        var aminoObj = Object.create(aminoProt);
        
        console.log(aminoStr);
        console.log(Object.getPrototypeOf(aminoProt));
        console.log(Object.getPrototypeOf(aminoObj));


    }
    
    yield mRNA; 
}

// It is forbiden to use classes of EcmaScript 2015
/**
* 
* @param {*} name czech name of an aminoacid
*/
export function BaseAminoAcid (name) {
    
    // Object has to be created in the way so name of each aminoacid is there only once!    

    this.name = name; 
    

}

// Programe this using EcmaScript 2015 classes 
/**
 * 
 */
export class TranslationError extends Error {

    constructor (foo){
        this.foo = foo;
    }
}