import cipher from './cipher.js';

console.log(cipher); //no console sei a letra F antes mesmo de declarar!! Descobrir o por que ---------------


//Interações (DOM, EventListener, document.getElement)

//Pegando a interação com o botão
const botaoCifra = document.getElementById('bttnCifra');

function bttnCifra (){
     document.getElementById("bttnCifra").addEventListener('click', bttnCifra)

}

