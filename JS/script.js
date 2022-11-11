/* Show toggle Start */
let toggleBtn=document.getElementById("toggleBtn");
let showElements=document.querySelector(".navbar-collapse");
let isShow=true;
function showToggle(){
    if (isShow){
        showElements.style.display="none";
        isShow=false;
    }else{
        showElements.style.display="";
        isShow=true;
    }
}
/* Show toggle End */

/* Tester la saisie a la main de quantite */
/* Start */
document.getElementById("qte").addEventListener("blur",verifQte);
function verifQte(){
    if (document.getElementById("qte").value<1 || document.getElementById("qte").value>10){
        document.getElementById("qte").value="1";
        document.getElementById("prixQte").innerHTML="20 TND";
    } 
}
/* End */

/* Calcul la quantite de produit */
/* Start */
document.getElementById("qte").addEventListener("change",calculQte);
function calculQte(){
    document.getElementById("prixQte").innerHTML=20*document.getElementById("qte").value+" TND";
}
/* End */