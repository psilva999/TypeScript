"use strict";
//string, number, boolean
const quote = 'berlin is burning', year = 1945, condi = true;
console.log(typeof quote, typeof year);
if (typeof year === 'number')
    console.log(`${year} is the year of the end of the war`);
else if (typeof quote === 'string')
    console.log(`${quote} is a ww2 fact`);
//union types
let total = 23;
console.log(total = 24);
function clouds(iron) {
    if (typeof iron === 'string')
        return `${iron} é do tipo ${typeof iron}`;
}
console.log(clouds('empire'));
if (clouds('empire'))
    console.log('Empire of the clouds');
//DOM
const button = document.querySelector('button');
button?.click();
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um string
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
function toNumber(maiden) {
    if (typeof maiden === 'number')
        return `${maiden} é do tipo Number`;
    else if (typeof maiden === 'string')
        return Number(maiden);
    else
        return `error: ${maiden} deve ser do tipo número`;
}
console.log(toNumber('Wellerman'));
if (toNumber(17))
    console.log("tipo number");
