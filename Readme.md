# Body
TBD

# Knihovna pro překlad mRNA na aminokyseliny

## Popis

Cílem tohoto projektu je seznámit se a pochopit programovací konstrukty jazyka JavaScript, objekty, řetězec prototypů, konstruktory a základy tříd ECMAScriptu 2015. Vaším úkolem bude vytvořit knihovnu translation poskytující základní operace potřebné pro práci s translací při syntéze bílkovin.

Knihovna bude exportovat následující:
- Generátor translate, který na svém vstupu bude očekávat řetězec kódující mRNA (např. "AUGUUUUCU"). Tento generátor bude postupně číst trojice znaků (tzv. kodony). Každý kodon bude převeden pomocí níže uvedné translační tabulky na nový objekt reprezentující molekulu aminokyseliny. Zajistěte, aby generátor při každé iteraci vrátil nový objekt reprezentující danou aminokyselinu. Pokud generátor narazí na terminační kodon (viz translační tabulka), zpracování řetězce mRNA se okamžitě ukončí a generátor již nevrací žádné objekty reprezentující amino kyseliny, ani řetězec mRNA dále nezpracovává.
- Konstruktor BaseAminoAcid: Konstruktor bázové třídy aminokyselin. Uživatel bude moci tento konstruktor použít pro ověření, zda jim spravovaný objekt je aminokyselinou pomocí operátoru instanceof.
- Třídu TranslationError odvozenou od Error, která bude použitá pro oznámení chyb při translaci, např. při detekci nevalidního kodonu, nebo nedostatku vsupních písmen ve zbývající části mRNA.

Pro aminokyseliny používejte česká jména. Zajistěte, aby každý objekt reprezentující aminokyselinu ve svém řetězci prototypů obsahoval vlastnost name nesoucí české jméno aminokyseliny. Objekty vytvářejte takovým způsobem, aby jméno každé aminokyseliny bylo ve spuštěném programu vytvořeno právě jednou. Zajistěte, aby prototypem, dvou objektů reprezentující stejnou aminokyselinu vygenerovanou pomocí translate byl stejný objekt a právě tento objekt nesl české jméno aminokyseliny.

Vaši knihovnu dokumentujte a otestujte,

Očekává se využití a spuštění knihovny pomocí Node.js. Ukázkový soubor použití knihovny můžete najít v Moodle včetně očekávaného výstupu. Je zakázáno používat třídy EcmaScriptu 2015 a novějších pro práci s objekty reprezentující aminokyseliny. Třídu TranslationError naopak naprogramujte s využitím tříd EcmaScriptu 2015.

## Implementační detaily knihovny translation.mjs

- Knihovna pojmenovaná translation.mjs bude součástí odevzdaného souboru.
- Pro překlad mRNA na aminokyseliny se využívá translační tabulka.
- Zajistěte, aby bylo možné generátor volat opakovaně a bylo tak možné vytvářet aminokyseliny z více řetězců mRNA zároveň.

## Další očekávané vlastnosti knihovny

- Efektivní, dokumentovaný a čitelný kód.
- Odevzdejte testy, kterými jste knihovnu testovali.

## Testy knihovny

V rámci vypracování projektu byste si měli vytvořit testy. Skript test.sh by měl spouštět tyto testy (spuštěný bez parametrů). Pokud budete pro testy potřebovat instalovat závislosti, implementujte parametr install pro testovací skript.

## Dokumentace

Projekt dokumentujte pomocí dokumentačních řetězců přímo v kódu knihovny. Využijte nástroje jako je JSDoc, Doxygen apod. Vytvořte soubor doc.sh, který po spuštění vygeneruje dokumentaci z dokumentačních řetězců.

## Pravidla vypracování projektů

Studenti ve své práci musí pracovat samostatně a tvůrčím způsobem. Vytvořený kód by měl být přehledný a komentovaný, či samopopisný. Nelze kopírovat příklady řešení, hotová řešení nebo obdobné podklady, které jsou zveřejněny nebo jsou studentům jinak dostupné (jedná se o kopírování celých řešení nebo jejich tak velkých částí, že jejich okopírování vede k funkčně shodnému nebo velmi obdobnému řešení zadání). Není dovolená společná práce ve skupinách tak, že její výsledky jsou potom odevzdávány jako řešení jednotlivce (jednotlivců).

