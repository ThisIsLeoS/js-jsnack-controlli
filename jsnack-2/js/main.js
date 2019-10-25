// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var firstWord = prompt("Enter the first word");
var secondWord = prompt("Enter the second word");
var longestWordMsg = document.querySelector(".longest-word-msg");
if (firstWord.length < secondWord.length)
{
    longestWordMsg.textContent = "Words sorted by lenght: " + firstWord + ", " + secondWord;
}
else if (firstWord.length > secondWord.length)
{
    longestWordMsg.textContent = "Words sorted by lenght: " + secondWord + ", " + firstWord;
}
else
{
    longestWordMsg.textContent = "The entered words have the same length";
}