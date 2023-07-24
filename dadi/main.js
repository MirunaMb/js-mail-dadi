// Applichiamo la formula per generare un random number
let pcNumber = Math.floor(Math.random()* 6)+1;
let userNumber =  Math.floor(Math.random()* 6)+1;
console.log(pcNumber ,userNumber)
// 
if (pcNumber > userNumber) {
    // console.log("Il pc ha un numero maggiore del giocatore",pcNumber ,userNumber)
}else if (userNumber > pcNumber){
    console.log("Il giocatore ha un numero maggiore del pc",userNumber, pcNumber)

}