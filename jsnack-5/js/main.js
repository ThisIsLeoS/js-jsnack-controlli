// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var num, 
    oddNums = [];
for (var i = 0; i < 6; ++i)
{
    num = parseFloat(prompt("Enter a number"));
    if (num % 2 !== 0) oddNums[i] = num;
}
console.log(oddNums);