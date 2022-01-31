import cipher from './cipher.js';

//Interações (DOM, EventListener, document.getElement)

//Pegando a interação com o botão
const botaoCifra = document.getElementById('bttnCifra');
function bttnCifra (){
     let string = document.getElementById('text').value; //lendo o valor da textarea
     let offset = parseInt(document.getElementById('offset').value);

     const resultadoCifra = cipher.encode(offset, string);
     document.getElementById('answerCifra').innerHTML = resultadoCifra; //puxando a cifra do outro js e colocando o resultado no HTML
}

botaoCifra.addEventListener('click', bttnCifra);