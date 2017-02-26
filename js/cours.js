/*var req = new XMLHttpRequest();
// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", function () {
    if(req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
        console.log(req.responseText);
    } else {
        console.error(req.status + " " + req.statusText);
    }
});

req.addEventListener("error", function(){
    //La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});

req.send(null);

function afficher(reponse) {
    console.log(reponse);
}

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {
    console.log(reponse);
});

var avion = {
    marque: "Airbus",
    couleur: "A320"
};
console.log(avion);
// Transforme l'objet JavaScript en chaîne de caractères JSON
var texteAvion = JSON.stringify(avion);
console.log(texteAvion);
//Transforme la chaîne de caractères JSON en objet JavaScript
console.log(JSON.parse(texteAvion));

var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }
];
console.log(avions);
// Transforme le tableau d'objets JS en chaîne de caractères JSON
var texteAvions = JSON.stringify(avions);
console.log(texteAvions);
// Transforme la chaîne de caractères JSON en tableaux d'objets JavaScript
console.log(JSON.parse(texteAvions));

ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
    //Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    //Affiche le titre de chaque films
    films.forEach(function (film) {
        console.log(film.titre);
    })
})*/

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {
    var langages = reponse.split(";");
    langages.forEach(function (langage) {
        var liElt = document.createElement("li");
        liElt.textContent = langage;
        document.getElementById("langages").appendChild(liElt);
    });
})