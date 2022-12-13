/*-------------------------------SNACK 1------------------------------------ */
/*Il software deve chiedere per 10 volte all’utente di inserire un numero. 
(qui potete usare un prompt). 
Il programma stampa la somma di tutti i numeri inseriti.
*/
const risultatoDiv = document.getElementById ("risultatoDiv")

let listaUtente = []
let base = 0

for (let i=0; i < 10 ; i++) {
    listaUtente.push (parseInt(prompt("Digita qui il tuo numero . . .")))
}
console.log(listaUtente)
for (let z=0; z < listaUtente.length ; z++) {
    base=base +listaUtente[z]
}
console.log(base)

risultatoDiv.innerText = base
