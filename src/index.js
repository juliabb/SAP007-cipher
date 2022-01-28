import cipher from './cipher.js';

console.log(cipher); 


//Interações (DOM, EventListener, document.getElement)

//Pegando a interação com o botão
const botaoCifra = document.getElementById('bttnCifra');
function bttnCifra (){
     let text = document.getElementById('text').value //lendo o valor na textarea
     let offset = document.getElementById('offset').value

     const cifrando = cipher.encode(offset, text);
     document.getElementById('answerCifra').innerHTML = cifrando; //puxando a cifra do outro js e colocando o resultado no HTML
}

botaoCifra.addEventListener('click', bttnCifra);
