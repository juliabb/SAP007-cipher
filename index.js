import cipher from './cipher.js';

//Interações (DOM, EventListener, document.getElement)

//Pegando a interação com o botão
const botaoCifra = document.getElementById('bttnCifra');

function bttnCifra (e){

     e.preventDefault() //impede o recarregamento auto da página
     let offset = Number(document.getElementById('offset').value);
     let string = document.getElementById('text').value; //lendo o valor da textarea

     const resultadoCifra = cipher.encode(offset, string);

     document.getElementById('answers').innerHTML = resultadoCifra; //puxando a cifra do outro js e colocando o resultado no HTML
}
 
botaoCifra.addEventListener('click', bttnCifra) 

//DECIFRA

const botaoDecifra = document.getElementById('bttnDeci');

function bttnDeci (e){

     e.preventDefault() //impede o recarregamento auto da página
     let offset = Number(document.getElementById('offset').value);
     let string = document.getElementById('text').value; //lendo o valor da textarea

     const resultadoDecifra = cipher.decode(offset, string);

     document.getElementById('answers').innerHTML = resultadoDecifra; //puxando a cifra do outro js e colocando o resultado no HTML
}
 
botaoDecifra.addEventListener('click', bttnDeci);