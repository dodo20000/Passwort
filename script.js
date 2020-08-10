function Passwort_Auswerten() {
    var x = document.getElementById("Eingang").value;
    var y = "UHRZEIGERSINN";
    if ( x == y ) {
        document.getElementById("Passwort_antwort").innerHTML = "richtiges Passwort";
        document.getElementById("Passwort_antwort").style.color = "green";
        document.getElementById("Ergebnis").innerHTML = "Finde die Keksdose in der Hütte";
    }
    else {
        document.getElementById("Passwort_antwort").innerHTML = "falsches Passwort";
        document.getElementById("Passwort_antwort").style.color = "red";
        document.getElementById("Ergebnis").innerHTML = "";
    }

}
