# Traccia
Mail
1.Chiedi all'utente la sua email controlla che sia nella lista di chi può accedere. 
2.stampa un messaggio appropriato sìll'esito del controllo.

# Svolgimento 
1. In HTML creamo un form dove l'utente puo mettere una mail,con 2 buttoni (submit e cancella).E due paragrafi che avranno lo scopo informativo : Mail accettata e Mail non presente.
2. Si crea un array contenente tutte le email che hanno permessi d'amministratore per
accedere al database.
3. Creamo un ciclo che parte da 1 fino a tutta la lunghezza dell'array e quindi a tutte
le email presenti si controlla tramite if se la stringa inserita dall'utente corrisponda a una di quelle mail e si da esito positivo.
 In caso contrario si stamperà un messaggio d'errore.