ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
    
    console.log("test");
    var tableaux = JSON.parse(reponse);
    
    tableaux.forEach(function (tableau) {
        var trElt = document.createElement("tr");
        trElt.appendChild(createTh(tableau.nom));
        trElt.appendChild(createTh(tableau.annee));
        trElt.appendChild(createTh(tableau.peintre));
        
        document.getElementById("tableaux").appendChild(trElt);
    });
});

function createTh(textContent){
    var thElt = document.createElement("th");
    thElt.textContent = textContent;
    return thElt;
}