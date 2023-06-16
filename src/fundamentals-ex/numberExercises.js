

export function checkVariable(number) {
    return typeof number;
}

export function checkIfIsInteger(number) {
    if(typeof number === "integer"){
        return true;
    }
    return false;
}

export function checkIfNumberIsInfinite(number) {
    /* Tendrás que utilizar un condicional / if ... */
    if(number === Infinity){
        return "Number is Infinite";
    }
    return false;
}

export function sum(num1,num2) {
    /* Completa la function utilizando el operador de suma + */
    return num1 + num2;
}

export function subtract(num) {
    /* Completa la function utilizando el operador de sustracción - */
    return 85 - num;
}

export function multiply(num) {
    /* Completa la function utilizando el operador de sustracción - */
    return num * 5;
}

export function divide(num) {
    /* Completa la function utilizando el operador de división / */
    return num / 2;
}

export function checkIfNumbIsDivisibleByThree(num) {
    /* Completa la function utilizando el operador modulus y utiliza el conditional if() */
    if(num % 3 == 0){
        return 'Number is divisible by 3';
    }else{
        return 'Number isnt divisible by 3'
    }
}
