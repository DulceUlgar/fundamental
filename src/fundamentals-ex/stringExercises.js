export function returnHello() {
    /* Completa la function */
    return "Hello"

}

export function returnAString(cadena) {
    /* Completa la function */
    return cadena;
}

export function concatenateStrings() {
    const firstWord = 'I';
    const secondWord = 'Love JS';
    /* Completa la function */
    return firstWord + " " + secondWord;

}

export function giveOneLetter() {
    const dog = 'dog';
    /* Completa la function */
    return dog.charAt(dog.length -1);
}

export function giveTheIndexOfWord() {
    const wordToSearch = 'Butterfly';
    const phrase = "Once upon a time!!!";
    /* Completa la function */
    return phrase.indexOf(wordToSearch);
}

export function replaceFishWord() {
    let phrase = 'Give a Man a Fish';
    /* Completa la function */
    phrase = phrase.replace("Fish", "Pussy Cat")
    return phrase;
}

export function giveAllLettersInUppercase() {
    let phrase = 'Ride Him, Cowboy';
    /* Completa la function */
    return phrase.toUpperCase();
}

export function removeWhiteSpaces() {
    let phrase = '    Hands Down    ';
    /* Completa la function */
    return phrase.trim();

}
