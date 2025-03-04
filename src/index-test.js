//Interações (DOM, EventListener, document.getElement), innerHTML

import cipher from './cipher.js';

//Pegando a interação com o botão CIFRA
const botaoCifra = document.getElementById('buttonCipher');

function buttonCipher (e){

     e.preventDefault() //impede o recarregamento auto da página
     let offset = Number(document.getElementById('offset').value); //lendo o valor do Numero do input
     let string = document.getElementById('text-insert').value; //lendo o valor string da textarea

     const resultadoCifra = cipher.encode(offset, string); //puxando o resultado da função da cifra dentro cipher.js

     document.getElementById('answers').innerHTML = resultadoCifra; //definindo o lugar (answers que esta no index.html) e colocando o resultado no HTML (innerHTML)
}
 
botaoCifra.addEventListener('click', buttonCipher) //chamando a função buttonCipher (linha 8) quando tiver o click no botão

//Pegando a interação com o botão DECIFRA

const botaoDecifra = document.getElementById('buttonDecipher');

function buttonDecipher (e){

     e.preventDefault() //impede o recarregamento auto da página
     let offset = Number(document.getElementById('offset').value);
     let string = document.getElementById('text-insert').value; 

     const resultadoDecifra = cipher.decode(offset, string);

     document.getElementById('answers').innerHTML = resultadoDecifra; 
}
 
botaoDecifra.addEventListener('click', buttonDecipher);

