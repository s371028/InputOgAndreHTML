/*Oppgave 1
Lag en enkel HTML-side der du kan skrive inn navnet og alderen din i to forskjellige
tekstbokser. Skriv så JavaScript-kode i samme fil for å vise navnet og alderen når en knapp
trykkes. Lag så en sjekk på aldersfeltet om feltet inneholder et tall som er større enn null.
Dersom det ikke er det skal det skrives ut en feilmelding enten via en «alert»-boks eller i et
eget felt.*/

let opplisningen=[];
  function visInfo() {

      const navn=document.getElementById("Enavn").value;
      const  alder= document.getElementById("eAlder").value;
      const tall=Number(alder);
      if (isNaN(tall)){
          document.getElementById("eAlder").value = "Ikke et tall";
      }else {
          let ut = "<table><tr>" +
              "<th>Navn</th><th>Alder</th></tr>";
         ut+= "<tr><td>"+navn+"</td><td>"+tall+"</td></tr>"
          ut+="</table>";
          document.getElementById("Info").innerHTML=ut;

      }
      //document.getElementById("Navn").innerHTML=navn;

     /*let feil=0;
      if (isNaN(Number(alder))){

          //feil++;
      } else {
          opplisningen.push(oppLesning);
      }
/*if (feil===0){


}*/
    //  visAlle()


      //ut.innerHTML = ut;
  //}
  //function visAlle() {

   /* for (let i of opplisningen) {
        ut += "<tr><td>" + i.navn + "</td></tr>";

    }*/



}



