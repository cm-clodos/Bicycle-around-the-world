"use strict";
// ID's in const verwandelt
const vorname = document.querySelector("#vorname");
const nachname = document.querySelector("#nachname");
const mail = document.querySelector("#mail");
const nachricht = document.querySelector("#nachricht");
const vornametext = document.querySelector("#vornametext");
const nachnametext = document.querySelector("#nachnametext");
const mailtext = document.querySelector("#mailtext");
const nachrichttext = document.querySelector("#nachrichttext");

//function auswerten
function auswerten() {
   if (vorname.value == "") {
      //wenn vorname leer ist löst die funktion aus
      vornametext.innerHTML= "Sie müssen einen Vorname eingeben!";
      vorname.focus();
      return false;
   } else {
      vornametext.innerHTML = "";
   }

   if (nachname.value == "") {
      nachnametext.innerHTML = "Sie müssen ihren Nachnamen eingeben";
      nachname.focus();
      return false;
   } else {
      nachnametext.innerHTML = "";
   }
   if (!mail.value.includes("@")) {
      //wenn mail kein @ enthält löst die funktion aus
      mailtext.innerHTML = "Sie müssen eine E-mail angeben!";
      mail.focus();
      return false;
   } else {
      mailtext.innerHTML = "";
   }
   if (nachricht.value == "") {
      nachrichttext.innerHTML = "Sie müssen eine Nachricht eingeben";
      nachricht.focus();
      return false;
   } else {
      nachrichttext.innerHTML = "";
   }
   if (confirm("Möchten sie wirklich absenden?") == true) {
      return true;
   } else {
      return false;
   } /*wenn true kommt man auf die folgeseite, ansonsten bleibt mann auf der 
   Formular Seite*/
}

//wenn true sind daten in der URL der Zielseite vorhanden.
//file:///Users/claudiamartinez/Documents/Web%20Development/Javascript-Snippets/zielseite.html?Name=Claudia&Mail=clodos_m92%40hotmail.com&Alter=28
