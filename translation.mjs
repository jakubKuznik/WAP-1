"use strict";


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



/** Generator which has mRNA code on its input (for example "AUGUUUUCU")
* 
* @param mRNA
* @return
*/
export function* translate(mRNA){
    
    return mRNA 
}

// It is forbiden to use classes of EcmaScript 2015
/**
 *  
 */
export class BaseAminoAcid {

    /**
     * 
     * @param {*} name czech name of an aminoacid
     * 
     */
    // Object has to be created in the way so name of each aminoacid is there only once!    
    constructor (name) {
        this.name = name;
    }

    /**
     * Check whenever the object is an aminoacid 
     */
    instanceof(){

    }

}

// Programe this using EcmaScript 2015 classes 
/**
 * 
 */
export class TranlationError extends Error {

}