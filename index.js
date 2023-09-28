const message = ["BONJOUR", "SALUT","BONSOIR"];
const nom = ["JENNY","CHRISTIAN"];
const aft = ["comment tu vas aujourd'hui","quoi de neuf pote"];
const random = Math.floor(Math.random() * message.length);
const random1 = Math.floor(Math.random() * nom.length);
const random2 = Math.floor(Math.random() * aft.length);



console.log(message[random],nom[random1],aft[random2]);