var mail = ['markoka@live.it', 'giorgio@outlook.it', 'justin@gmail.com', 'pinco@gmail.com', 'pallino@live.it'];
var i = 0;
var bool = 0;
var inserimento = prompt('inserisci mail:')

for (i=0; i<5; i++) {

    if (inserimento === mail[i]) {
        bool = 1;
    }

}

if (bool!=1) {
    alert('La mail non è presente.');
} else {
    alert('La mail è presente');
}