Studenti se musí zdržet jednání, které je v rozporu s dobrými mravy a které by mohlo vést k obcházení skutečného způsobu řešení zadání v duchu těchto zadání jimi samotnými nebo jinými studenty. Pokud student(i) poruší výše uvedená pravidla, může mu hodnocení projektu být sníženo až na 0 bodů.

## Odevzdání

Do IS je třeba odevzdejte komprimovaný projekt ve formátu zip. Odevzdávaný soubor pojmenujte jako login.zip. Po rozbalení odevzdaného souboru vzniknou v aktuálním adresáři soubory translation.mjs, test.sh a doc.sh, současně mohou vzniknout další soubory zmíněné v zadání, nebo vámi požadované.

Odevzdávejte pouze Vámi vytvořené soubory, přebírání jakéhokoliv cizího kódu není povoleno.

Pro účely testování a vytváření dokumentace můžete využít cizí kód. ten však neodevzdávejte, ale zajistěte jeho získání ve skriptech test.sh a doc.sh.

## Orientační hodnocení projektu

- program na testovacích datech vykazuje očekávané chování - 5b.,
- kvalita implementace a čitelnost kódu a dokumentace, vhodné využití jazyka JavaScript - 3b.,
- kvalita vlastních testů - 2b.
 
## Formální chyby, které nebudou tolerovány:

- odevzdaný soubor nelze spustit a odzkoušet: 0 bodů
- odevzdáno po termínu: 0 bodů
- nedodržení zadání: 0 bodů
- nefunkční kód: 0 bodů
- opsáno: 0 bodů (pro všechny, kdo mají stejný kód), návrh na zahájení disciplinárního řízení.

## Kompatibilita

- Uveďte ve které verzi node jste vaše řešení testovali.


## Translační tabulka

V prvním sloupci najdete kodon, ve druhém sloupci český název aminokyseliny. Terminačních kodonu jsou označené ve druhém slopci řetězcem "STOP".

+ "UUU": Fenylalanin,
+ "UUC": Fenylalanin,
+ "UUA": Leucin,
+ "UUG": Leucin,
+ "CUU": Leucin,
+ "CUC": Leucin,
+ "CUA": Leucin,
+ "CUG": Leucin,
+ "AUU": Isoleucin,
+ "AUC": Isoleucin,
+ "AUA": Isoleucin,
+ "AUG": Methionin,
+ "GUU": Valin,
+ "GUC": Valin,
+ "GUA": Valin,
+ "GUG": Valin,
+ "UCU": Serin,
+ "UCC": Serin,
+ "UCA": Serin,
+ "UCG": Serin,
+ "CCU": Prolin,
+ "CCC": Prolin,
+ "CCA": Prolin,
+ "CCG": Prolin,
+ "ACU": Threonin,
+ "ACC": Threonin,
+ "ACA": Threonin,
+ "ACG": Threonin,
+ "GCU": Alanin,
+ "GCC": Alanin,
+ "GCA": Alanin,
+ "GCG": Alanin,
+ "UAU": Tyrosin,
+ "UAC": Tyrosin,
+ "UAA": "STOP",
+ "UAG": "STOP",
+ "CAU": Histidin,
+ "CAC": Histidin,
+ "CAA": Glutamin,
+ "CAG": Glutamin,
+ "AAU": Asparagin,
+ "AAC": Asparagin,
+ "AAA": Lysin,
+ "AAG": Lysin,
+ "GAU": Kyselina asparagová,
+ "GAC": Kyselina asparagová,
+ "GAA": Kyselina glutamová,
+ "GAG": Kyselina glutamová,
+ "UGU": Cystein,
+ "UGC": Cystein,
+ "UGA": "STOP",
+ "UGG": Tryptofan,
+ "CGU": Arginin,
+ "CGC": Arginin,
+ "CGA": Arginin,
+ "CGG": Arginin,
+ "AGU": Serin,
+ "AGC": Serin,
+ "AGA": Arginin,
+ "AGG": Arginin,
+ "GGU": Glycin,
+ "GGC": Glycin,
+ "GGA": Glycin,
+ "GGG": Glycin,


## Literatura:
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols 
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function* 
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield 
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield* 
 - https://nodejs.medium.com/announcing-a-new-experimental-modules-1be8d2d6c2ff
