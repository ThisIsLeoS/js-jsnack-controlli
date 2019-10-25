// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var firstNum = parseFloat(prompt("Enter the first number"));
var secondNum = parseFloat(prompt("Enter the second number"));
var largestNumMsg = document.getElementsByClassName("largest-num-msg")[0];
if (firstNum > secondNum)
{
    largestNumMsg.textContent = "The largest of the two entered numbers is " + firstNum;
}
else if (firstNum < secondNum)
{
    largestNumMsg.textContent = "The largest of the two entered numbers is " + secondNum;
}
else
{
    largestNumMsg.textContent = "The entered numbers are equal!";
}