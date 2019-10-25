// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

var sum = 0;
for (var i = 0; i < 5; ++i)
{
    num = parseFloat(prompt("Enter a number"));
    sum += num;
}
/* var j = 0;
while (j < 5)
{
    num = parseFloat(prompt("Enter a number"));
    sum += num;
    j++;
} */
console.log(sum);