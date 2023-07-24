//Si crea un array contenente tutte le email che hanno permessi d'amministratore per
//accedere al database
const dataBase = ["computer@gmail.com", "science@gmail.com","informatic@gmail.com", "tech@gmail.com" ]
// console.log(dataBase);

// Creamo un ciclo che parte da 1 fino a tutta la lunghezza dell'array e quindi a tutte le email presenti si controlla tramite if se la stringa inserita dall'utente corrisponda a una di quelle mail e si da esito positivo.
//  In caso contrario si stamperà un messaggio d'errore.
const mail = prompt("Inserire la mail");

let result = "Non puoi accedere";
for (let i = 0; i <= dataBase.length; i++){
    const match = dataBase [i];
    if (mail === match){
        result = "Puoi accedere";}

}if (result ==="Puoi accedere"){
    console.log ("Hai il permesso")
}else {
    console.log("Non hai il permesso");
}















