/* 
## Counting Sheeps

Los "true" son ovejas, los "false" son lobos ... Cuantas ovejas hay?

*/

export function countSheeps(list)
{

    let count =0; 
    list.forEach(element => {
        if(element==true) count++;
    });
    if(count==0){
        return 'UPS!!! Wolfs eaten Sheeps';
    }
    return `There are ${count} sheep in total`
}
