/* 
## Twice as old

Tu función debería recibir dos argumentos:

edad actual del padre (años)
edad actual de su hijo (años)

Calcula en cuántos años tendrá el doble de edad el padre o cuantos años han pasado desde que tuvo el doble.

padre: 36, hijo: 7 -> 22
padre: 55, hijo: 30 -> 5
padre: 42, hijo: 21 -> 0
*/

export function twiceAsOld(dadAge, sonAge) {
    let auxDadAge = dadAge;
    let auxSonAge = sonAge;
    let count = 0;

    let isTwice = (auxSonAge * 2 == auxDadAge);
    while (isTwice == false && auxSonAge < 100) {
        auxSonAge++;
        auxDadAge++;
        count++;
        isTwice = (auxSonAge * 2 == auxDadAge);
    }
    if (isTwice) return count;
    auxDadAge = dadAge;
    auxSonAge = sonAge;
    count = 0;
    while (isTwice == false && auxSonAge > 0) {
        auxSonAge--;
        auxDadAge--;
        count++;
        isTwice = (auxSonAge * 2 == auxDadAge);
    }
    if (isTwice) { return count }
    else { return -1 }

}
