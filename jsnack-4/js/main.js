// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitedPeople = ["pippo", "pluto", "paperino", "ciccio"];
var name = prompt("Enter your name");
var found = false;
var i = 0;
while (i < invitedPeople.length && found === false)
{
    if (name === invitedPeople[i]) found = true;
    ++i;
}
console.log(found ? "come in!" : "YOU SHALL NOT PASS!");
