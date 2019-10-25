// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitedPeople = ["pippo", "pluto", "paperino", "ciccio"];
var name = prompt("Enter your name");
var found = false;
for (var i = 0; i < invitedPeople.length && found === false; ++i)
{
    if (name === invitedPeople[i]) found = true;
}
console.log(found? "come in!" : "YOU SHALL NOT PASS!");
