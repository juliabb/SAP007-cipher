import cipher from "./cipher.js";

const buttonCipher = document.getElementById("buttonCipher");
const buttonDecipher = document.getElementById("buttonDecipher");

buttonCipher.addEventListener("click", cipherTextReturn);
buttonDecipher.addEventListener("click", decipherTextReturn);

function cipherTextReturn(e) {
  e.preventDefault();
  const offset = Number(document.getElementById("offset").value)
  const string = document.getElementById("text-insert").value
  const resultCipher = cipher.encode(offset, string);
  const shownResult = document.getElementById("result-show")
  
  let mensageError = 'Ops...Não foi possível realizar sua Cifragem! Por favor adicione uma Mensagem e um Deslocamento, e tente novamente.'
    
  window.scrollBy(0, window.innerHeight)
  if (offset,string == null && offset,string == undefined && offset,string == 0){
    shownResult.classList.add('error');
    return shownResult.innerHTML = mensageError;
  }else {
  shownResult.classList.remove('error')
  shownResult.classList.add('result')
  return shownResult.innerHTML = resultCipher;
  }
}

function decipherTextReturn(e) {
  e.preventDefault();
  const offset = Number(document.getElementById("offset").value)
  const string = document.getElementById("text-insert").value
  const resultDecipher = cipher.decode(offset, string);
  const shownResult = document.getElementById("result-show")
  
  let mensageError = 'Ops...Não foi possível realizar sua Decifragem! Por favor adicione a Mensagem Cifrada e o Deslocamento, e tente novamente.'
    
  window.scrollBy(0, window.innerHeight)
  if (offset,string == null && offset,string == undefined && offset,string == 0){
    shownResult.classList.add('error');
    return shownResult.innerHTML = mensageError;
  } else {
  shownResult.classList.remove('error')
  shownResult.classList.add('result')
  return shownResult.innerHTML = resultDecipher;
  }
}
