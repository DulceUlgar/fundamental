console.log(addSpanishInternationalPrefixes());
export function countdown() {
    let count = 10;
    /* Utilizando el bucle while completa la function y devuelve GO cuando el contador llegue a 0. 
    Caution: ten cuidado de no generar un bucle infinito */
    while(count>0){
        count--;
    }
    return 'GO';
}

export function createNumberList() {
    let arrNumbers = [];
    let number=1;

    /* Con el bucle do..while crea un array de 10 números. Retorna el array*/
    do{
        arrNumbers.push(number);
        number++;
    }while(arrNumbers.length<10)
    return arrNumbers;
}

export function makePizza() {
    /* Con el bucle 'for' crea una pizza de 4 quesos, creando un objeto. Ingredientes: masa, tomate, mozzarella, cheddar, gorgonzola, parmesano. Completa la function */

    let pizza = {};
    let ingredients = ['masa', 'tomate', 'mozzarella', 'cheddar', 'gorgonzola', 'parmesano'];
    for(let i = 0;i<ingredients.length;i++){
        pizza['ingredient'+(i+1)] = ingredients[i];
    }
    return pizza;
}

export function addSpanishInternationalPrefixes() {
    /* Añade el prefijo internacional de españa a los números de teléfonos del array (+34-). Utiliza el bucle foreach */
    let phoneNumberList = ['054060719', '029830776', '159949736', '663170151', '513407584'];
    let phoneNumberListWithPrefixes = [];
    for(let phoneNumber of phoneNumberList){
        phoneNumberListWithPrefixes.push('+34-' + phoneNumber);
    }
    return phoneNumberListWithPrefixes
}

export function addSpanishInternationalPrefixes() {
    /* Añade el prefijo internacional de españa a los números de teléfonos del array (+34-). Utiliza el bucle foreach */
    let phoneNumberList = ['054060719', '029830776', '159949736', '663170151', '513407584'];

}
