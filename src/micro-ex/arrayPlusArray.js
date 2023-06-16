/* 
## Array Plus Array 
Obtener la suma de dos matrices / arrays ... en realidad, la suma de todos sus elementos

PD: Cada matriz incluye solo números enteros. La salida también es un número.
*/

export function arrSum(arr1, arr2)
{
    let sum = 0;
    arr1.forEach(element => {
        sum += element;
    });
    arr2.forEach(element => {
        sum += element;
    });
    return sum;
}
