import cipher from './cipher.js';

console.log(cipher);


//Interações (DOM, EventListener, document.getElement)

//Pegando a interação com o botão
function encode(){
document.getElementById("cifrar").addEventListener('click', cifrar)

}

function decode (){
document.getElementById("decifrar").addEventListener('click', decifrar)
}

