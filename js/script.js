// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

//     Bonus:
// In una cartella bonus:
// Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
// Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
// Poi aggiungiamo un pulsante per aumentare questo numero.

var app = new Vue(
    {
        el: '#app',
        data: {
            // message: 'Questo è il mio primo messaggio con Vue',
            // img: 'https://c.tenor.com/Jb3EbO71JKEAAAAC/ron-swanson-parks-and-rec.gif'
            message_2: 'Bici da corsa costosa',
            img_2: 'https://www.bmc-switzerland.com/media/catalog/product/cache/86a9a13297e2ff4b2d593e234876b106/r/o/roadmachine_01_one_gry_blk_wht.png',
            number: 0,
            color: 'red'
        }
    }
);